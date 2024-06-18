//conectarnos con una DB SQL
import mysql2 from 'mysql2';
//mysql/,mysql2 -> paquete - modulo de terceros que nos permite hacer de una manera mas simple la escucha y los pedidos desde la API a la DB
//DB -> lenguaje SQL ,utilizamos  MySQL(MariaDB)(conectarnos de manera local utilizamos XAMPP - Workbench)

const configInfoDB={
    host:"localhost",
    user:'root',
    database:'db_alumnos',
    //password:// de manera remota por seguridad tiene una contraseña
}

const db= mysql2.createConnection(configInfoDB)//conectar la API con la DB

//agregado si queremos algun mensaje para saber si se logro conectar con la DB o no
db.connect((err)=>{
     err? console.log(`Error al conectarse con DB: ${err}`): console.log("Coneccion a DB SQL exitosa") 
})//

export default db;
