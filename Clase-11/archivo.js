const {saludo}=require('./modulos/saludar.js');//traemos un modulo creado por nosotros

const validator=require("validator");//traemos un modulo de los node_modules

console.log("Hola Mundo soy un archivo JS !")

saludo("JUAN")
let resultado=validator.isCreditCard("23947293472")

console.log(resultado);

console.log(validator.isEmail('foo@bar.com'))
