import express from 'express';
import cors from 'cors'
import routerProductos from './routes/productos.routes.js';

const app = express();

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))

app.use(express.json())

app.get('/', (req, res) => {
    res.json({
        index: 'Ejemplo. Estas en el Inicio!!!'
    })
})

app.use('/productos', routerProductos)

export default app;