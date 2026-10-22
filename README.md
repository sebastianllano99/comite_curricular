# Informe curricular · Ingeniería Industrial UTP

Presentación de 13 diapositivas con un explorador de cinco mallas curriculares en la diapositiva 10. Abra [`index.html`](index.html) en un navegador o publíquelo como sitio estático. El HTML incluye sus fuentes y scripts; no requiere instalación ni compilación.

## Escenarios

| Escenario | Semestres | Créditos | Distribución |
| --- | ---: | ---: | --- |
| Malla actual UTP, reconstrucción para análisis | 10 | 175 | 16–20 cr por semestre |
| Plan propuesto oficial, catálogo actualizado | 8 | 147 | 14, 18, 20, 19, 20, 20, 18, 18 cr |
| Variación 1: producción anticipada | 8 | 147 | 14, 18, 20, 20, 20, 20, 18, 17 cr |
| Variación 2: transición progresiva | 9 | 147 | 14, 18, 18, 17, 16, 15, 16, 16, 17 cr |
| Variación 3: Digital Supply Chain e Industria 4.0 | 8 | 147 | 14, 18, 20, 19, 20, 20, 18, 18 cr |

La fuente de nombres y créditos es [`Asignaturas y creditos ya definidos.html`](Asignaturas%20y%20creditos%20ya%20definidos.html): **53 asignaturas y 147 créditos**. Las cuatro propuestas conservan exactamente ese inventario, incluida Estadística III y la cuarta Electiva de Exploración. Ingeniería Económica tiene **2 créditos**, según esta nueva fuente; Análisis Financiero conserva **3**. La distribución original de la fuente tenía 21 créditos en S3 y S6; las propuestas reorganizadas no superan 20.

Se aplica la regla acordada de **una asignatura por rama en cada semestre**, conservando ocho semestres en la propuesta base. Ciencias Básicas distingue Cálculo y Modelado, Álgebra Lineal y Física; Producción distingue Métodos y Producción, Calidad, Seguridad y Ambiente y Diseño de Plantas; Electivas distingue Concentración y Exploración. Las demás áreas tienen una rama cada una. Las ramas aparecen en las tarjetas, en sus fichas y en un filtro propio. La continuidad se comprueba **por área**, desde su primer semestre hasta su cierre; no implica que todas sus ramas estén presentes cada semestre. Administración ocupa S1–S5 sin interrupciones.

En la propuesta base, Estadística e IO tiene una asignatura por semestre entre **S2 y S8**: Programación, Estadística I, Estadística Multivariada, IO I, Estadística III, IO II y Simulación. La variación digital intercambia Estadística III e IO II entre S6 y S7, conservando nombres y créditos; sus énfasis digitales se describen en las fichas. La secuencia financiera ocupa S3–S7 en los escenarios de ocho semestres y S5–S9 en la transición: Economía, Contabilidad/Costos, Análisis Financiero, Ingeniería Económica y Formulación. En la variación 1, Métodos pasa a S4 y Producción I a S5; S8 queda en **17 créditos**.

Los totales por área del catálogo son: Ciencias Básicas 32, Básicas de Ingeniería 11, IO/Estadística 21, Producción 19, Administración 13, Financiera 13, Sociohumanística 12, Electivas Profesionales 16 y Trabajo de Grado 10. Las tablas, el mosaico y los indicadores de las 13 diapositivas se actualizan con estos valores.

### Prerrequisitos y validación

El nuevo HTML no incluye prerrequisitos explícitos. Se conservan las relaciones propuestas de la presentación previa, expresadas ahora como IDs de asignatura, y las secuencias de Estadística Multivariada → Estadística III y Exploración III → IV. La variación 1 conserva sus relaciones previas particulares: Métodos requiere Estadística I y Materiales, Producción I requiere Métodos y Diseño de Plantas requiere Producción III. Las demás propuestas usan Métodos después de Estadística Multivariada; Producción I después de Métodos e IO I; Diseño de Plantas después de Producción II. Estos requisitos son de diseño y requieren validación académica, no se atribuyen al archivo fuente ni al Excel.

