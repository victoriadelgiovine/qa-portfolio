# App BiT — Proyecto en Equipo (No Country)

🔗 **Repositorio del proyecto:** [S06-26-NC-EQUIPO-72](https://github.com/No-Country-simulation/S06-26-NC-EQUIPO--72)

Web app B2G (Business to Government) que consolida datos públicos de movilidad, empleo y salud mental por región, y permite a gestores públicos consultar esa información en lenguaje natural a través de un agente de IA — con el objetivo de orientar políticas de inclusión social basadas en evidencia real.

Desarrollado en equipo (11 personas — Backend, Frontend, IA, Data, QA) durante una simulación laboral ágil de 5 semanas.

## Demo del Proyecto

[Ver video demo](https://www.youtube.com/watch?v=6J1Fv5hbul0)

**Mi rol (QA):** diseño y ejecución de la mayor parte de la suite de casos de prueba funcionales del proyecto (interfaz, mapa, chat, agente de IA, manejo de errores), definición de criterios de aceptación de performance ante ausencia de lineamientos formales del negocio, testing de estabilidad del endpoint de IA, diseño de las plantillas de GitHub Issues adoptadas por el equipo, y presentación del trabajo de QA en la demo final del proyecto.

> **Nota:** el video resume el trabajo de QA de forma general por motivos de tiempo en la grabación, remitiendo al repositorio para el detalle completo. Los hallazgos de performance documentados en el caso de estudio de esta carpeta corresponden a una etapa de testing posterior a la grabación — el resultado real (latencia fuera del umbral definido) está documentado con transparencia en mi trabajo individual, no en el video.

## Casos de estudio destacados

Dos piezas que muestran en detalle el criterio aplicado, más allá de la ejecución en sí — el resto de la suite de casos de prueba y las plantillas están en las carpetas `casos-de-prueba/` y `templates/` (ver abajo).

- [Caso de estudio — Plan de pruebas de estabilidad para usuario único](./casos-de-prueba/caso-estudio-single-user.md)
- [Plantilla de caso de prueba — Performance/Carga](./templates/Caso-de-prueba-performance.md)

## Qué vas a encontrar en esta carpeta

- **`casos-de-prueba/`** — suite completa de casos de prueba funcionales y de rendimiento, ejecutados y documentados por épica y criterio de aceptación.
- **`postman/`** — colección automatizada de pruebas sobre el endpoint `/datos`.
- **`templates/`** — plantillas de GitHub Issues diseñadas para estructurar el trabajo de QA (caso de prueba funcional, caso de prueba de performance, reporte de bug, épica/historia de usuario).
