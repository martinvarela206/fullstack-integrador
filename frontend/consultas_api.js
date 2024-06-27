const getProductAll = async () => {

    try {

        const response = await fetch("https://mvarela.alwaysdata.net/productos");
        const R = await response.json();

        /* TOMAMOS EL ID DEL DIV DONDE VAMOS A LLENAR DE TARJETAS */
        const listarProductos_1 = document.getElementById("listarProductos_1")

        /* VERIFICAR QUE 'R' CONTENGA RESULTADOS */
        if (!R || (Array.isArray(R) && R.length === 0) || (typeof R === 'object' && Object.keys(R).length === 0)) {

            console.log("No se encontraron productos");
        } else {
            console.log(R);

            /* RECORREMOS EL ARRAY CON LOS PRODUCTOS */
            R.forEach(producto => {

                /* POR CADA PRODUCTO DE LA LISTA 'R' CREAMOS LA ESTUCTURA DE LA TARJETA QUE TENDRIAMOS EN HTML */
                /*
                <div class="col-sm-3">
                    <img class="imgProductos img-thumbnail" src="./img/selva_negra.jpg" alt="Selva Negra">
                    <p class="nombreFotoProd">
                        Selva Negra
                    </p>
                </div>
                */

                /* CREAMOS UN DIV */
                const nuevoDIV = document.createElement('div')

                /* AGREGAMOS LA CLASE CSS */
                nuevoDIV.className = 'col-sm-3'

                /* AÑADIMOS LOS DATOS QUE RECORREMOS EN 'R' */
                nuevoDIV.innerHTML =
                    `
                    <img class="imgProductos img-thumbnail" src="${producto.imagen_url}" alt="${producto.nombre}">
                        <p class="nombreFotoProd">
                            ${producto.nombre}
                        </p>
                    `
                /* FINALMENTE AGREGAMOS ESE NUEVO DIV AL QUE YA TOMAMOS POR EL ID */
                listarProductos_1.append(nuevoDIV)
            })


        }

    } catch (error) {
        console.log(error);
    }
};

getProductAll();