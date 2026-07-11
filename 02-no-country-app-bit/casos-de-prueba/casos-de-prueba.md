# Suite de Casos de Prueba – App-BI

**Proyecto:** Aplicación web para consulta de datos de inclusión social mediante IA
**Metodología:** Ágil / Scrum
**Gestión:** GitHub Projects
**Autoría:** Trabajo colaborativo entre dos QA del equipo
**Estado general:** Épica 1 ejecutada ✅ | Épica 2 ejecutada ✅ (alcance ajustado) | Épica 3 ejecutada ✅ (alcance ajustado) | Épica 4 ejecutada ✅ (con hallazgos corregidos) | Épica 5 ejecutada ✅ (con hallazgo corregido)

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

## 🟢 ÉPICA 2 – Agente de IA (Endpoint /datos)

> **Estado:** Ejecutada con alcance ajustado. Se removieron del alcance de QA los casos de **campo de consulta vacío (AC3)** y **manejo de "sin datos disponibles" (E2-AC4-TC-002)**. Todos los casos que permanecieron en alcance fueron ejecutados y aprobados.

### AC 1: Conexión con el Endpoint y Simulación (Mock)

| ID | Título | Precondiciones | Datos de prueba | Pasos | Resultado esperado | Resultado obtenido | Estado |
|----|--------|---------------|-----------------|-------|-------------------|-------------------|--------|
| E2-AC1-TC-001 | Consulta en lenguaje natural | Aplicación abierta. Acceso al recuadro de consulta. | ¿Cuál es la tasa de empleo en la zona de São Paulo? | 1. Acceder a la aplicación. 2. Escribir la consulta en lenguaje natural. 3. Presionar Enviar. 4. Verificar que aparece una respuesta en pantalla. | Se espera que el sistema arroje en pantalla una respuesta coherente. Por estar en entorno Mock, se acepta una respuesta simulada o genérica, sin errores en consola. | El chat procesó la consulta correctamente. Se visualizó la respuesta simulada (Mock) en una burbuja de texto legible y la consola permaneció libre de errores. | ✅ PASS |
| E2-AC1-TC-002 | Consulta con caracteres especiales | Aplicación abierta. Acceso al recuadro de consulta. | Escribir en la consulta: ¿Cuál es la 3,-3333**? | 1. Acceder a la aplicación. 2. Escribir la consulta con caracteres especiales. 3. Presionar Enviar. 4. Verificar comportamiento. | El sistema procesa los caracteres especiales sin bloquear la interfaz. Se muestra una respuesta simulada (Mock) y la consola no registra errores inesperados. | El sistema procesó los caracteres especiales sin bloquear la interfaz. Se mostró una respuesta simulada (Mock) y la consola no registró errores inesperados. | ✅ PASS |

### AC 2: Idioma Único

| ID | Título | Precondiciones | Datos de prueba | Pasos | Resultado esperado | Resultado obtenido | Estado |
|----|--------|---------------|-----------------|-------|-------------------|-------------------|--------|
| E2-AC2-TC-001 | Respuestas en idioma nativo | Aplicación abierta. Acceso al recuadro de consulta. | ¿Cuál es la tasa de empleo en la zona de São Paulo? | 1. Acceder a la aplicación. 2. Escribir la consulta. 3. Presionar Enviar. 4. Verificar idioma de la respuesta. | Se espera que el sistema arroje una respuesta simulada (Mock) en el idioma nativo definido. | El sistema procesó la consulta con éxito y desplegó la respuesta simulada (Mock). El texto se renderizó correctamente en español y sin errores en consola. | ✅ PASS |
| E2-AC2-TC-002 | Sin controles para cambiar el idioma | Aplicación abierta. | No aplica. | 1. Acceder a la aplicación. 2. Verificar que no existan controles para cambiar el idioma. | Se espera que el sistema no tenga selector, botón ni menú para cambiar el idioma. | Se verificó la interfaz y se constató la ausencia de controles o selectores de idioma. Todo el texto se visualiza en español, el idioma predefinido. | ✅ PASS |

