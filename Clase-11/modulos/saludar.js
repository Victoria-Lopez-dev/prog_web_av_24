//podemos crear nuestros modulos 

const saludo=(nombre)=>{
    console.log("Hola "+ nombre);
 
}
const mensaje=()=>{
    console.log("dejando un mensaje...")
}
module.exports={saludo,mensaje}// al exportarlos podemos utilizarlos en otros documentos 