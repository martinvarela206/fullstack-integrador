/* 
    AL INCLUIR EN package.json 
    "type" : "module", 
    SE PUEDE USAR LA SINTAXIS 
    IMPORT ... FROM 
*/
import app from "./src/app.js";

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
});