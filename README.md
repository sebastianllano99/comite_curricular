# 🎓 Reestructuración Curricular — Ingeniería Industrial UTP

> **Informe Ejecutivo y Laboratorio Interactivo de Malla Curricular**  
> Desarrollado para el **Comité Curricular de Ingeniería Industrial** de la Universidad Tecnológica de Pereira (UTP).

---

## 📌 1. Visión General del Proyecto

Este proyecto proporciona una **plataforma web interactiva, moderna y de alto impacto visual** diseñada para sustentar y defender ante el Comité Curricular, el Consejo de Facultad y la comunidad académica la urgente necesidad de modernización de la malla curricular de Ingeniería Industrial en la UTP.

### 🔍 Diagnóstico Clave (Basado en la BD de Benchmark Nacional en Excel):
* **Línea Base Actual:** 10 semestres y **175 créditos** (Percentil 94 nacional — *outlier* crítico).
* **Sobrecarga en Básicas:** **40 créditos** en Ciencias Básicas (22.9%) y **20 créditos** en Sociohumanística (11.4%).
* **Retraso en Profesionalización:** Las asignaturas troncales de **Producción** e **Investigación de Operaciones** comienzan tardíamente en semestres 7, 8, 9 y 10.
* **Déficit de Flexibilidad:** Únicamente **5.1% de Electivas Profesionales** (la oferta más baja de todas las universidades acreditadas del país).

---

## ⚡ 2. Laboratorio Interactivo de Mallas Curriculares (Slide 10)

En la sección **10** del informe se integra un **motor reactivo de exploración curricular** que permite contrastar en tiempo real 5 escenarios formativos completamente balanceados:

| Escenario | Semestres | Créditos Totales | Carga Promedio | Propósito y Justificación Académica |
| :--- | :---: | :---: | :---: | :--- |
| 📌 **Malla Actual UTP** | 10 | 175 cr | 17.5 cr/sem | Línea base actual con 58 asignaturas. Muestra el estado de partida, la congestión en ciencias básicas y el retraso de producción a semestres superiores. |
| ⭐ **Plan Propuesto Oficial (v7)** | 8 | 144 cr | **18.0 cr/sem** | Propuesta oficial del comité. Optimiza 31 créditos, eleva electivas al 10.4% con 2 líneas certificables (*Administración* o *Finanzas*) y fortalece Trabajo de Grado (10 cr). |
| 🏭 **Variación 1: Producción Anticipada** | 8 | 144 cr | **18.0 cr/sem** | Mueve *Ingeniería de Métodos* a S4 y *Producción I* a S5. Descongestiona el Semestre 8, facilitando que el estudiante realice pasantías o su Proyecto de Grado sin saturación. |
| ⚖️ **Variación 2: Transición Progresiva** | 9 | 150 cr | **16.7 cr/sem** | Modelo de menor estrés semestral inspirado en las públicas acreditadas (Pamplona 145 cr, Cundinamarca 150 cr, UIS, Valle). Reduce la deserción por sobrecarga. |
| 🤖 **Variación 3: Digital Supply Chain 4.0** | 8 | 144 cr | **18.0 cr/sem** | Enlaza analítica de datos continua (Python/Data Science desde S2), simulación híbrida, automatización industrial, robótica y cadenas globales de suministro. |

### 🛠️ Herramientas de Interacción:
1. **Filtro por Área de Formación:** Visualice de manera aislada la cadena formativa de *Ciencias Básicas*, *Básicas de Ingeniería*, *IO / Estadística*, *Producción*, *Administración*, *Financiera*, *Sociohumanística*, *Electivas* y *Grado*.
2. **Buscador en Tiempo Real:** Búsqueda predictiva por nombre de materia o código oficial UTP.
3. **Modal de Ficha Técnica de Asignatura:** Haga click en cualquier materia para conocer créditos nacionales, equivalencia ECTS, prerrequisitos, competencias y el sustento de su transformación en la BD de Excel.
4. **Vistas Adaptativas:** Alterne entre bloques semestrales (ej. S1–S4 / S5–S8) o active la **Vista Panorámica** para una proyección global.

---

## 🎨 3. Mejoras de Diseño y Experiencia de Usuario (UI/UX)

