# Suite de Casos — Gestión de Contactos

**Proyecto:** Contact List App
**URL:** https://thinking-tester-contact-list.herokuapp.com
**Módulo:** Gestión de Contactos
**Fecha de ejecución:** Junio 2026
**Responsable:** Victoria Paula
**Herramienta:** Google Sheets / Jira

## Precondiciones globales

- Usuario logueado.
- Ubicado en `/contactList`.

## Resumen de ejecución

| Total de casos | Passed | Failed | Bloqueados |
|---|---|---|---|
| 18 | 14 | 4 | 0 |

## Casos de prueba

| ID | Título | Datos de prueba | Resultado esperado | Resultado obtenido | Estado |
|----|--------|------------------|---------------------|---------------------|--------|
| TC-001 | Añadir contacto | nombre: Mari · apellido: trini · mail: testuser@test.com · fecha: 1984/01/01 · teléfono: 691509078 | El sistema acepta los datos y genera un contacto nuevo. | El sistema generó un contacto nuevo. | ✅ PASS |
| TC-002 | Añadir contacto con campos vacíos | N/A | El sistema muestra mensaje de error. | `Contact validation failed: firstName: Path firstName is required., lastName: Path lastName is required.` | ✅ PASS |
| TC-003 | Añadir contacto solo con campos obligatorios | nombre: Mari · apellido: trini | El sistema acepta los datos y genera contacto nuevo. | El sistema generó un contacto nuevo. | ✅ PASS |
| TC-004 | Añadir contacto con mail duplicado | nombre: Mari · apellido: trini · mail: testuser@test.com | El sistema muestra mensaje de error por mail duplicado. | El sistema generó un contacto nuevo, permitiendo el mail duplicado. | 🔴 FAIL → [BUG-004](./reporte-de-bugs.md) |
| TC-005 | Añadir contacto con email inválido (sin @) | mail: testusertest.com | El sistema muestra mensaje de error. | `Contact validation failed: email: Email is invalid`. | ✅ PASS |
| TC-006 | Añadir contacto con email inválido (sin .com) | mail: testuser@test | El sistema muestra mensaje de error. | `Contact validation failed: email: Email is invalid`. | ✅ PASS |
| TC-007 | Añadir contacto con formato de fecha inválido | fecha: 1234/06/08 | El sistema muestra mensaje de error. | El sistema generó el contacto con una fecha inválida. | 🔴 FAIL → [BUG-005](./reporte-de-bugs.md) |
| TC-008 | Añadir contacto con "ñ" en apellido | nombre: Mari · apellido: triño | El sistema acepta la "ñ" como carácter válido. | El sistema generó el contacto correctamente. | ✅ PASS |
| TC-009 | Añadir contacto con "@" en nombre | nombre: M@ri · apellido: trino | El sistema rechaza el carácter "@". | El sistema generó el contacto con el "@" incluido. | 🔴 FAIL → [BUG-006](./reporte-de-bugs.md) |
| TC-010 | Editar nombre exitosamente | nombre: Maria | El contacto muestra el nombre actualizado. | El contacto muestra el nombre actualizado a "Maria". | ✅ PASS |
| TC-011 | Editar apellido exitosamente | apellido: trino | El apellido se actualiza correctamente. | El apellido se muestra actualizado en la lista. | ✅ PASS |
| TC-012 | Editar email con formato válido | mail: test@test.com | El email se actualiza correctamente. | El sistema muestra el mail actualizado. | ✅ PASS |
| TC-013 | Editar email con formato inválido | mail: test@test | El sistema muestra mensaje de error. | `Validation failed: email: Email is invalid`. | ✅ PASS |
| TC-014 | Editar teléfono con letras | teléfono: abcdef | El sistema muestra mensaje de error. | `Validation failed: phone: Phone number is invalid`. | ✅ PASS |
| TC-015 | Eliminar contacto exitosamente | nombre: Mari · apellido: trini | El sistema solicita confirmación y elimina el contacto. | "Are you sure?" → contacto eliminado correctamente. | ✅ PASS |
| TC-016 | Editar contacto dejando campos obligatorios vacíos | Borrar nombre y apellido | El sistema muestra mensaje de error. | `Validation failed: lastName y firstName required`. | ✅ PASS |
| TC-017 | Editar email con email ya existente | mail: test@test.com | El sistema muestra mensaje de error. | El sistema guardó el cambio, permitiendo el mail duplicado. | 🔴 FAIL → [BUG-007](./reporte-de-bugs.md) |
| TC-018 | Cancelar edición con "Return to Contact List" | Borrar nombre y apellido sin guardar | El sistema vuelve sin guardar los cambios. | El sistema vuelve a los datos originales. | ✅ PASS |
