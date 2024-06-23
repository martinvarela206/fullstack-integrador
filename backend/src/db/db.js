import mysql from 'mysql2' /* LOS MODULOS DE TERCEROS NO LLEVAN LA EXTESION .js */

const db = mysql.createConnection({
  //host: "localhost",
  // user: "root",
  // password: "",
  // database: "pasterie_integrador",
  host: "mysql-solromaniuk86.alwaysdata.net",
  user: "359679_pasterie",
  password: "Comision24130",
  database: "solromaniuk86_pasterie_integrador",

});

db.connect((error) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log("Conectados!");
});

export default db; /* asi se exporta */