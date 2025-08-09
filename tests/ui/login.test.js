const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../pages/LoginPage');

test('should login successfully', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login('tomsmith', 'SuperSecretPassword!');

  const successText = await loginPage.getSuccessText();
  expect(successText.trim()).toBe('Secure Area');

  await page.screenshot({ path: 'screenshots/login-success.png' });
});