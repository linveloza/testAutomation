//Vamos a importar la libreria dotenv para que funcione el .env
import dotenv from 'dotenv'
dotenv.config();

//Esto lo cambiaremos trayendo nombrando las variables del .env 
export const URLS = {
    SAUCEDEMOURL: process.env.SAUCEDEMOURL
}

export const CREDENTIALS = {
    SAUCEDEMOUSER: process.env.SAUCEDEMOUSER,
    SAUCEDEMOPASS: process.env.SAUCEDEMOPASS
}