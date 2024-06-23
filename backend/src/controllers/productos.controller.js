// export const todos_productos = (req, res) => {
//     res.json({
//         lista: 'Lista de Productos'
//     })
// }

// export const un_producto = (req, res) => {
//     const id = req.params.id
//     res.json({
//         id: `Producto id: ${id}`
//     })
// }
//const db  = require("../db/db");
//import  connection from "../db/db";
//import  connection from "../db/db";
// import  mysql from "mysql2";
// import fs from "fs";
// import path from "path";
// import connection from "../db/db";
// export const todos_productos = (req, res) => {
//   const sql = "SELECT * FROM productos";
//   db.query(sql, (error, rows) => {
//     if (error) {
      
//       console.log(error);
//       return res.status(500).json({ error: "Intente más tarde" });
//     }
//     res.json(rows);
//   });
  
// };
import mysql from "mysql2";
import fs from "fs";
import path from "path";
import db from "../db/db";
export const todos_productos = (req, res) => {
  const sql = "SELECT * FROM productos"; db.query(sql, (error, rows) => {
    if (error) {

 
  console.log(error);
  return res.status(500).json({ error: "Intente más tarde" });
}
res.json(rows);
});

};
export const un_producto = (req, res) => {
  const { id } = req.params;
  const sql = "SELECT * FROM productos WHERE id = ?";
  db.query(sql, [id], (error, rows) => {
    if (error) {
      
      console.log(error);
      return res.status(500).json({ error: "Intente más tarde" });
    }
    if (rows.length === 0) {
      return res.status(404).json({ message: "No existe el producto" });
    }
    res.json(rows[0]);
  });
};
const store = (req, res) => {
 

  const { descripcion, precio_de_venta_por_kg, stock } = req.body;
  const sql =
    "INSERT INTO productos (descripcion, precio_de_venta_por_kg, stock) VALUES (?,?,?)";
  db.query(
    sql,
    [descripcion, precio_de_venta_por_kg, stock],
    (error, result) => {
      
      if (error) {
        
        console.log(error);

        return res.status(500).json({ error: "Intente más tarde" });
      }
      
      res.json(req.body);
    }
  );
};
const update = (req, res) => {
  const { id } = req.params;
  const { descripcion, precio_de_venta_por_kg, stock } = req.body;

  const sql =
    "UPDATE productos SET descripcion = ?, precio_de_venta_por_kg = ?, stock = ? WHERE id = ?";
  const values = [descripcion, precio_de_venta_por_kg, stock, id];

  db.query(sql, values, (error, rows) => {
    if (error) {
      console.log(error);
      return res.status(500).json({ error: "Error al actualizar el producto" });
    }

    return res
      .status(200)
      .json({ message: "Producto actualizado correctamente" });
  });
};
    
const destroy = (req, res) => {
  const { id } = req.params;
  const sql = "DELETE from productos WHERE id =?";
  db.query(sql, [id], (error, result) => {
    console.log(result);
    if (error) {
      console.log(error);
      return res.status(500).json({ error: "Intente más tarde" });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "No existe el producto" });
    }

    res.json({ mensaje: "Registro borrado" });
  });
};
// module.exports = {
//   todos_productos,
//   un_producto,
//   store,
//   update,
//   destroy,
// };

