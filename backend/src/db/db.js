import mysql from 'mysql2' /* LOS MODULOS DE TERCEROS NO LLEVAN LA EXTESION .js */

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "pasterie_integrador",
});

db.connect((error) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log("Conectados!");
});

export default db; /* asi se exporta */