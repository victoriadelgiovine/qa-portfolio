# Casos de Prueba – App-BI

Suite de casos de prueba funcionales y de rendimiento ejecutados sobre App-BI, documentados con separación entre diseño (precondiciones, datos, pasos, resultado esperado) y ejecución (resultado obtenido, estado, evidencia).

## Contexto

Los casos fueron diseñados a partir de las épicas y criterios de aceptación definidos para el MVP, y ejecutados de forma manual (interfaz, DevTools) y mediante Postman (endpoint `/datos`). Cada hallazgo detectado durante la ejecución quedó registrado como Issue en GitHub Projects, con su corrección y verificación posterior — no se documentan solo los resultados exitosos.

## Contenido

| Archivo | Descripción |
|---|---|
| `casos-de-prueba.md` | Suite completa de casos de prueba, organizada por épica y criterio de aceptación (interfaz, agente de IA, pipeline de datos, ejecución local, mapa estático, conexión front↔API, chat UI, responsive). |
| `caso-estudio-single-user.md` | Caso de estudio individual: plan de pruebas de estabilidad para usuario único sobre el endpoint de IA, incluyendo la definición de un umbral de aceptación propio (ante ausencia de criterios formales del negocio) y el hallazgo de una latencia fuera de umbral, documentado con transparencia pese a la preferencia inicial del equipo de omitirlo del informe final. |

## Convenciones utilizadas

- **Estado:** ✅ PASS / 🔴→✅ FAIL corregido / ⚠️ APROBADO CON OBSERVACIONES / 🟡 BLOQUEADO.
- Un caso marcado como **"FAIL corregido"** indica que se detectó un defecto real durante la ejecución, se reportó como Issue, y fue corregido y reverificado antes del cierre — no se omiten los hallazgos negativos del historial.
- Un caso marcado como **"APROBADO CON OBSERVACIONES"** indica que el resultado cumplió el criterio esperado, pero se detectó algo relevante a seguir (ej. una discrepancia de datos) que no invalida el resultado pero merece quedar registrado.

## Relación con otras carpetas

- `postman/` — colección automatizada que valida técnicamente el mismo endpoint `/datos` cubierto en la sección 4.4 de este documento.
- `templates/` — plantillas utilizadas para estructurar cada caso de prueba antes de su ejecución.

## Autoría

Casos de prueba diseñados y ejecutados por Victoria Del Giovine (QA), como trabajo colaborativo del equipo.