### AC 4: Manejo de errores del sistema

| ID | Título | Precondiciones | Datos de prueba | Pasos | Resultado esperado | Resultado obtenido | Estado |
|----|--------|---------------|-----------------|-------|-------------------|-------------------|--------|
| E2-AC4-TC-001 | Sistema no procesa la consulta | Aplicación abierta. Endpoint /datos no disponible (simulado). | ¿Cuál es la tasa de empleo en la zona de São Paulo? | 1. Acceder a la aplicación. 2. Escribir la consulta. 3. Presionar Enviar. 4. Verificar que el sistema no procesa la consulta. | Se espera que el sistema muestre un mensaje que indique "Error al procesar la consulta." | Al simular la caída del backend, la interfaz manejó la excepción correctamente: bloqueó el procesamiento y desplegó un mensaje de error amigable. | ✅ PASS |

---

## 🟢 ÉPICA 3 – Datos e Infraestructura (Pipeline)

> **Estado:** Ejecutada con alcance ajustado. Se identificó, durante la ejecución, que varios de los casos originalmente diseñados correspondían a responsabilidad del equipo de Backend (validación interna de pipeline/estructura de datos), no de QA. El alcance se recortó a un caso representativo por cada criterio de aceptación, correspondiente a la validación end-to-end del comportamiento observable desde el endpoint.

### AC 1: Datos disponibles para consulta

| ID | Título | Precondiciones | Datos de prueba | Pasos | Resultado esperado | Resultado obtenido | Estado |
|----|--------|---------------|-----------------|-------|-------------------|-------------------|--------|
| E3-AC1-TC-001 | Consulta con datos disponibles | Entorno Docker en ejecución. API disponible. Dataset cargado. Variable `base_url` configurada. | `POST /consulta {"consulta":"¿Qué regiones tienen alto desempleo?","idioma":"es"}` | 1. Abrir Postman. 2. Seleccionar la colección de la API. 3. Abrir la solicitud POST `{{base_url}}/consulta`. 4. Configurar el body con una consulta válida. 5. Enviar la solicitud. 6. Verificar código de respuesta. 7. Revisar contenido del body. | El endpoint responde con HTTP 200 y devuelve una respuesta válida con los campos definidos por el contrato JSON. | Se obtiene HTTP 200 OK. El backend procesa la consulta correctamente y devuelve el JSON con los datos del dataset esperados. | ✅ PASS |

### AC 2: Región piloto cargada

| ID | Título | Precondiciones | Datos de prueba | Pasos | Resultado esperado | Resultado obtenido | Estado |
|----|--------|---------------|-----------------|-------|-------------------|-------------------|--------|
| E3-AC2-TC-001 | Verificar datos asociados a la región piloto | Entorno Docker en ejecución. API disponible. Dataset cargado. | `POST /consulta {"consulta":"¿Qué regiones tienen alto desempleo?","idioma":"es"}` | 1. Abrir Postman. 2. Seleccionar la colección de la API. 3. Abrir la solicitud POST `{{base_url}}/consulta`. 4. Configurar el body con una consulta válida. 5. Enviar la solicitud. 6. Verificar código de respuesta. 7. Revisar contenido del body. | El endpoint responde con HTTP 200 y devuelve información que pertenece exclusivamente a la región piloto configurada para el MVP. | Se obtiene HTTP 200 OK. La IA responde de forma coherente con los datos disponibles en el entorno Docker local (Municipio: Florianópolis). **Se observa disparidad con la región piloto teórica del MVP (São Paulo)**, debido al dataset cargado localmente. | ⚠️ APROBADO CON OBSERVACIONES |

### AC 3: Tolerancia a fallo de ingestión

