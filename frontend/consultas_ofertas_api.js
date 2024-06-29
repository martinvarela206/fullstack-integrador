const productosEnOferta = async () => {
    try {
        const response = await fetch("https://mvarela.alwaysdata.net/productos");
        const R = await response.json();

        if (!R || (Array.isArray(R) && R.length === 0) || (typeof R === 'object' && Object.keys(R).length === 0)) {
            console.log("No se encontraron productos");
        } else {
            // Filtrar productos por id específicas
            const idEspecificas = [1, 3, 7, 12]; // IDs específicas que quieres traer
            const productosFiltrados = R.filter(producto => idEspecificas.includes(producto.id));
            
            // Mostrar solo los productos con las IDs específicas
            console.log(productosFiltrados);
        }
    } catch (error) {
        console.log(error);
    }
};

productosEnOferta();
