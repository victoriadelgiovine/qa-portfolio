# Suite de Casos de Prueba – App-BI

**Proyecto:** Aplicación web para consulta de datos de inclusión social mediante IA  
**Metodología:** Ágil / Scrum  
**Gestión:** GitHub Projects  
**Autoría:** Trabajo colaborativo entre dos QA del equipo  
**Estado general:** Épica 1 ejecutada ✅ | Épicas 2 y 3 pendientes de habilitación de entorno 🟡

---

## 🔵 ÉPICA 1 – Interfaz Responsiva y Visualización

### AC 1: Carga de región única e indicador piloto

| ID | Título | Precondiciones | Datos de prueba | Pasos | Resultado esperado | Resultado obtenido | Estado |
|----|--------|---------------|-----------------|-------|-------------------|-------------------|--------|
| E1-AC1-TC-001 | Visualizar región piloto al ingresar al mapa | Aplicación desplegada. Región piloto configurada. | No aplica. | 1. Acceder a la aplicación. 2. Esperar carga inicial. | El mapa muestra automáticamente la región piloto configurada. No se requieren acciones adicionales del usuario. | Al ingresar en la app el mapa figura automáticamente sin acciones adicionales. Muestra región configurada y 4 indicadores. | ✅ PASS |
| E1-AC1-TC-002 | Visualización del indicador piloto | Aplicación cargada. | No aplica. | 1. Acceder al mapa. 2. Observar la información mostrada. | Se visualiza el indicador definido para el MVP asociado a la región piloto. | Al ingresar, el mapa carga automáticamente. Se visualiza el indicador definido y 3 adicionales. | ✅ PASS |
| E1-AC1-TC-003 | Carga automática sin configuración del usuario | Aplicación disponible. | No aplica. | 1. Ingresar por primera vez a la aplicación. | La región y el indicador aparecen automáticamente sin necesidad de seleccionar filtros o parámetros. | La región y los indicadores aparecen automáticamente sin acciones del usuario. | ✅ PASS |
| E1-AC1-TC-004 | Error de servicio al cargar datos iniciales | Endpoint de datos caído o respondiendo HTTP 500. | No aplica. | 1. Acceder a la aplicación. 2. Detener el servicio desde terminal. 3. Recargar la página (F5). | Se muestra un mensaje de error al usuario. La aplicación no se bloquea y registra el error correspondiente. | Cuando el servicio no está disponible, la app muestra el error del navegador `ERR_CONNECTION_REFUSED`. | ✅ PASS |

---

### AC 2: Diseño Responsivo (PWA)

| ID | Título | Precondiciones | Datos de prueba | Pasos | Resultado esperado | Resultado obtenido | Estado |
|----|--------|---------------|-----------------|-------|-------------------|-------------------|--------|
| E1-AC2-TC-001 | Visualización responsive en desktop | Navegador abierto. | Chrome. Resolución: 1920x1080. | 1. Abrir la aplicación en resolución desktop. 2. Acceder a la pantalla de mapa. 3. Acceder a la pantalla de consulta IA. | Todos los elementos son visibles, legibles y utilizables sin superposición ni cortes. | En resolución 1920x1080 todos los elementos son visibles, legibles y utilizables sin superposición ni cortes, tanto en vertical como horizontal. | ✅ PASS |
| E1-AC2-TC-002 | Visualización responsive en móvil | Dispositivo móvil o DevTools en modo responsive. | Chrome. Resolución: 390x844. | 1. Abrir la aplicación en resolución móvil. 2. Revisar pantalla de mapa. 3. Revisar pantalla de consulta IA. | Los componentes se adaptan correctamente a la pantalla y permanecen legibles, tanto en vertical como horizontal. | En modo vertical el menú no se visualiza por defecto pero se despliega correctamente al interactuar. Al desplegarse tapa el contenido principal. En modo horizontal todos los elementos son visibles y legibles. | ✅ PASS |
| E1-AC2-TC-003 | Verificar ausencia de desbordamiento horizontal | Aplicación abierta en móvil. | Chrome. Resolución: 390x844. | 1. Navegar por las pantallas de la aplicación. 2. Desplazarse horizontalmente. | No existe scroll horizontal generado por desbordamiento de elementos UI. | Al navegar por todas las pantallas no se detecta scroll horizontal ni desbordamiento de elementos UI. | ✅ PASS |
| E1-AC2-TC-004 | Verificar legibilidad en pantallas reducidas | Dispositivo móvil o emulador en baja resolución. | Chrome. Resolución: 375x667. | 1. Abrir la app en mobile. 2. Reducir zoom o usar pantalla pequeña. 3. Navegar por la pantalla. | Los textos y botones deben mantenerse legibles y utilizables. No debe requerir zoom para interacción básica. | En resolución 375x667 todos los textos y botones son legibles y utilizables sin necesidad de zoom. | ✅ PASS |

---

### AC 3: Acceso Libre (Sin Autenticación)

