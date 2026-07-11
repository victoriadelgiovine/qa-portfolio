# Reporte de Bugs — Contact List App

**Proyecto:** Contact List App

**URL:** https://thinking-tester-contact-list.herokuapp.com

**Fecha:** Junio 2026

**Responsable:** Victoria Paula Del Giovine

## Resumen

| Total | Críticos | Altos | Medios | Bajos |
|-------|----------|-------|--------|-------|
| 7 | 0 | 1 | 4 | 2 |

---

## BUG-001 — Usuario no autenticado accede a /contactList

**Severidad:** Alta
**Prioridad:** Alta
**Estado:** Abierto
**Módulo:** Autenticación

**Descripción:** Al modificar la URL añadiendo `/contactList`, un usuario no autenticado accede a la lista de contactos.

**Pasos para reproducir:**
1. Ingresar a https://thinking-tester-contact-list.herokuapp.com
2. Añadir `/contactList` al final de la URL.
3. Presionar Enter.

**Resultado esperado:** El sistema bloquea el acceso y redirige al login.
**Resultado obtenido:** El sistema muestra `/contactList` con lista vacía.
**Justificación:** Compromete la seguridad del sistema al permitir acceso sin autenticación.

---

## BUG-002 — Login con campo vacío muestra mensaje genérico

**Severidad:** Baja
**Prioridad:** Media
**Estado:** Abierto
**Módulo:** Autenticación

**Descripción:** El sistema no distingue entre campo vacío y credenciales inválidas.

**Pasos para reproducir:**
1. Dejar campo mail vacío.
2. Ingresar contraseña válida.
3. Hacer clic en Submit.

**Resultado esperado:** Mensaje específico de campo obligatorio.
**Resultado obtenido:** "Incorrect username or password".
**Justificación:** Genera confusión en el usuario.

---

## BUG-003 — Login con contraseña vacía muestra mensaje genérico

**Severidad:** Baja
**Prioridad:** Media
**Estado:** Abierto
**Módulo:** Autenticación

**Descripción:** Mismo comportamiento que BUG-002 para el campo contraseña.

**Pasos para reproducir:**
1. Ingresar mail válido.
2. Dejar contraseña vacía.
3. Hacer clic en Submit.

**Resultado esperado:** Mensaje específico de campo obligatorio.
**Resultado obtenido:** "Incorrect username or password".

---

## BUG-004 — Sistema permite registrar contacto con mail duplicado

**Severidad:** Media
**Prioridad:** Alta
**Estado:** Abierto
**Módulo:** Gestión de Contactos
**Caso de prueba relacionado:** [TC-004](./suite-casos-gestion-contactos.md)

**Descripción:** El sistema permite registrar un contacto con email ya existente sin mostrar mensaje de error.

**Pasos para reproducir:**
1. Add a New Contact.
2. Completar campos con un mail ya existente.
3. Hacer clic en Submit.

**Resultado esperado:** Mensaje de error por mail duplicado.
**Resultado obtenido:** El sistema generó el contacto con mail duplicado.
**Justificación:** Compromete la integridad de los datos.

---

## BUG-005 — Sistema acepta formato de fecha inválido

**Severidad:** Media
**Prioridad:** Baja
**Estado:** Abierto
**Módulo:** Gestión de Contactos
**Caso de prueba relacionado:** [TC-007](./suite-casos-gestion-contactos.md)

**Pasos para reproducir:**
1. Add a New Contact.
2. Ingresar fecha: `1234/06/08`.
3. Hacer clic en Submit.

**Resultado esperado:** Mensaje de error por formato inválido.
**Resultado obtenido:** El sistema generó el contacto con fecha inválida.

---

## BUG-006 — Sistema acepta "@" en campo nombre

**Severidad:** Media
**Prioridad:** Media
**Estado:** Abierto
**Módulo:** Gestión de Contactos
**Caso de prueba relacionado:** [TC-009](./suite-casos-gestion-contactos.md)

**Pasos para reproducir:**
1. Add a New Contact.
2. Ingresar nombre: `M@ri`.
3. Hacer clic en Submit.

**Resultado esperado:** Mensaje de error por carácter inválido.
**Resultado obtenido:** El sistema generó el contacto con "@" incluido.

---

## BUG-007 — Sistema permite editar contacto con mail duplicado

**Severidad:** Media
**Prioridad:** Alta
**Estado:** Abierto
**Módulo:** Gestión de Contactos
**Caso de prueba relacionado:** [TC-017](./suite-casos-gestion-contactos.md)

**Descripción:** El sistema permite editar un contacto usando un email ya existente.

**Precondiciones:** Existen dos contactos: uno con mail `test@test.com` y otro con mail diferente.

**Pasos para reproducir:**
1. Seleccionar un contacto.
2. Reemplazar el mail por uno ya existente.
3. Hacer clic en Submit.

**Resultado esperado:** Mensaje de error por mail duplicado.
**Resultado obtenido:** El sistema guardó el cambio con mail duplicado.
**Justificación:** Puede generar cruce de datos y pérdida de confiabilidad.