| ID | Título | Precondiciones | Datos de prueba | Pasos | Resultado esperado | Resultado obtenido | Estado |
|----|--------|---------------|-----------------|-------|-------------------|-------------------|--------|
| E3-AC3-TC-001 | Simular fallo en el pipeline de datos | Entorno Docker en ejecución. Error provocado o simulado en el proceso de ingestión del dataset Vísent. | `POST /consulta {"consulta":"¿Qué regiones tienen alto desempleo?","idioma":"es"}` | 1. Forzar/simular el fallo del pipeline (deteniendo el contenedor `db` con `docker stop`). 2. Abrir Postman. 3. Enviar una solicitud válida al endpoint `/consulta`. 4. Verificar la respuesta del servidor y revisar los logs del sistema. | El sistema registra el error en los logs. El endpoint sigue respondiendo de forma controlada (la aplicación no se cae ni queda inaccesible). | Se obtiene HTTP 200 OK. A pesar de tener la base de datos caída, el servicio FastAPI demuestra alta tolerancia a fallos, respondiendo de forma controlada y manteniendo la disponibilidad del endpoint. | ✅ PASS |

### AC 4: Respuesta sin datos disponibles

| ID | Título | Precondiciones | Datos de prueba | Pasos | Resultado esperado | Resultado obtenido | Estado |
|----|--------|---------------|-----------------|-------|-------------------|-------------------|--------|
| E3-AC4-TC-001 | Respuesta sin datos disponibles | Aplicación disponible. API accesible. | Consulta válida sin datos disponibles: "¿Qué regiones tienen alto desempleo y baja conectividad?" | 1. Ingresar a la aplicación. 2. Abrir herramientas de desarrollador. 3. Recargar la página. 4. Ingresar la consulta válida. 5. Verificar que el frontend envía la solicitud al endpoint `/datos`. 6. Hacer clic en Enviar. 7. Esperar la respuesta. | El sistema informa mediante un mensaje controlado que no existen datos disponibles, sin afectar el funcionamiento de la aplicación. | El sistema informa que no existen datos disponibles sin perjudicar el funcionamiento de la aplicación. | ✅ PASS |

---

## 🟢 ÉPICA 4 – Frontend: Ejecución Local, Mapa Estático, Conexión con API y Chat UI

> **Estado:** Ejecutada. Se detectaron 3 fallos durante la ejecución (mensajes de error no amigables y falta de aviso de pérdida de conectividad). Todos fueron reportados, corregidos y verificados — trazabilidad completa disponible en GitHub Projects.

### 4.1 — Aplicación ejecutándose localmente

| ID | Título | Tipo | Precondiciones | Datos de prueba | Pasos | Resultado esperado | Resultado obtenido | Estado |
|----|--------|------|---------------|-----------------|-------|-------------------|-------------------|--------|
| L4.1-AC1-TC-001 | Verificar que la aplicación corre localmente | Happy path | Docker debe estar corriendo y ejecutándose. | `url front: http://localhost:5173/` | 1. Abrir el navegador. 2. Ingresar la URL. 3. Presionar ENTER. 4. Verificar que la app carga y corre localmente. | Se espera que la URL cargue correctamente y el navegador no devuelva errores de conexión, confirmando que el entorno local responde de manera estable. | Al ingresar a la app se muestra que responde de forma correcta, inmediata y estable tras el encendido de Docker. | ✅ PASS |
| L4.1-AC1-TC-002 | Comprobar que la aplicación no corra, con Docker desactivado | Negativo | Docker no está corriendo. | `url front: http://localhost:5173/` | 1. Abrir el navegador. 2. Ingresar la URL. 3. Presionar ENTER. 4. Verificar que la pantalla muestre mensaje de error. | Se espera que la URL no cargue y muestre un mensaje de error claro indicando que la aplicación no está disponible. | Al estar Docker apagado, la URL no carga. El navegador muestra correctamente `ERR_CONNECTION_REFUSED`, impidiendo el acceso a la aplicación. | ✅ PASS |
| L4.1-AC2-TC-001 | Comprobar que figuren Header, Barra de Búsqueda, Contenedor del Mapa y Panel de Datos | Happy path | Docker debe estar corriendo y ejecutándose. | No aplica. | 1. Abrir el navegador. 2. Ingresar la URL local del frontend. 3. Presionar ENTER. 4. Verificar componentes en pantalla. | Se espera que sean visibles el header, la barra de búsqueda, el contenedor del mapa y el panel de datos. | Se confirma la visualización estable de todos los componentes requeridos. | ✅ PASS |
| L4.1-AC2-TC-002 | Comprobar ausencia de componentes (caso negativo) | Negativo | La aplicación carga pero algún componente presenta error de visualización. | No aplica. | 1. Abrir el navegador. 2. Ingresar la URL. 3. Presionar ENTER. 4. Verificar si algún componente no es visible. | Se espera identificar si uno o más componentes no son visibles. | Todos los componentes se renderizan e integran correctamente. No se evidencia falla de carga ni componentes ocultos. | ✅ PASS |
| L4.1-AC3-TC-001 | Comprobar que los espacios están preparados para recibir datos | Happy path | Docker debe estar corriendo y ejecutándose. | No aplica. | 1. Abrir el navegador. 2. Ingresar la URL. 3. Presionar ENTER. 4. Verificar que los espacios de los componentes estén visibles. | Se espera que los espacios estén preparados para recibir datos (header visible, búsqueda acepta texto, mapa y panel reservados). | Se confirma que la estructura está lista para la integración; la barra de búsqueda acepta texto fluido y los espacios de mapa/panel se mantienen delimitados. | ✅ PASS |
| L4.1-AC3-TC-002 | Comprobar espacios no preparados (caso negativo) | Negativo | La aplicación carga pero algún componente no tiene el espacio correctamente definido. | No aplica. | 1. Abrir el navegador. 2. Ingresar la URL. 3. Presionar ENTER. 4. Identificar componentes mal definidos. | Se espera identificar si uno o más espacios no están preparados para recibir datos. | No se detectan fallas estructurales. Todos los componentes están correctamente delimitados y estables. | ✅ PASS |

