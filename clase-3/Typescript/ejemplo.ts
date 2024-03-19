console.log("Hola")

//tipos -> string - number- boolean - any 

let nombre:string="Juan";

//nombre=23234;

const lista:Array<number|string>=[];

const listaBis:(any)[]=[];

function saludar(nombrePersona:string,nacionalidad="Argentina"){
    console.log(nombrePersona + " HOLA!")
    nacionalidad
}
const alertar=()=>{
    alert("Mensajito de alerta!!");
   
}
saludar("Marta")