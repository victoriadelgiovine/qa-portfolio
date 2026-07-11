---
name: "Caso de Prueba - Performance/Carga"
about: Plantilla oficial de QA para pruebas de carga/rendimiento.
title: "[PERF-TEST] "
labels: qa, performance-test
---
### ID Criterio de Aceptación
*Ingresar el código del AC correspondiente (Ej: Issue #21 - Validación de concurrencia liviana)*

### Título
*Nombre descriptivo del escenario (Ej: Validar endpoint /datos con 5 usuarios concurrentes)*

### Objetivo del Escenario
*¿Qué pregunta responde esta prueba? No es lo mismo "aguanta la carga normal" que "encuentra el punto de quiebre".*

### Precondiciones
*¿Qué estado previo necesita el sistema antes de empezar la prueba?*
1.
2.

### Configuración de Carga
*Parámetros de ejecución del test (reemplaza "Datos de Prueba" de la plantilla funcional)*
- **Endpoint/request bajo prueba:**
- **Herramienta:** (Ej: Postman - Collection Runner, pestaña Performance)
- **Load profile:** (Fixed / Ramp up / Spike)
- **Virtual Users (VUs):**
- **Duración:**
- **Entorno:** (local / staging / mock)

### Umbral de Aceptación (Supuesto de trabajo)
*Criterio numérico contra el que se compara el resultado. Si no fue definido por el equipo/negocio, dejarlo explícito como supuesto y su justificación.*
- **Tiempo de respuesta máximo aceptable (p95):**
- **Error % máximo tolerado:**
- **Justificación del umbral:** (Ej: heurística de Nielsen + baseline medido + falta de lineamiento formal del equipo)

### Pasos
1. Ejecutar baseline funcional (1 request manual) y confirmar 200 OK antes de aplicar carga.
2. Configurar el escenario de carga según los parámetros de la sección anterior.
3. Ejecutar el run y registrar métricas en tiempo real.
4. Repetir si el resultado es inconsistente (mínimo 2 corridas antes de concluir).

### Resultado Esperado
*Se expresa en términos del umbral definido arriba, no como descripción libre.*
Ej: p95 ≤ 5s y error % = 0% durante los 2 minutos de ejecución con 5 VUs.

---
### Registro de Ejecución (A completar por QA)

### Resultado Obtenido — Métricas

| Métrica | Valor obtenido |
|---|---|
| Avg. response time | |
| p90 | |
| p95 | |
| p99 | |
| Error % | |
| Requests/seg (throughput) | |
| Errores observados (tipo) | |

### Estado
*Marcar con una 'X' el estado correspondiente:*
- [ ] 🟢 PASÓ (cumple el umbral definido)
- [ ] 🔴 FALLÓ (excede el umbral)
- [ ] 🟡 BLOQUEADO
- [ ] ⚠️ APROBADO CON OBSERVACIONES (cumple el umbral pero se detectó un riesgo a seguir)

### Cuello de Botella / Hallazgo
*Si el resultado no cumplió el umbral, o si se observó algo relevante aunque haya pasado: ¿en qué momento/VU apareció, y qué evidencia lo sostiene?*

### Evidencia
*Arrastrá y soltá acá tus capturas de pantalla del reporte de Performance de Postman, exports de métricas, o video.*
