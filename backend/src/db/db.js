
// const mysql = require("mysql2");
// //import mysql from "mysql2";
// const db = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "pasterie_integrador",
// });
// connection.connect((error) => {
//   if (error) {
//     return console.log(error);
//   }
//   console.log("Conectados");
// });
// module.exports = connection;
// module.exports = db;
// module.exports = mysql;

const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "pasterie_integrador",
});

db.connect((error) => {
  if (error) {
    return console.log(error);
  }
  console.log("Conectados");
});

module.exports = db;