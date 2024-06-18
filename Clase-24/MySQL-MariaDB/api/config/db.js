//conectarnos con una DB SQL
import mysql2 from 'mysql2';

import {config}from "dotenv";
config();
//mysql/,mysql2 -> paquete - modulo de terceros que nos permite hacer de una manera mas simple la escucha y los pedidos desde la API a la DB
//DB -> lenguaje SQL ,utilizamos  MySQL(MariaDB)(conectarnos de manera local utilizamos XAMPP - Workbench)

//informacion obtenida del .env con la data del servidor remoto (Cleaver Cloud en este caso)

const configInfoDB={
    host:process.env.HOST,
    user:process.env.DB_USER,
    database:process.env.DB_NAME,
    password:process.env.DB_PASSWORD
}

const db= mysql2.createConnection(configInfoDB)//conectar la API con la DB

//agregado si queremos algun mensaje para saber si se logro conectar con la DB o no
db.connect((err)=>{
     err? console.log(`Error al conectarse con DB: ${err}`): console.log("Coneccion a DB SQL exitosa") 
})//

export default db;
