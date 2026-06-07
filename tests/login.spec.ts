import { test, expect } from '@playwright/test';

const URL = 'https://thinking-tester-contact-list.herokuapp.com';

test('Login exitoso con credenciales válidas', async ({ page }) => {
  await page.goto(URL);
  
  await page.fill('input[placeholder="Email"]', 'nuevotester@tester.com');
    await page.fill('input[placeholder="Password"]', '123456789');
  await page.click('button[id="submit"]');
  
  await expect(page).toHaveURL(`${URL}/contactList`);
});
test('Login fallido con credenciales inválidas', async ({ page }) => {
  await page.goto(URL);
  
  await page.fill('input[placeholder="Email"]', 'usuariofalso@test.com');
  await page.fill('input[placeholder="Password"]', 'contraseñamala');
  await page.click('button[id="submit"]');
  
  await expect(page.locator('#error')).toBeVisible();
});