[`data/catalogo-curricular.json`](data/catalogo-curricular.json) registra el catálogo, las ramas y los requisitos base; [`data/escenarios-curriculares.json`](data/escenarios-curriculares.json) registra las distribuciones completas. Ambos se incorporan en el HTML para mantener su funcionamiento autocontenido. El navegador comprueba inventario, créditos, límite semestral, ramas, continuidad y prerrequisitos antes de habilitar un escenario.

Ejecute `node scripts/validate-curriculum.cjs` desde la raíz. Contrasta las 53 asignaturas con el HTML fuente, valida cada semestre y comprueba que los datos incorporados y ambos HTML coincidan. También verifica que el validador del navegador rechace créditos alterados, ramas duplicadas, requisitos eliminados y sobrecargas.

El explorador permite filtrar por área, buscar por nombre o código/ID, alternar entre bloques y panorámica, y abrir una ficha por materia. Los identificadores de escenarios propuestos (`OFICIAL-…`, `VAR1-…`, etc.) son **IDs de diseño**, no códigos oficiales de la UTP. La ficha muestra créditos, equivalencia ECTS aproximada, prerrequisitos propuestos y la relación de la decisión con el benchmark.

## Datos y alcance de la evidencia

La fuente del benchmark es [`BD (1).xlsx`](BD%20%281%29.xlsx):

- `Pereira`, fila 8: UTP, **175 créditos**, **10 semestres**; 40 cr en Ciencias Básicas, 17 en Básicas de Ingeniería, 25 en IO/Estadística, 21 en Producción, 20 en Administración, 18 en Financiera, 20 en Sociohumanística, 9 en Electivas Profesionales y 5 en Trabajo de Grado.
- `Acreditadas`, filas 2–10: **nueve** programas de ocho semestres con 134–144 créditos. Su media aritmética es **139,8 créditos**. El promedio de porcentajes por área aparece en la tabla desplegable de la diapositiva 10.
- `Públicas`: Pamplona tiene **145 créditos** en nueve semestres y Cundinamarca **150 créditos** en nueve semestres. Ambas figuran como públicas y con valor `no` en la columna de acreditación de esa hoja. Son referencias de duración/carga para la variación 2.

El Excel **no contiene una tabla de asignaturas, códigos o prerrequisitos**. La malla actual detallada de la presentación es una reconstrucción para comparar distribuciones; sus 62 fichas y sus datos de curso deben cotejarse con el plan institucional vigente antes de tomar decisiones académicas. Las fusiones, los énfasis digitales y las reubicaciones son propuestas de diseño; el Excel sustenta la comparación por áreas y el nuevo HTML fija las asignaturas y sus créditos.

## Despliegue

El archivo `index.html` está en la raíz y funciona en rutas de proyecto como `https://usuario.github.io/repositorio/`. No utiliza rutas absolutas para recursos externos. `vercel.json` y `netlify.toml` añaden cabeceras de seguridad y tipos MIME; GitHub Pages sirve los tipos MIME automáticamente y no aplica esas configuraciones.

### Vercel

1. Suba los archivos del proyecto a un repositorio Git.
2. En Vercel, elija **New Project**, importe el repositorio y deje la raíz como directorio del proyecto.
3. El preset es **Other**, sin comando de build; `vercel.json` fija el directorio publicado en `.`.
4. Pulse **Deploy**. [Guía oficial de Vercel](https://vercel.com/docs/builds/configure-a-build).

### Netlify

1. Importe el repositorio desde **Add new project → Import an existing project**.
2. Use la raíz como directorio de publicación y no configure comando de build; `netlify.toml` ya indica `publish = "."`.
3. Publique el proyecto. [Guía oficial de Netlify](https://docs.netlify.com/start/quickstarts/deploy-from-repository/).

Para una publicación manual, puede entregar una carpeta con `index.html` y `netlify.toml` a [Netlify Drop](https://docs.netlify.com/start/quickstarts/netlify-drop-quickstart/).

### GitHub Pages

1. Suba el proyecto a GitHub.
2. En **Settings → Pages → Build and deployment**, elija **Deploy from a branch**.
3. Seleccione la rama publicada y la carpeta **/(root)**; guarde. [Guía oficial de GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

## Verificación local

Desde esta carpeta, abra `index.html` directamente o ejecute `py -m http.server 8000` y visite `http://localhost:8000`. En la diapositiva 10, compruebe el cambio de escenarios y la tabla de créditos por semestre. El modo oscuro/claro se guarda en `localStorage` del navegador.
