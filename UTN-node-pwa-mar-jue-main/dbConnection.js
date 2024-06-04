import mysql2 from "mysql2/promise";
const dbConfig = {
  host: "localhost",
  user: "root",
  password: "root",
  port: 3306,
  database: "api_movies",
};
export const db = await mysql2.createConnection(dbConfig);
