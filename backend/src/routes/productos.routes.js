import {
    Router
} from "express";

const routerProductos = Router();

import {
    destroy,
    store,
    todos_productos,
    un_producto,
    update, 
    productos_en_oferta

} from "../controllers/productos.controller.js";


routerProductos.get('/', todos_productos)
routerProductos.get('/:id', un_producto)
routerProductos.post('/', store)
routerProductos.put('/:id', update)
routerProductos.delete('/:id', destroy)
routerProductos.get('/ofertas/', productos_en_oferta)


export default routerProductos