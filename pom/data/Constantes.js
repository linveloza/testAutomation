//Vamos a importar la libreria dotenv para que funcione el .env
import dotenv from 'dotenv'
dotenv.config();

//Esto lo cambiaremos trayendo nombrando las variables del .env 
export const URLS = {
    SAUCEDEMOURL: process.env.SAUCEDEMOURL,
    SAUCEDEMOSHOPPING: process.env.SAUCEDEMOSHOPPING
}

export const CREDENTIALS = {
    SAUCEDEMOUSER: process.env.SAUCEDEMOUSER,
    SAUCEDEMOPASS: process.env.SAUCEDEMOPASS
}

export const INFORMATION = {
    SAULASTNAME: process.env.SAULASTNAME,
    SAUFIRSTNAME: process.env.SAUFIRSTNAME,
    SAUPOSTALCODE: process.env.SAUPOSTALCODE
}