* **Barra Ejecutiva Superior (Top Navbar):** Acceso rápido a cualquier diapositiva mediante selector desplegable, botón directo a la Malla Interactiva, barra de progreso de lectura y modo pantalla completa.
* **Alternancia de Modo Oscuro / Modo Claro (Dark/Light Mode):** Paleta institucional UTP (Azul Marino profundo, Oro/Ámbar, Verde Esmeralda y detalles en Glassmorphism) adaptable al gusto del presentador o auditorio.
* **Física y Micro-Interacciones:** Animaciones con curvas cúbicas suaves (`cubic-bezier(0.23, 1, 0.32, 1)`), feedback háptico/visual en botones (`scale(0.97)`), y renders en 60 FPS sin saltos de layout.
* **Totalmente Autocontenido y Responsivo:** Funciona fluidamente en proyectores de auditorio (1080p / 4K), laptops, tablets y teléfonos móviles.

---

## 🚀 4. Guía de Despliegue en la Nube (Vercel, Netlify y GitHub)

El proyecto está estructurado con `index.html` en la raíz, junto a sus archivos de configuración (`vercel.json`, `netlify.toml` y `.gitignore`), listo para ser publicado en línea en menos de 2 minutos.

### Opción A: Despliegue en Vercel (Recomendado)
1. **Vía GitHub:**
   - Suba el repositorio a su cuenta de GitHub:
     ```bash
     git init
     git add .
     git commit -m "feat: informe curricular interactivo UTP"
     git branch -M main
     git remote add origin https://github.com/SU_USUARIO/comite-curricular-utp.git
     git push -u origin main
     ```
   - Inicie sesión en [vercel.com](https://vercel.com).
   - Haga click en **"Add New Project"** e importe su repositorio de GitHub.
   - Vercel detectará automáticamente `vercel.json` y desplegará su informe con URL pública instantánea (ej: `https://comite-curricular-utp.vercel.app`).

2. **Vía Vercel CLI (Directo desde la terminal):**
   ```bash
   npx vercel
   ```

---

### Opción B: Despliegue en Netlify
1. **Arrastrar y Soltar (Sin terminal):**
   - Vaya a [app.netlify.com/drop](https://app.netlify.com/drop).
   - Arrastre la carpeta completa `Comite curricular` al navegador.
   - Netlify publicará la web al instante con HTTPS gratuito.

2. **Conectando con GitHub:**
   - Importe su repositorio en Netlify.
   - La configuración `netlify.toml` predefinida se encargará de las cabeceras y redirecciones.

---

### Opción C: Despliegue en GitHub Pages
1. Suba los archivos a su repositorio en GitHub.
2. Vaya a **Settings** > **Pages**.
3. En **Branch**, seleccione `main` y la carpeta `/ (root)`.
4. Haga click en **Save**. En 1 minuto su sitio estará disponible en `https://SU_USUARIO.github.io/comite-curricular-utp/`.

---

## 💻 5. Visualización Local

Para ver el informe en su máquina local:
* Simplemente haga doble click en [index.html](index.html) para abrirlo en cualquier navegador (Chrome, Edge, Firefox, Safari).
* O inicie un servidor local liviano con Node:
  ```bash
  npx serve .
  ```

---

## 📊 6. Estructura de Archivos del Proyecto

```text
├── index.html                                        # Entrada principal optimizada para hosting web
├── Presentacion-8-semestres-v2-area-produccion.html  # Copia idéntica sincronizada del informe
├── BD (1).xlsx                                       # Base de datos oficial de benchmark de universidades
├── vercel.json                                       # Configuración de despliegue para Vercel
├── netlify.toml                                      # Configuración de despliegue para Netlify
├── .gitignore                                        # Exclusiones para control de versiones
├── README.md                                         # Documentación técnica y académica completa
└── scratch/                                          # Scripts y herramientas de auditoría de datos
    ├── curriculum_scenarios.json                     # Dataset estructurado de los 5 escenarios
    └── build_index_html.py                           # Generador automatizado del informe
```

---
*Universidad Tecnológica de Pereira — Facultad de Ingeniería Industrial — Comité Curricular*
