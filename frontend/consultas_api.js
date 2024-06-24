const getProductAll = async () => {

    try {

        const response = await fetch("https://mvarela.alwaysdata.net/productos");
        const R = await response.json();
        
        /* VERIFICAR QUE 'R' CONTENGA RESULTADOS */
        if (!R || (Array.isArray(R) && R.length === 0) || (typeof R === 'object' && Object.keys(R).length === 0)) {

            console.log("No se encontraron productos");
        } else {

            console.log(R);
        }

    } catch (error) {
        console.log(error);
    }
};

getProductAll();