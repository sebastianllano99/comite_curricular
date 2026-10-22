const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');

const html = fs.readFileSync('index.html', 'utf8');
const source = fs.readFileSync('Asignaturas y creditos ya definidos.html', 'utf8');
const definition = JSON.parse(fs.readFileSync('data/catalogo-curricular.json', 'utf8'));
const scenarios = JSON.parse(fs.readFileSync('data/escenarios-curriculares.json', 'utf8'));
const literal = source.match(/const PLAN_DATA\s*=\s*(\[[\s\S]*?\n\]);/);
assert(literal, 'El archivo fuente debe incluir PLAN_DATA.');
const sourcePlan = vm.runInNewContext(`(${literal[1]})`, {}, {timeout: 1000});
const sourceCourses = Array.from(sourcePlan).flatMap(term => Array.from(term.m));
const key = course => `${course.n}|${course.cr}`;
const inventory = courses => Array.from(courses, key).sort();
const catalog = new Map(definition.courses.map(course => [course.id, course]));
const expectedOverrides = {var1: {PRO01: ['DAT02', 'MAN02'], PRO02: ['PRO01'], PRO07: ['PRO04']}};

assert.equal(sourceCourses.length, 53);
assert.equal(sourceCourses.reduce((sum, course) => sum + course.cr, 0), 147);
assert.equal(catalog.size, 53, 'Los IDs del catálogo deben ser únicos.');
assert.deepEqual(inventory(definition.courses), inventory(sourceCourses), 'El catálogo debe conservar nombres y créditos exactos de la fuente.');
assert.equal(html.match(/<section\b/g).length, 13, 'La presentación conserva 13 diapositivas.');
assert.equal(html, fs.readFileSync('Presentacion-8-semestres-v2-area-produccion.html', 'utf8'));

function embedded(name) {
  const match = html.match(new RegExp(`^const ${name} = (.*);$`, 'm'));
  assert(match, `Faltan datos incorporados: ${name}`);
  return JSON.parse(match[1]);
}
assert.deepEqual(embedded('DEFINED_CATALOG'), definition.courses);
assert.deepEqual(embedded('ALL_SCENARIOS'), scenarios);

const runtimeStart = html.indexOf('function inspectScenarioContinuity(scenario)');
const runtimeEnd = html.indexOf('const SCENARIO_ISSUES', runtimeStart);
assert(runtimeStart > 0 && runtimeEnd > runtimeStart);
const runtime = html.slice(runtimeStart, runtimeEnd);
function browserIssues(scenario) {
  const context = {DEFINED_CATALOG: definition.courses, candidate: scenario};
  return Array.from(vm.runInNewContext(`${runtime}\ninspectScenarioContinuity(candidate)`, context, {timeout: 1000}));
}

