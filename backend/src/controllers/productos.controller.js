export const todos_productos = (req, res) => {
    res.json({
        lista: 'Lista de Productos'
    })
}

export const un_producto = (req, res) => {
    const id = req.params.id
    res.json({
        id: `Producto id: ${id}`
    })
}