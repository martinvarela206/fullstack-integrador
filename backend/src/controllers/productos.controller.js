import db from "../db/db.js" /* LOS MODULOS PROPIOS LLEVAN LA EXTESION .js */

// GET:/productos
export const todos_productos = (req, res) => {
  const sql = "SELECT * FROM productos";

  db.query(sql, (error, rows) => {
    if (error) {
      console.log(error);
      return res.status(500).json({
        error: "Intente más tarde!"
      });
    }
    res.json(rows);
  });
};

// GET:/productos/ofertas
export const productos_en_oferta = (req, res) => {
  const sql =
    //"SELECT * FROM productos INNER JOIN ofertas ON productos.id = ofertas.producto_id;";
    "SELECT producto_id, productos.nombre, ofertas.descuento, productos.precio, productos.imagen_url ,ofertas.fecha_inicio, ofertas.fecha_fin FROM productos INNER JOIN ofertas ON productos.id = ofertas.producto_id;";
   // "SELECT productos.nombre, ofertas.descuento, productos.precio, ofertas.fecha_inicio, ofertas.fecha_fin FROM productos NATURAL JOIN ofertas;";
    db.query(sql, (error, rows) => {
      if (error) {
        console.log(error);
        return res.status(500).json({
          error: "Intente más tarde!"
        });
      }
      res.json(rows);
    });
};

// GET:/productos/:id
export const un_producto = (req, res) => {
  const {
    id
  } = req.params;
  const sql = "SELECT * FROM productos WHERE id = ?";

  db.query(sql, [id], (error, rows) => {
    if (error) {
      console.log(error);
      return res.status(500).json({
        error: "Intente más tarde"
      });
    }
    if (rows.length === 0) {
      return res.status(404).json({
        message: "No existe el producto "+id
      });
    }
    res.json(rows[0]);
  });
};

// POST:/productos
export const store = (req, res) => {
  const {
    nombre,
    descripcion,
    precio,
    categoria_id,
    imagen_url
  } = req.body;
  const sql =
    "INSERT INTO productos (nombre, descripcion, precio, categoria_id, imagen_url) VALUES (?,?,?,?,?)";

  db.query(sql, [nombre, descripcion, precio, categoria_id, imagen_url], (error, result) => {
    if (error) {
      console.log(error);
      return res.status(500).json({
        error: "Intente más tarde"
      });
    }
    res.json(req.body);
  });
};

// PUT:/productos/:id
export const update = (req, res) => {
  const {
    id
  } = req.params;
  const {
    nombre,
    descripcion,
    precio,
    categoria_id,
    imagen_url
  } = req.body;

  const sql =
    "UPDATE productos SET nombre = ?, descripcion = ?, precio = ?, categoria_id = ?, imagen_url = ? WHERE id = ?";
  const values = [nombre, descripcion, precio, categoria_id, imagen_url, id];

  db.query(sql, values, (error, rows) => {
    if (error) {
      console.log(error);
      return res.status(500).json({
        error: "Error al actualizar el producto"
      });
    }

    if(rows.affectedRows === 0){
      return res
        .status(404)
        .json({message: "Producto no encontrado, no se actualizó ningun producto."});
    }

    return res.status(200).json({
      message: "Producto actualizado correctamente"
    });
  });
};

// DELETE:/productos/:id
export const destroy = (req, res) => {
  const {
    id
  } = req.params;
  const sql = "DELETE from productos WHERE id =?";

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
};