| ID | Título | Precondiciones | Datos de prueba | Pasos | Resultado esperado | Resultado obtenido | Estado |
|----|--------|---------------|-----------------|-------|-------------------|-------------------|--------|
| E1-AC3-TC-001 | Acceso directo a la URL sin autenticación | Aplicación desplegada. | No aplica. | 1. Ingresar a la URL de la aplicación. | El sistema muestra directamente el panel principal. | Al ingresar la URL el sistema muestra el panel principal sin solicitar autenticación. | ✅ PASS |
| E1-AC3-TC-002 | Ausencia de pantalla de login | Aplicación desplegada. | No aplica. | 1. Acceder a la aplicación. | No se visualizan formularios de usuario, contraseña ni botones de inicio de sesión. | Al ingresar la URL no se visualizan formularios de login. El sistema muestra directamente el panel principal. | ✅ PASS |
| E1-AC3-TC-003 | Acceso desde ventana incógnito | Navegador con modo incógnito. | No aplica. | 1. Abrir una ventana incógnito. 2. Acceder a la URL. | La aplicación carga correctamente sin solicitar autenticación. | En ventana incógnito la aplicación carga correctamente mostrando el panel principal sin solicitar autenticación. | ✅ PASS |
| E1-AC3-TC-004 | Verificar ausencia de redirección a login | Acceso a versión desplegada. | No aplica. | 1. Ingresar a la URL. 2. Observar flujo inicial. | La aplicación no debe redirigir a login ni mostrar pantallas de autenticación. Debe ir directo al panel principal. | Al ingresar la URL la aplicación va directo al panel principal sin redirecciones ni pantallas de autenticación. | ✅ PASS |

---

## 🟡 ÉPICA 2 – Agente de IA (Endpoint /datos)

> **Estado:** BLOQUEADO — Pendiente de integración entre frontend e IA. Los casos fueron diseñados y están listos para ejecutar una vez que el entorno esté habilitado.

### AC 1: Conexión con el Endpoint y Simulación (Mock)

| ID | Título | Precondiciones | Datos de prueba | Pasos | Resultado esperado | Estado |
|----|--------|---------------|-----------------|-------|-------------------|--------|
| E2-AC1-TC-001 | Consulta en lenguaje natural | Aplicación abierta. Acceso al recuadro de consulta. | Consulta válida en lenguaje natural. | 1. Acceder a la aplicación. 2. Escribir la consulta. 3. Presionar Enviar. 4. Verificar respuesta en pantalla. | El sistema retorna en pantalla una respuesta coherente a la consulta en lenguaje natural. | 🟡 BLOQUEADO |
| E2-AC1-TC-002 | Consulta con caracteres especiales | Aplicación abierta. Acceso al recuadro de consulta. | Consulta con caracteres especiales (Ej: `¿Cuál es la 3,-3333**?`). | 1. Acceder a la aplicación. 2. Escribir la consulta con caracteres especiales. 3. Presionar Enviar. 4. Verificar mensaje de error. | El sistema muestra una respuesta simulada de error sin romperse. | 🟡 BLOQUEADO |

### AC 2: Idioma Único

| ID | Título | Precondiciones | Datos de prueba | Pasos | Resultado esperado | Estado |
|----|--------|---------------|-----------------|-------|-------------------|--------|
| E2-AC2-TC-001 | Respuestas en idioma nativo | Aplicación abierta. Acceso al recuadro de consulta. | Consulta válida en lenguaje natural. | 1. Acceder a la aplicación. 2. Escribir la consulta. 3. Presionar Enviar. 4. Verificar idioma de la respuesta. | El sistema retorna la respuesta en el idioma nativo definido para el MVP. | 🟡 BLOQUEADO |
| E2-AC2-TC-002 | Sin controles para cambiar el idioma | Aplicación abierta. | No aplica. | 1. Acceder a la aplicación. 2. Verificar que no existan controles para cambiar el idioma. | El sistema no tiene selector, botón ni menú para cambiar de idioma. | 🟡 BLOQUEADO |

### AC 3: Campo de Consulta Vacío

| ID | Título | Precondiciones | Datos de prueba | Pasos | Resultado esperado | Estado |
|----|--------|---------------|-----------------|-------|-------------------|--------|
| E2-AC3-TC-001 | Consulta dejando el campo vacío | Aplicación abierta. Acceso al recuadro de consulta. | Campo vacío, sin texto. | 1. Acceder a la aplicación. 2. Dejar el campo vacío. 3. Presionar Enviar. 4. Verificar mensaje de error. | El sistema muestra un mensaje indicando que no se puede procesar una consulta vacía. | 🟡 BLOQUEADO |

### AC 4: Manejo de errores del sistema

