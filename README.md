# Informe curricular · Ingeniería Industrial UTP

Presentación de 13 diapositivas con un explorador de cinco mallas curriculares en la diapositiva 10. Abra [`index.html`](index.html) en un navegador o publíquelo como sitio estático. El HTML incluye sus fuentes y scripts; no requiere instalación ni compilación.

## Escenarios

| Escenario | Semestres | Créditos | Distribución |
| --- | ---: | ---: | --- |
| Malla actual UTP, reconstrucción para análisis | 10 | 175 | 16–20 cr por semestre |
| Plan propuesto oficial | 8 | 144 | 18 cr en cada semestre |
| Variación 1: producción anticipada | 8 | 144 | S3–S5: 19 cr; S6: 17 cr; S8: 16 cr; demás: 18 cr |
| Variación 2: transición progresiva | 9 | 150 | Seis semestres de 17 cr y tres de 16 cr |
| Variación 3: Digital Supply Chain e Industria 4.0 | 8 | 144 | 18 cr en cada semestre |

En la variación 1, Métodos pasa a S4 y Producción I a S5. S8 queda en **16 créditos** para grado, electivas y Diseño de Plantas. La programación de una pasantía simultánea requiere coordinación académica.

En los cuatro escenarios propuestos, cada área tiene asignaturas en **todos los semestres desde que inicia hasta que termina**. Administración ocupa S1–S5 sin interrupciones. La malla actual de diez semestres se conserva como referencia diagnóstica y muestra sus cortes originales. Economía queda en **2 créditos**; Análisis Financiero e Ingeniería Económica conservan **3 créditos cada una** y se cursan en semestres consecutivos y distintos, antes de Formulación. La secuencia financiera ocupa S4–S8 en los tres escenarios de ocho semestres y S5–S9 en la transición de nueve. Ciencias Básicas tiene 30 créditos y Financiera 14 en cada escenario propuesto; las demás áreas conservan sus totales. Estos cambios de ubicación y la distribución de contenidos requieren revisión académica.

Estadística e Investigación de Operaciones tiene **una sola asignatura por semestre de S2 a S7** en los cuatro escenarios propuestos: Programación en S2; Estadística I en S3; Estadística Multivariada en S4; IO I en S5; IO II en S6; Simulación en S7. En la variación digital se usan los nombres correspondientes a analítica y gemelos digitales. Álgebra Lineal pasa de S2 a S3 para liberar S2. En la variación 1, Ética pasa a S3 y Comunicación Profesional a S4, mientras la electiva de concentración y SST se reubican para permitir la secuencia del área; Física III y Ecuaciones Diferenciales conservan sus créditos originales. Las materias de la malla actual permanecen como referencia diagnóstica.

El explorador permite filtrar por área, buscar por nombre o código/ID, alternar entre bloques y panorámica, y abrir una ficha por materia. Los identificadores de escenarios propuestos (`OFICIAL-…`, `VAR1-…`, etc.) son **IDs de diseño**, no códigos oficiales de la UTP. La ficha muestra créditos, equivalencia ECTS aproximada, prerrequisitos propuestos y la relación de la decisión con el benchmark.

## Datos y alcance de la evidencia

La fuente es [`BD (1).xlsx`](BD%20%281%29.xlsx):

- `Pereira`, fila 8: UTP, **175 créditos**, **10 semestres**; 40 cr en Ciencias Básicas, 17 en Básicas de Ingeniería, 25 en IO/Estadística, 21 en Producción, 20 en Administración, 18 en Financiera, 20 en Sociohumanística, 9 en Electivas Profesionales y 5 en Trabajo de Grado.
- `Acreditadas`, filas 2–10: **nueve** programas de ocho semestres con 134–144 créditos. Su media aritmética es **139,8 créditos**. El promedio de porcentajes por área aparece en la tabla desplegable de la diapositiva 10.
- `Públicas`: Pamplona tiene **145 créditos** en nueve semestres y Cundinamarca **150 créditos** en nueve semestres. Ambas figuran como públicas y con valor `no` en la columna de acreditación de esa hoja. Son referencias de duración/carga para la variación 2.

El Excel **no contiene una tabla de asignaturas, códigos o prerrequisitos**. La malla actual detallada de la presentación es una reconstrucción para comparar distribuciones; sus 62 fichas y sus datos de curso deben cotejarse con el plan institucional vigente antes de tomar decisiones académicas. Las fusiones, nuevas asignaturas digitales y reubicaciones son propuestas de diseño sustentadas por la distribución de créditos, no hechos demostrados por el Excel a nivel de microcurrículo.

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
