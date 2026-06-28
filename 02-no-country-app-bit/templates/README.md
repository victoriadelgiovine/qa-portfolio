# Templates de GitHub Issues – App-BI

Plantillas de GitHub Issues diseñadas y propuestas por QA para estructurar la documentación del proyecto dentro de GitHub Projects, sin depender de herramientas externas.

## Contexto

El equipo de simulación utilizaba GitHub Projects como tablero de gestión. Para mantener toda la documentación centralizada y con estructura consistente, se desarrollaron estos templates como alternativa a herramientas externas como Jira.

Los templates fueron adoptados por el equipo y utilizados durante toda la simulación.

> **Nota:** En entornos que utilizan Jira, la gestión de bugs y casos de prueba se realiza mediante los campos nativos de la herramienta. Estos templates están pensados específicamente para flujos de trabajo basados en GitHub Projects.

---

## Templates disponibles

### Caso de Prueba (`Caso-de-prueba.md`)
Estructura formal para documentar casos de prueba con separación clara entre diseño y ejecución.

Incluye:
- ID del Criterio de Aceptación asociado
- Precondiciones del sistema
- Datos de prueba
- Pasos de ejecución
- Resultado esperado vs. resultado obtenido
- Estado (PASÓ / FALLÓ / BLOQUEADO)
- Sección de evidencia

### Reporte de Bug (`Reporte-de-bug.md`)
Plantilla avanzada para reportar defectos con severidad y prioridad justificadas.

Incluye:
- Entorno de prueba completo
- Pasos para reproducir
- Resultado esperado vs. resultado obtenido
- Clasificación de severidad (Blocker / Critical / Major / Minor)
- Clasificación de prioridad (Alta / Media / Baja)
- Sección de evidencia

### Épica & Historia de Usuario (`Epica.md`)
Documento raíz para definir el contexto de cada épica con su Historia de Usuario y Criterios de Aceptación en formato Gherkin (Dado que / Cuando / Entonces).

Pensado para que QA tenga visibilidad completa del alcance antes de diseñar los casos de prueba.

---

## Autoría

Templates diseñados por Victoria Del Giovine (QA) como contribución individual al proyecto.