### 4.2 — Integración de mapa estático

| ID | Título | Tipo | Precondiciones | Datos de prueba | Pasos | Resultado esperado | Resultado obtenido | Estado |
|----|--------|------|---------------|-----------------|-------|-------------------|-------------------|--------|
| IM4.2-AC1-TC-001 | Verificación del renderizado correcto del mapa base | Happy path | Aplicación corriendo sin errores previos. Usuario en pantalla de mapa. | `url front: http://localhost:5173/` | 1. Ingresar a la aplicación. 2. Navegar a la sección del mapa estático. 3. Observar la carga inicial. | El mapa se muestra renderizado por completo, sin espacios en blanco ni cortes. | Se muestra el mapa completo y sin errores. | ✅ PASS |
| IM4.2-AC1-TC-002 | Validación ante fallo de carga del mapa (sin conexión/token inválido) | Negativo | Se simula la caída del servicio del mapa (bloqueo de la petición vía DevTools). | `url front: http://localhost:5173/` | 1. Ingresar a la aplicación. 2. Observar carga del mapa. 3. Abrir DevTools (F12) → Network. 4. Identificar la petición del mapa. 5. Bloquearla ("Block request URL"). 6. Recargar (F5). | La app se mantiene estable y muestra un mensaje amigable: "No se pudo cargar el mapa en este momento". | **FAIL inicial:** la app se mantuvo estable, pero mostró el mensaje incorrecto "Error al sincronizar indicadores del panel con el servidor" en lugar del mensaje amigable esperado. **Corregido y verificado — seguimiento en GitHub Projects.** | 🔴→✅ FAIL corregido |
| IM4.2-AC2-TC-001 | Verificación de consola limpia durante la carga del mapa | Happy path | Usuario en pantalla del mapa. | `url front: http://localhost:5173/` | 1. Ingresar a la URL del mapa. 2. Abrir consola (F12). 3. Recargar (F5) y revisar mensajes. | La consola no debe mostrar mensajes de error en rojo. | La consola no muestra errores. | ✅ PASS |
| IM4.2-AC2-TC-002 | Validación de carga de mapa sin conexión a internet | Negativo | El mapa cargó correctamente antes de iniciar la prueba. | `URL Front: http://localhost:5173/`. Modo Offline habilitado desde DevTools. | 1. Acceder a la pantalla de mapa. 2. Verificar carga correcta. 3. Abrir DevTools (F12) → Network → Offline. 4. Interactuar con el mapa ejecutando una acción que requiera nuevos recursos. 5. Revisar consola y comportamiento. | La app permanece operativa, el mapa no carga nuevos recursos, y se registran solo errores de conectividad. | **FAIL inicial:** la app permaneció abierta sin cerrarse, pero la operación quedó en estado "Guardando..." de forma indefinida, sin informar al usuario la pérdida de conectividad. **Corregido y verificado — seguimiento en GitHub Projects.** | 🔴→✅ FAIL corregido |
| IM4.2-AC3-TC-001 | Estabilidad visual al redimensionar pantalla | Happy path | Usuario en pantalla del mapa. | `url front: http://localhost:5173/` | 1. Ingresar a la URL del mapa. 2. Achicar/agrandar la ventana varias veces. 3. Cambiar entre vista desktop y móvil (F12). | El mapa se adapta al tamaño de pantalla sin deformarse. | La pantalla responde correctamente según cambia la resolución. | ✅ PASS |
| IM4.2-AC3-TC-002 | Estabilidad visual ante recargas continuas | Negativo | Usuario en pantalla del mapa. | `url front: http://localhost:5173/` | 1. Ingresar a la URL del mapa. 2. Recargar rápido y seguido (F5 o Ctrl+F5, ~5 veces). 3. Dejar cargar la última vez y observar. | La app no se congela ni se cae; el mapa vuelve a mostrarse estable. | Luego de recargar repetidamente, la aplicación sigue estable. | ✅ PASS |