| ID | Título | Precondiciones | Datos de prueba | Pasos | Resultado esperado | Estado |
|----|--------|---------------|-----------------|-------|-------------------|--------|
| E2-AC4-TC-001 | Sistema no procesa la consulta | Aplicación abierta. Endpoint /datos no disponible (simulado). | Consulta válida en lenguaje natural. | 1. Acceder a la aplicación. 2. Escribir la consulta. 3. Presionar Enviar. 4. Verificar mensaje de error. | El sistema muestra un mensaje de error claro indicando que no pudo procesar la consulta. | 🟡 BLOQUEADO |
| E2-AC4-TC-002 | Sistema sin datos disponibles | Pantalla de consulta IA. Backend sin datos disponibles (simulado). | Consulta válida en lenguaje natural. | 1. Acceder a la aplicación. 2. Escribir una consulta válida. 3. Presionar Enviar. 4. Verificar mensaje en pantalla. | El sistema muestra un mensaje claro indicando que no hay datos disponibles. | 🟡 BLOQUEADO |

---

## 🟡 ÉPICA 3 – Datos e Infraestructura (Pipeline)

> **Estado:** BLOQUEADO — Pendiente de habilitación del entorno de datos e infraestructura. Los casos de error fueron coordinados con el equipo de desarrollo: QA verificaba estabilidad de la app, visibilidad de mensajes de error y navegabilidad tras el fallo.

### AC 1: Datos disponibles para consulta

| ID | Título | Precondiciones | Pasos | Resultado esperado | Estado |
|----|--------|---------------|-------|-------------------|--------|
| E3-AC1-TC-001 | Consulta básica de región piloto | Pipeline ejecutado correctamente. | 1. Ejecutar endpoint con región piloto configurada. | La respuesta contiene datos provenientes del dataset cargado. | 🟡 BLOQUEADO |
| E3-AC1-TC-002 | Validación de estructura de respuesta | Dataset cargado. | 1. Llamar al endpoint. 2. Inspeccionar payload. | La respuesta mantiene estructura válida con los campos esperados. | 🟡 BLOQUEADO |
| E3-AC1-TC-003 | Consistencia de datos por región | Pipeline activo. | 1. Consultar endpoint filtrando región piloto. | Solo se devuelven datos asociados a la región configurada. | 🟡 BLOQUEADO |
| E3-AC1-TC-004 | Dataset corrupto o incompleto | Dataset con registros dañados. | 1. Ejecutar pipeline. 2. Consultar endpoint. | El sistema maneja el error sin romper la API. Devuelve error controlado. | 🟡 BLOQUEADO |
| E3-AC1-TC-005 | Consulta a región inexistente | Región no existente en dataset. | 1. Llamar al endpoint con región inválida. | Respuesta con mensaje controlado indicando ausencia de datos. | 🟡 BLOQUEADO |

### AC 2: Región piloto cargada

| ID | Título | Precondiciones | Pasos | Resultado esperado | Estado |
|----|--------|---------------|-------|-------------------|--------|
| E3-AC2-TC-001 | Persistencia de región piloto tras pipeline | Pipeline ejecutado. | 1. Ejecutar pipeline. 2. Consultar estado. | La región piloto queda persistida y accesible. | 🟡 BLOQUEADO |
| E3-AC2-TC-002 | Disponibilidad en endpoint para frontend | Backend activo. | 1. Frontend solicita datos. | Región piloto se carga sin intervención manual. | 🟡 BLOQUEADO |
| E3-AC2-TC-003 | Región no configurada | Configuración vacía. | 1. Ejecutar pipeline sin configuración. | El sistema no se rompe y devuelve error controlado. | 🟡 BLOQUEADO |

### AC 3: Tolerancia a fallo de ingestión

> **Nota de ejecución:** Para estas pruebas se coordinó con el equipo de desarrollo para simular los errores. QA verificaba: ¿La app sigue funcionando? / ¿Aparece algún mensaje de error visible? / ¿Se puede navegar a otras pantallas?

| ID | Título | Precondiciones | Pasos | Resultado esperado | Estado |
|----|--------|---------------|-------|-------------------|--------|
| E3-AC3-TC-001 | Error controlado de pipeline — logging de error | Forzar fallo en ingestión. | 1. Ejecutar pipeline con error. | El error queda registrado correctamente. | 🟡 BLOQUEADO |
| E3-AC3-TC-002 | Reintento de pipeline tras error | Pipeline con error inicial. | 1. Ejecutar pipeline. 2. Reintentar ejecución. | El segundo intento puede recuperarse o volver a registrar error sin romper la app. | 🟡 BLOQUEADO |
| E3-AC3-TC-003 | Sistema operativo tras fallo de pipeline | Pipeline fallando. | 1. Fallar pipeline. 2. Acceder a la API. | La API sigue respondiendo aunque sin nuevos datos. | 🟡 BLOQUEADO |

### AC 4: Respuesta sin datos disponibles

| ID | Título | Precondiciones | Pasos | Resultado esperado | Estado |
|----|--------|---------------|-------|-------------------|--------|
| E3-AC4-TC-001 | Respuesta con dataset vacío | No hay datos cargados. | 1. Llamar al endpoint. | Se devuelve mensaje indicando ausencia de datos. | 🟡 BLOQUEADO |
| E3-AC4-TC-002 | Frontend sin datos — impacto en UI | Backend sin datos. | 1. Frontend consume API. | La UI muestra estado vacío correctamente sin errores visuales. | 🟡 BLOQUEADO |
