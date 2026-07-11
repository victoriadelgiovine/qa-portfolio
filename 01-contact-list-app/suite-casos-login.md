# Suite de Casos — Login

**Proyecto:** Contact List App

**URL:** https://thinking-tester-contact-list.herokuapp.com

**Módulo:** Login — Inicio de sesión de usuario registrado

**Historia de usuario:** SCRUM-15

**Fecha de ejecución:** Junio 2026

**Responsable:** Victoria Paula Del Giovine

**Herramienta:** Google Sheets / Jira

## Precondiciones globales

- Usuario registrado existe en el sistema.
- Usuario ubicado en la página de login.

## Resumen de ejecución

| Total de casos | Passed | Failed | Bloqueados |
|---|---|---|---|
| 7 | 5 | 2 | 0 |

## Casos de prueba

| ID | Título | Datos de prueba | Resultado esperado | Resultado obtenido | Estado |
|----|--------|------------------|---------------------|---------------------|--------|
| TC-001 | Login con credenciales válidas | mail: testeo@test.com · contraseña: 123456789 | El sistema permite acceso y redirige a `/contactList`. | El sistema permite acceso y redirige a `/contactList`. | ✅ PASS |
| TC-002 | Login con mail inválido | mail: testingtest@test.com · contraseña: 123456789 | El sistema muestra mensaje de error. | "Incorrect username or password". | ✅ PASS |
| TC-003 | Login con contraseña inválida | mail: testeo@test.com · contraseña: 12345678 | El sistema muestra mensaje de error. | "Incorrect username or password". | ✅ PASS |
| TC-004 | Login con contraseña vacía | mail: testeo@test.com · contraseña: vacía | El sistema muestra mensaje de error por campo vacío. | "Incorrect username or password" (mensaje genérico, no específico). | 🔴 FAIL → [BUG-002](./reporte-de-bugs.md) |
| TC-005 | Login con mail vacío | mail: vacío · contraseña: 123456789 | El sistema muestra mensaje de error por campo vacío. | "Incorrect username or password" (mensaje genérico, no específico). | 🔴 FAIL → [BUG-003](./reporte-de-bugs.md) |
| TC-006 | Usuario no autenticado accede a `/contactList` | URL directa: `/contactList` | El sistema bloquea el acceso. | El sistema redirige a `/contactList` mostrando lista vacía, sin bloquear el acceso. | 🔴 FAIL → [BUG-001](./reporte-de-bugs.md) |
| TC-007 | Contraseña no visible durante el ingreso | N/A | La contraseña se muestra como asteriscos. | El sistema muestra asteriscos correctamente. | ✅ PASS |
