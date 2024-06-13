import mysql2 from "mysql2/promise";
const dbConfig = {
  host: "localhost",
  user: "root",
  database: "clase-22"
};
export const db = await mysql2.createConnection(dbConfig);
