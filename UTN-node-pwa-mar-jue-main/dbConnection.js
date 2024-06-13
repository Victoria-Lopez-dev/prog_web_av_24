import mysql2 from "mysql2/promise";
const dbConfig = {
  host: "localhost",
  user: "root",
  password: "root",
  port: 3306,
  database: "api_movies",
};
export const db =  mysql2.createConnection(dbConfig);

db.connect((error)=>{
  if(error){
      if(error.code ==='ER_BAD_DB_ERROR' ){
          console.log("error con la coneccion con la DB: "+ error.sqlMessage)
      }else{
          console.log(error)
      }
  }else{
      console.log("Coneccion con DB MySQL exitosa")
  }
});