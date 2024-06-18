import {
    Router
} from "express";

const routerProductos = Router();

import {
    todos_productos,
    un_producto
} from "../controllers/productos.controller.js";


routerProductos.get('/', todos_productos)
routerProductos.get('/:id', un_producto)

export default routerProductos