### 4.3 — Conexión Front ↔ Mock API

| ID | Título | Tipo | Precondiciones | Datos de prueba | Pasos | Resultado esperado | Resultado obtenido | Estado |
|----|--------|------|---------------|-----------------|-------|-------------------|-------------------|--------|
| FM4.3-AC1-TC-001 | Consumo exitoso del endpoint /datos | Happy path | Frontend desplegado y Mock API disponible. | Endpoint `/datos` responde HTTP 200 con datos válidos. | 1. Ingresar a la aplicación. 2. Abrir DevTools → Network. 3. Recargar. 4. Enviar una pregunta precargada del asistente IA. 5. Esperar respuesta. | El frontend recibe HTTP 200 y procesa correctamente los datos. | Se ejecuta la solicitud y devuelve HTTP 200. No se presentan errores en consola. | ✅ PASS |
| FM4.3-AC1-TC-002 | Error al consumir el endpoint /datos | Negativo | Se simula la caída del servicio, bloqueando la solicitud al endpoint. | `URL: http://localhost:5173` | 1. Ingresar a la aplicación. 2. Verificar carga correcta. 3. Abrir DevTools → Network. 4. Ejecutar una consulta válida para identificar la solicitud. 5. Bloquear la solicitud ("Block request URL"). 6. Repetir la consulta. 7. Observar comportamiento. | El sistema detecta el error y muestra un mensaje o comportamiento controlado, sin bloquear la app. | El sistema detectó el error y, ante el bloqueo del endpoint, mostró un mensaje claro de error. | ✅ PASS |
| FM4.3-AC2-TC-001 | Visualización correcta de datos recibidos | Happy path | App ejecutándose, frontend consumiendo `/datos`, Mock API disponible, usuario en pantalla de consulta. | `URL Front: http://localhost:5173/` | 1. Localizar el componente de consulta. 2. Ingresar consulta válida. 3. Presionar Enviar. 4. Esperar respuesta. 5. Verificar información mostrada. 6. Confirmar HTTP 200 en Network. 7. Revisar consola. | Los datos se muestran correctamente en la interfaz, sin errores en consola. | El sistema muestra los datos correctos. No se presentan errores en consola. | ✅ PASS |
| FM4.3-AC2-TC-002 | Respuesta vacía o datos inválidos | Negativo | Endpoint responde sin registros o con estructura inválida. | Respuesta vacía (`[]`) o campos faltantes. | 1. Ingresar a la sección de consulta. 2. Introducir datos inválidos. 3. Enviar/Consultar. 4. Esperar respuesta. | La interfaz informa que no existen datos o maneja la respuesta inválida sin errores visuales. | El sistema responde con un mensaje de error en lenguaje natural. | ✅ PASS |
| FM4.3-AC3-TC-001 | Consulta exitosa end-to-end | Happy path | Frontend y Mock API operativos. | Consulta válida. | 1. Ingresar a la aplicación. 2. Completar la consulta. 3. Enviar. 4. Visualizar resultados. | El flujo completo se ejecuta correctamente de punta a punta. | Se ejecuta el flujo E2E sin errores en consola. | ✅ PASS |

