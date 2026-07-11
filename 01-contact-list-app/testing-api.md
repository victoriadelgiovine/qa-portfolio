# Testing de API — Contact List App

**Proyecto:** Contact List App
**URL:** https://thinking-tester-contact-list.herokuapp.com
**Tipo de testing:** API Testing
**Herramienta:** Postman
**Fecha de ejecución:** Junio 2026
**Responsable:** Victoria Paula

## Descripción

Testing directo sobre los endpoints de la API de Contact List App utilizando Postman. Se verificaron los cuatro métodos HTTP principales y se implementaron assertions automáticos para validar las respuestas.

## Endpoints testeados

### `POST /users/login`
**Descripción:** Autenticación de usuario registrado.
**Datos enviados:** `email` y `password` en formato JSON.
**Respuesta esperada:** 200 OK con token de autenticación.
**Assertions:**
- Status code es 200
- La respuesta contiene token
- La respuesta contiene datos del usuario

### `POST /contacts`
**Descripción:** Creación de un contacto nuevo.
**Autenticación:** Bearer Token requerido.
**Respuesta esperada:** 201 Created con datos del contacto.
**Assertions:**
- Status code es 201
- El contacto tiene ID generado por el servidor
- El nombre del contacto es correcto
- El contacto tiene owner asignado

### `GET /contacts/:id`
**Descripción:** Obtener datos de un contacto por ID.
**Autenticación:** Bearer Token requerido.
**Respuesta esperada:** 200 OK con datos del contacto.
**Assertions:**
- Status code es 200
- El ID del contacto existe
- El email del contacto es correcto

### `PATCH /contacts/:id`
**Descripción:** Modificar campos específicos de un contacto.
**Autenticación:** Bearer Token requerido.
**Respuesta esperada:** 200 OK con datos actualizados.
**Assertions:**
- Status code es 200
- El campo modificado se actualizó correctamente

### `DELETE /contacts/:id`
**Descripción:** Eliminar un contacto por ID.
**Autenticación:** Bearer Token requerido.
**Respuesta esperada:** 200 OK con mensaje de confirmación.
**Assertions:**
- Status code es 200
- El mensaje confirma la eliminación

## Códigos de respuesta verificados

| Código | Significado |
|---|---|
| 200 OK | Solicitud exitosa |
| 201 Created | Recurso creado correctamente |
| 401 Unauthorized | Credenciales inválidas o token ausente |
| 404 Not Found | Recurso no encontrado |

## Observaciones

- El token de autenticación se configuró a nivel de colección, para que aplique automáticamente a todos los requests.
- El servidor devuelve 401 sin body JSON cuando las credenciales son incorrectas, lo que genera mensajes genéricos en la interfaz (relacionado con [BUG-002](./reporte-de-bugs.md) y [BUG-003](./reporte-de-bugs.md)).
- Para `DELETE`, el servidor devuelve texto plano en vez de JSON.

## Colección de Postman

La colección completa con las 14 assertions está disponible en este mismo repositorio: [`Contact List API - Testing.postman_collection.json`](./Contact%20List%20API%20-%20Testing.postman_collection.json)
