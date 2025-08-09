const { test, expect } = require('@playwright/test');

test('should login to demo site', async ({ page }) => {
  // Go to the login page
  await page.goto('https://the-internet.herokuapp.com/login');

  // Fill in the username and password
  await page.fill('#username', 'tomsmith');
  await page.fill('#password', 'SuperSecretPassword!');

  // Click the login button
  await page.click('button[type="submit"]');

  // Wait for success message
  await expect(page.locator('h2')).toHaveText('Secure Area');

  // Take a screenshot (proof it worked!)
  await page.screenshot({ path: 'screenshots/login-success.png' });
});