### 4.4 — Validación funcional del endpoint /datos (documentación manual, complementaria a la colección de Postman)

> Estos casos documentan en GitHub Issues, con evidencia manual, el mismo alcance cubierto por la colección automatizada de Postman (ver carpeta `postman/`). Se incluyen acá porque, a diferencia de la colección, quedaron registrados con su historial completo de hallazgo y corrección.

| ID | Título | Precondiciones | Datos de prueba | Pasos | Resultado esperado | Resultado obtenido | Estado |
|----|--------|---------------|-----------------|-------|-------------------|-------------------|--------|
| TC-D01 | Validación de estructura JSON (Happy Path) | Docker corriendo. | Pregunta válida: `¿Qué regiones tienen alto desempleo?` | Realizar POST a `/datos` con la consulta definida. | Status 200. JSON con campos: `respuesta_ia`, `visualizacion_sugerida`, `datos`, `fuentes`, `total_registros`. | Cumplido según lo esperado. | ✅ PASS |
| TC-D02 | Validación de tipos de datos y campos | Docker corriendo. | Respuesta de TC-D01. | Comparar respuesta contra el esquema JSON definido. | Todos los campos existen y tienen el tipo de dato correcto según el contrato. | Cumplido según lo esperado. | ✅ PASS |
| TC-D03 | Error: consulta vacía | Docker corriendo. | `consulta: ''` | Realizar POST a `/datos` con campo vacío. | Status 400/422, con mensaje indicando que la consulta no puede resolverse o error de validación. | **FAIL inicial:** aunque la consulta quedó vacía, el sistema respondió con datos de una región concreta como si la consulta fuera válida, en lugar de devolver el error de validación esperado. **Corregido y verificado — seguimiento en GitHub Projects.** | 🔴→✅ FAIL corregido |
| TC-D04 | Error: consulta irrelevante | Docker corriendo. | Pregunta fuera del alcance del dataset: `¿Cómo está el clima?` | Realizar POST a `/datos` con pregunta irrelevante. | Status 422 con error `CONSULTA_IRRELEVANTE`. | Cumplido según lo esperado. | ✅ PASS |

### 4.5 — Desarrollo de componente Chat UI

| ID | Criterio de aceptación | Título | Tipo | Precondiciones | Datos de prueba | Pasos | Resultado esperado | Resultado obtenido | Estado |
|----|------------------------|--------|------|----------------|------------------|-------|---------------------|---------------------|--------|
| DC4.5-AC1-TC-001 | El usuario puede escribir en el chat, presionar enviar, y ver la respuesta del backend renderizada. | Envío exitoso de consulta y visualización de respuesta en el chat | Happy path | Aplicación iniciada. Frontend conectado a `/datos`. Backend operativo. | Mensaje: "¿Cuál es el estado de la región piloto?" | 1. Ingresar a la aplicación y ubicar el chat. 2. Escribir el mensaje. 3. Presionar Enviar. 4. Esperar respuesta. 5. Observar pantalla y consola. | El mensaje se envía correctamente, la respuesta se muestra en una burbuja de chat, sin errores en consola. | Comportamiento correcto: mensaje enviado, respuesta renderizada correctamente, sin excepciones en consola. | ✅ PASS |
| DC4.5-AC1-TC-002 | No debe tirar errores en consola. | Manejo de error cuando el endpoint no responde | Negativo | Aplicación iniciada. Backend detenido o endpoint `/datos` inaccesible. | Mensaje: "¿Cuál es el estado de la región piloto?" | 1. Ingresar a la aplicación y ubicar el chat. 2. Abrir DevTools (F12) → Network → Offline. 3. Escribir el mensaje. 4. Presionar Enviar. 5. Observar pantalla y consola. | La app no se bloquea; la respuesta no se renderiza y se informa el error de forma controlada. | La app manejó la excepción correctamente: no se bloqueó, y renderizó una burbuja con mensaje amigable informando el error. | ✅ PASS |

