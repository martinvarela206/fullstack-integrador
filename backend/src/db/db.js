const mysql = require("mysql2");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "pasterie_integrador",
});
connection.connect((error) => {
  if (error) {
    return console.log(error);
  }
  console.log("Conectados");
});
module.exports = connection;

