import { test, expect } from '@playwright/test';

const URL = 'https://thinking-tester-contact-list.herokuapp.com';

test('Flujo E2E completo', async ({ page }) => {
  // Login
  await page.goto(URL);
  await page.fill('input[placeholder="Email"]', 'nuevotester@tester.com');
  await page.fill('input[placeholder="Password"]', '123456789');
  await page.click('button[id="submit"]');
  await expect(page).toHaveURL(`${URL}/contactList`);

  // Crear contacto
  await page.click('button[id="add-contact"]');
  await page.fill('input[id="firstName"]', 'Ana');
  await page.fill('input[id="lastName"]', 'Garcia');
  await page.fill('input[id="email"]', 'ana.garcia@test.com');
  await page.click('button[id="submit"]');
  await expect(page).toHaveURL(`${URL}/contactList`);

  // Verificar que el contacto aparece en la lista
  await expect(page.locator('table')).toContainText('Ana');

  // Logout
  await page.click('button[id="logout"]');
  await expect(page).toHaveURL(URL);
});