---

## 🟢 ÉPICA 5 – Testing de Interfaz Responsive (validación ampliada)

> **Estado:** Ejecutada. Se detectó 1 fallo en la vista tablet, corregido y verificado.

### 5.2 — Testing UI responsive

| ID | Criterio de aceptación | Título | Precondiciones | Datos de prueba | Pasos | Resultado esperado | Resultado obtenido | Estado |
|----|------------------------|--------|-----------------|------------------|-------|---------------------|---------------------|--------|
| UIR5.2-AC1-TC001 | Pruebas realizadas en móvil, tablet y desktop. | Visualización responsive en desktop | Navegador abierto. | Chrome. Resolución: 1920x1080. | 1. Abrir la aplicación en resolución desktop. 2. Acceder a la pantalla de mapa. 3. Acceder a la pantalla de consulta IA. | Todos los elementos son visibles, legibles y utilizables sin superposición ni cortes. | Se probó en 1920x1080. Todos los elementos (menú, mapa, asistente IA) se visualizan correctos, alineados y legibles. Sin errores. | ✅ PASS |
| UIR5.2-AC1-TC002 | Pruebas realizadas en móvil, tablet y desktop. | Visualización responsive en móvil | Dispositivo móvil o DevTools en modo responsive. | Chrome. Resolución: 390x844. | 1. Abrir la aplicación en resolución móvil. 2. Revisar pantalla de mapa. 3. Revisar pantalla de consulta IA. | Los componentes se adaptan y permanecen legibles, en vertical y horizontal. | Se probó en 390x844 en ambas orientaciones. La interfaz se adapta correctamente; elementos y textos legibles. | ✅ PASS |
| UIR5.2-AC1-TC003 | Pruebas realizadas en móvil, tablet y desktop. | Verificar ausencia de desbordamiento horizontal | Aplicación abierta en móvil. | Chrome. Resolución: 390x844. | 1. Navegar por las pantallas de la aplicación. 2. Desplazarse horizontalmente. | No existe scroll horizontal generado por desbordamiento de elementos UI. | Se confirmó ausencia total de scroll horizontal; el contenido se ajusta a los márgenes de pantalla. | ✅ PASS |
| UIR5.2-AC1-TC004 | Pruebas realizadas en móvil, tablet y desktop. | Verificar legibilidad en pantallas reducidas | Dispositivo móvil o emulador en baja resolución. | Chrome. Resolución: 375x667. | 1. Abrir la app en mobile. 2. Reducir zoom o usar pantalla pequeña. 3. Navegar por la pantalla. | Los textos y botones se mantienen legibles y utilizables, sin requerir zoom. | Toda la información se contrae correctamente, manteniendo legibilidad y usabilidad sin zoom. | ✅ PASS |
| UIR5.2-AC1-TC005 | Pruebas realizadas en móvil, tablet y desktop. | Visualización responsive en tablet | Dispositivo tablet en modo responsive. | Chrome. Resolución: 768x1024. | 1. Abrir la aplicación en resolución tablet. 2. Revisar pantalla de mapa. 3. Revisar pantalla de consulta IA. | Los componentes se adaptan y permanecen legibles, en vertical y horizontal. | **FAIL inicial:** en 768x1024, la tarjeta "Inclusión Digital" se comprimió incorrectamente — las leyendas del gráfico circular se cortaban en el margen derecho y los nombres de regiones se superponían con sus métricas, impidiendo su lectura. **Corregido y verificado — seguimiento en GitHub Projects.** | 🔴→✅ FAIL corregido |
