import mysql from 'mysql2' /* LOS MODULOS DE TERCEROS NO LLEVAN LA EXTESION .js */

const db = mysql.createConnection({
  //host: "localhost",
  // user: "root",
  // password: "",
  // database: "pasterie_integrador",
  host: "mysql-solromaniuk86.alwaysdata.net", //o es https://phpmyadmin.alwaysdata.com/?
  user: "359679_pasterie", // alwaysdata no me deja  poner root, y obliga a que el usuario inicie con esos números
  password: "Comision24130",//alwaysdata no me deja  poner root
  database: "solromaniuk86_pasterie_integrador",//alwaysdata obliga a que el usuario inicie con esos números

});

db.connect((error) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log("Conectados!");
});

export default db; /* asi se exporta */