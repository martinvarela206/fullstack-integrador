import db from "../db/db.js" /* LOS MODULOS PROPIOS LLEVAN LA EXTESION .js */

export const todos_productos = (req, res) => {
  const sql = "SELECT * FROM productos";
  try {
    db.query(sql, (error, rows) => {
      if (error) {
        console.log(error);
        return res.status(500).json({
          error: "Intente más tarde!"
        });
      }
      res.json(rows);
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Intente más tarde"
    });
  }
};

export const un_producto = (req, res) => {
  const {
    id
  } = req.params;
  const sql = "SELECT * FROM productos WHERE id = ?";

  try {
    db.query(sql, [id], (error, rows) => {
      if (error) {
        console.log(error);
        return res.status(500).json({
          error: "Intente más tarde"
        });
      }
      if (rows.length === 0) {
        return res.status(404).json({
          message: "No existe el producto"
        });
      }
      res.json(rows[0]);
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Intente más tarde"
    });
  }
};

export const store = (req, res) => {
  const {
    descripcion,
    precio_de_venta_por_kg,
    stock
  } = req.body;
  const sql =
    "INSERT INTO productos (descripcion, precio_de_venta_por_kg, stock) VALUES (?,?,?)";

  try {
    db.query(sql, [descripcion, precio_de_venta_por_kg, stock], (error, result) => {
      if (error) {
        console.log(error);
        return res.status(500).json({
          error: "Intente más tarde"
        });
      }
      res.json(req.body);
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Intente más tarde"
    });
  }
};

export const update = (req, res) => {
  const {
    id
  } = req.params;
  const {
    descripcion,
    precio_de_venta_por_kg,
    stock
  } = req.body;

  const sql =
    "UPDATE productos SET descripcion = ?, precio_de_venta_por_kg = ?, stock = ? WHERE id = ?";
  const values = [descripcion, precio_de_venta_por_kg, stock, id];

  try {
    db.query(sql, values, (error, rows) => {
      if (error) {
        console.log(error);
        return res.status(500).json({
          error: "Error al actualizar el producto"
        });
      }

      return res.status(200).json({
        message: "Producto actualizado correctamente"
      });
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Intente más tarde"
    });
  }
};

export const destroy = (req, res) => {
  const {
    id
  } = req.params;
  const sql = "DELETE from productos WHERE id =?";

  try {
    db.query(sql, [id], (error, result) => {
      console.log(result);
      if (error) {
        console.log(error);
        return res.status(500).json({
          error: "Intente más tarde"
        });
      }
      if (result.affectedRows === 0) {
        return res.status(404).json({
          message: "No existe el producto"
        });
      }

      res.json({
        mensaje: "Registro borrado"
      });
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Intente más tarde"
    });
  }
};