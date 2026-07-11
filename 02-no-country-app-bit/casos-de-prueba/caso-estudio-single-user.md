# Caso de Estudio — Plan de Pruebas de Estabilidad para Usuario Único (Endpoint de IA)

> Contexto anonimizado: proyecto de simulación tipo MVP, con un endpoint que expone un agente de IA generativa para consultas en lenguaje natural. Se incluye como caso de estudio porque ilustra un proceso completo de QA en ausencia de criterios de aceptación formales: definición de alcance, justificación de un umbral propio, ejecución, y sostenimiento de un hallazgo incómodo frente a la presión del equipo por omitirlo del informe final.

---

## 1. Objetivo

Validar que el endpoint responde de forma estable y consistente ante el uso sostenido de un único usuario (consultas repetidas, no simultáneas con otros usuarios). No busca medir concurrencia ni comportamiento bajo carga múltiple.

## 2. Alcance y decisión de producto

- **Dentro de alcance:** estabilidad y consistencia de respuesta para 1 usuario realizando múltiples consultas seguidas.
- **Fuera de alcance (decisión explícita del equipo):** pruebas de concurrencia/escalabilidad con múltiples usuarios simultáneos. Se consideró que, tratándose de una solución B2G de uso acotado (no orientada a tráfico masivo), la validación de múltiples usuarios simultáneos queda como una decisión a evaluar en una futura iteración del producto, fuera del alcance del MVP.

## 3. Configuración

- **Herramienta:** Postman — Collection Runner, pestaña Performance.
- **Load profile:** Fixed
- **VUs:** 1
- **Duración:** 5 minutos

**Por qué sostenido y no una sola request:** con 1 sola consulta ya se valida que el endpoint responde bien una vez (baseline). Lo que este escenario agrega es observar si, al repetir consultas durante un período, el tiempo de respuesta se mantiene parejo o empieza a degradarse — señal que una prueba puntual no detectaría.

## 4. Umbral de Aceptación (definido por QA)

Ante la ausencia de un criterio de performance formalmente definido por el negocio, se definió y justificó un umbral propio:
- Tiempo de respuesta: ≤ 5 segundos.
- Error %: 0%.
- **Justificación:** heurística de tiempos de respuesta de Nielsen (UX) combinada con un baseline medido en entorno de prueba previo a la integración real.

## 5. Resultado obtenido (entorno real/integrado)

| Métrica | Valor obtenido |
|---|---|
| Avg. response time | ~26 s |
| Max. response time | ~30 s |
| Error % | 0% |
| Requests totales (muestra) | 4 |

> Con una muestra de 4 requests, los percentiles (p90/p95/p99) no son estadísticamente representativos — colapsan contra el valor máximo. Se reporta min/avg/max en su lugar, con la limitación de tamaño de muestra explícita.

**Resultado: fuera del umbral definido (≤5s).** Se identificó, como hipótesis a validar por el equipo de backend/infraestructura, una posible limitación en la infraestructura de inferencia del modelo de IA (tiempo de carga inicial del modelo y/o procesamiento secuencial de solicitudes sin optimización de concurrencia). No se confirmó la causa raíz por parte del equipo técnico — se documentó como hallazgo abierto, no como diagnóstico cerrado.

## 6. Decisión de reporte

Ante la posibilidad de omitir este resultado del informe final del proyecto (por no ser un número "prolijo" de mostrar), se decidió mantenerlo documentado, priorizando la trazabilidad sobre la estética del entregable. El criterio de aceptación original de la tarea de QA incluía explícitamente "identificación de posibles cuellos de botella" — omitir un hallazgo real hubiera contradicho el objetivo mismo de la prueba.

## 7. Conclusión

El resultado valida (o no) estabilidad individual, no escalabilidad — son alcances distintos y no deben confundirse en la lectura del informe. La latencia detectada no invalida el criterio de éxito definido para el MVP evaluado, pero queda documentada como riesgo a resolver antes de cualquier escalamiento del producto a mayor cantidad de usuarios.

---

**Por qué incluyo este caso en el portfolio:** más allá del resultado técnico, este caso muestra el criterio aplicado ante dos situaciones típicas de un entorno real de QA — definir un umbral de aceptación cuando el negocio no lo provee, y sostener un hallazgo negativo frente a la preferencia del equipo de no mostrarlo, argumentando por qué corresponde documentarlo igual.