for (const [scenarioKey, scenario] of Object.entries(scenarios)) {
  assert.equal(scenario.plan.length, scenario.semestersCount);
  const placements = new Map();
  const areas = new Map();
  const courses = scenario.plan.flatMap(term => term.m);
  let completed = 0;
  for (const [index, term] of scenario.plan.entries()) {
    assert.equal(term.s, index + 1);
    const computed = term.m.reduce((sum, course) => sum + course.cr, 0);
    assert.equal(computed, term.c, `${scenarioKey}: suma de S${term.s}`);
    assert(computed <= 20, `${scenarioKey}: S${term.s} supera 20 créditos.`);
    const branches = new Set();
    for (const course of term.m) {
      assert(Number.isInteger(course.cr) && course.cr > 0);
      if (scenarioKey === 'actual') continue;
      const defined = catalog.get(course.catalogId);
      assert(defined, `Materia ajena al catálogo: ${course.n}`);
      assert.equal(course.n, defined.n);
      assert.equal(course.cr, defined.cr);
      assert.equal(course.area, defined.area);
      assert.equal(course.branch, defined.branch);
      assert(!branches.has(course.branch), `${scenarioKey}: rama repetida en S${term.s}: ${course.branch}`);
      assert(!placements.has(course.catalogId));
      branches.add(course.branch);
      const expected = expectedOverrides[scenarioKey]?.[course.catalogId] ?? defined.prereqIds;
      assert.deepEqual([...course.prereqIds].sort(), [...expected].sort(), `Relación modificada: ${course.n}`);
      for (const pre of expected) {
        assert(placements.has(pre) && placements.get(pre) < term.s, `${scenarioKey}: prerrequisito ${pre} de ${course.n}`);
      }
      assert.equal(course.minCompletedCredits, defined.minCompletedCredits);
      assert(completed >= course.minCompletedCredits, `${scenarioKey}: créditos previos de ${course.n}`);
      placements.set(course.catalogId, term.s);
      if (!areas.has(course.area)) areas.set(course.area, new Set());
      areas.get(course.area).add(term.s);
    }
    completed += computed;
  }
  assert.equal(completed, scenario.totalCredits);
  if (scenarioKey === 'actual') {
    assert.equal(completed, 175);
    assert.equal(scenario.plan.length, 10);
  } else {
    assert.equal(completed, 147);
    assert.equal(courses.length, 53);
    assert.deepEqual(inventory(courses), inventory(sourceCourses));
    for (const [area, active] of areas) {
      for (let term = Math.min(...active); term <= Math.max(...active); term++) {
        assert(active.has(term), `${scenarioKey}: interrupción de ${area} en S${term}`);
      }
    }
    assert(placements.get('FIN03') < placements.get('FIN04'), 'Análisis precede a Ingeniería Económica.');
    assert(placements.get('FIN04') < placements.get('FIN05'), 'Ingeniería Económica precede a Formulación.');
    assert.equal(courses.find(course => course.catalogId === 'FIN04').cr, 2);
    assert.equal(courses.find(course => course.catalogId === 'FIN03').cr, 3);
    assert.equal(placements.get('DAT01'), 2);
    assert.equal(placements.get('DAT02'), 3);
    for (const [field, area] of [['pctElectivas','Electivas Prof.'],['pctBasicas','Ciencias Básicas'],['pctProduccion','Producción']]) {
      const credits = courses.filter(course => course.area === area).reduce((sum, course) => sum + course.cr, 0);
      assert.equal(scenario.metrics[field], `${(credits / 147 * 100).toFixed(1)}%`);
    }
  }
  assert.deepEqual(browserIssues(scenario), [], `${scenarioKey}: validación incorporada`);
  console.log(`${scenarioKey}: ${courses.length} asignaturas, ${completed} cr; cargas [${scenario.plan.map(term=>term.c).join(', ')}]; ${scenarioKey === 'actual' ? 'sumas OK, referencia diagnóstica' : 'requisitos y ramas OK'}`);
}

// Check that the browser rejects invalid curricula instead of showing a false success.
const base = scenarios.oficial;
const changedCredit = structuredClone(base);
changedCredit.plan[0].m[0].cr++;
assert(browserIssues(changedCredit).some(issue => issue.startsWith('catálogo:')));
const repeatedBranch = structuredClone(base);
repeatedBranch.plan[2].m[0].branch = repeatedBranch.plan[2].m[1].branch;
assert(browserIssues(repeatedBranch).some(issue => issue.startsWith('rama repetida')));
const missingPrerequisite = structuredClone(base);
missingPrerequisite.plan[4].m.find(course => course.catalogId === 'FIN03').prereqIds = [];
assert(browserIssues(missingPrerequisite).some(issue => issue.startsWith('requisitos modificados')));
const wrongOrder = structuredClone(base);
const analysis = wrongOrder.plan[4].m.find(course => course.catalogId === 'FIN03');
const engineering = wrongOrder.plan[5].m.find(course => course.catalogId === 'FIN04');
wrongOrder.plan[4].m = wrongOrder.plan[4].m.filter(course => course !== analysis).concat(engineering);
wrongOrder.plan[5].m = wrongOrder.plan[5].m.filter(course => course !== engineering).concat(analysis);
assert(browserIssues(wrongOrder).some(issue => issue.startsWith('prerrequisito de')));
const overloaded = structuredClone(base);
overloaded.plan[0].m[0].cr = 21;
assert(browserIssues(overloaded).some(issue => issue.startsWith('límite de 20')));
console.log('El validador rechaza cambios de créditos, ramas duplicadas, requisitos alterados, orden incorrecto y sobrecarga.');

const staticTable = html.match(/<table class="ct" id="cirugia">[\s\S]*?<\/table>/)[0];
for (const expected of ['32 cr · 21.8%','11 cr · 7.5%','21 cr · 14.3%','13 cr · 8.8%','16 cr · 10.9%','10 cr · 6.8%']) {
  assert(staticTable.includes(expected), `Tabla por áreas: falta ${expected}`);
}
assert(html.includes("renderTM('tm-proposed',PROP,147)"));
assert(html.includes('175→147 cr · Reducción total de 28 créditos'));
for (const script of html.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/g)) {
  new vm.Script(script[1]);
}
console.log('13 diapositivas, cifras agregadas, archivos sincronizados y sintaxis JavaScript OK.');
