# Tests Automatizados — Contact List App

Suite de tests E2E automatizados con **Playwright + TypeScript**, como primera práctica de automatización.

## Archivos

### `login.spec.ts`
Dos tests:
1. **Login exitoso con credenciales válidas** — completa email y password válidos, envía el formulario y verifica que redirige a `/contactList`. Automatiza [TC-001](../01-contact-list-app/suite-casos-login.md) de la suite manual de Login.
2. **Login fallido con credenciales inválidas** — completa email y password incorrectos y verifica que se muestre el elemento de error (`#error`) en pantalla. Cubre, a nivel automatizado, el mismo escenario general que [TC-002/TC-003](../01-contact-list-app/suite-casos-login.md) de la suite manual (no valida el texto del mensaje, solo su visibilidad).

### `e2e.spec.ts`
Un test de flujo completo: login → crear contacto → verificar que el contacto aparece en la tabla → logout. Automatiza el flujo general cubierto por la [Suite de Casos E2E](../01-contact-list-app/suite-casos-e2e.md) (TC-002 a TC-006).

## Cómo correr los tests

```bash
npx playwright test
```

## Nota

Estos tests automatizan un subconjunto de los casos ya documentados manualmente en `01-contact-list-app/` — no reemplazan la suite manual completa, la complementan como práctica de automatización. El test de login fallido, en particular, valida solo la **visibilidad** del mensaje de error, no su contenido — una posible mejora futura sería agregar una assertion sobre el texto exacto mostrado.
