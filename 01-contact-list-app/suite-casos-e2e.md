# Suite de Casos — E2E

**Proyecto:** Contact List App

**URL:** https://thinking-tester-contact-list.herokuapp.com

**Tipo de testing:** End to End (E2E)

**Fecha de ejecución:** Junio 2026

**Responsable:** Victoria Paula Del Giovine

**Herramienta:** Google Sheets / Jira

## Precondiciones globales

- El usuario no existe previamente en el sistema.
- Usuario ubicado en la página de login.

## Flujo testeado

Registro → Login → Crear contacto → Editar contacto → Eliminar contacto → Logout

## Resumen de ejecución

| Total de casos | Passed | Failed | Bloqueados |
|---|---|---|---|
| 7 | 6 | 1 | 0 |


## Casos de prueba

| ID | Título | Datos de prueba | Resultado esperado | Resultado obtenido | Estado |
|----|--------|------------------|---------------------|---------------------|--------|
| TC-001 | Registro de usuario nuevo | mail: nuevotester@tester.com · nombre: juan · apellido: perez · contraseña: 123456789 | El sistema registra el nuevo usuario. | El sistema registró el usuario correctamente. | ✅ PASS |
| TC-002 | Login con usuario recién registrado | mail: nuevotester@tester.com · contraseña: 123456789 | El sistema permite acceso y redirige a `/contactList`. | El sistema permite acceso y redirige a `/contactList`. | ✅ PASS |
| TC-003 | Crear contacto completo | nombre: juan · apellido: perez · mail: nuevotester@tester.com · fecha: 1984/01/01 · teléfono: 691509078 · dirección: Calle de la Rambla 4888 · ciudad: Córdoba · provincia: Córdoba · código postal: 97859 · país: Spain | El sistema genera un contacto nuevo. | El sistema generó el contacto correctamente. | ✅ PASS |
| TC-004 | Editar contacto | Street Address 2: Calle de la Rambla 4889 | El contacto muestra la dirección actualizada. | El sistema muestra el contacto actualizado. | ✅ PASS |
| TC-005 | Eliminar contacto | N/A | El sistema solicita confirmación y elimina el contacto. | "Are you sure?" → contacto eliminado correctamente. | ✅ PASS |
| TC-006 | Logout | N/A | El sistema debería redirigir a la página de login. | El sistema redirige al usuario hacia la salida, en la página de login. | ✅ PASS |
| TC-007 | Login con contraseña invalida | mail: nuevotester@tester.com - contraseña invalida: 12345678 | El sistema bloquea el acceso y el flujo E2E no puede continuar. | El sistema muestra mensaje "Incorrect username or password" y no redirige a /contactList. El flujo E2E queda interrumpido en el paso de autenticación. | 🔴 FAIL |
