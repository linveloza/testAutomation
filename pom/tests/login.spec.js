//Este codigo es traido de playright inspector
import { test, expect } from '@playwright/test';
//Se importa lo que creamos en la pagina login.spec.js
const { LoginPage } = require('../pages/login-page');
//Se importa lo que creamos en data/constantes
import { URLS, CREDENTIALS } from '../data/Constantes'

test('User must be logged in successfully', async ({ page }) => {
  //await page.goto('https://www.saucedemo.com/');
  //quedaria de esta manera
  await page.goto(URLS.SAUCEDEMOURL);
  //Esto debemos agregarlo
  const loginPage = new LoginPage(page);
  //Aca vamos a llamar el user y el pass de la siguiente manera
  await loginPage.submitLoginForm(CREDENTIALS.SAUCEDEMOUSER,CREDENTIALS.SAUCEDEMOPASS);
  //Esta parte del codigo la vamos a arreglar en login.spec.js
  /*await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();*/
});