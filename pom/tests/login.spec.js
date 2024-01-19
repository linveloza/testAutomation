//Este codigo es traido de playright inspector
import { test, expect } from '@playwright/test';
//Se importa lo que creamos en la pagina login.spec.js
const { LoginPage } = require('../pages/login-page');
//Vamos a importar la libreria dotenv para que funcione el .env
import dotenv from 'dotenv'
dotenv.config();

test('User must be logged in successfully', async ({ page }) => {
  //Esto lo cambiaremos trayendo nombrando las variables del .env 
  //await page.goto('https://www.saucedemo.com/');
  //quedaria de esta manera
  await page.goto(process.env.SAUCEDEMOURL);
  //Esto debemos agregarlo
  const loginPage = new LoginPage(page);
  //Aca vamos a llamar el user y el pass de la siguiente manera
  await loginPage.submitLoginForm(process.env.SAUCEDEMOUSER,process.env.SAUCEDEMOPASS);
  //Esta parte del codigo la vamos a arreglar en login.spec.js
  /*await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();*/
});