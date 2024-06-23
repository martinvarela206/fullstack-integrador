import {
    Router
} from "express";

const routerProductos = Router();

import {
    store,
    todos_productos,
    un_producto,
    update
} from "../controllers/productos.controller.js";


routerProductos.get('/', todos_productos)
routerProductos.get('/:id', un_producto)
routerProductos.post('/', store)
routerProductos.put('/:id', update)

export default routerProductos