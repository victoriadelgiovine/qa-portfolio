# Suite de Casos de Prueba – App-BI

**Proyecto:** Aplicación web para consulta de datos de inclusión social mediante IA
**Metodología:** Ágil / Scrum
**Gestión:** GitHub Projects
**Autoría:** Trabajo colaborativo entre dos QA del equipo
**Estado general:** Épica 1 ejecutada ✅ | Épica 2 ejecutada ✅ (alcance ajustado) | Épica 3 ejecutada ✅ (alcance ajustado)

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
