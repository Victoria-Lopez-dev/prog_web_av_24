console.log("estamos usando Typescript!")
//indico tipo de dato al momento de definir variables/parametros
//string-number-boolean-array-any...

let nombre:string ="Juan";
let dato:any=33;
let numero:number=22

//como definir variables que sean array
//en cualquiera tambien puedo utilizar el tipo de dato any 

//opcion 1
// const lista:Array <string | number> =[nombre,44,"Marta"];

//opcion 2
const lista:(string | number)[]=[nombre,44,"Marta"];
//defino una variable let que permita solamente strings e inicia con el valor "Juan"

//nombre=33 -> da error ya que le defini solo string y estoy utilizando number para colocar en la variable

dato=true; 

lista.push("Marzo")
//lista.push(false) -> me da error porque no esta contemplado este tipo de dato en el array cuando definimos la variable 


function suma(num1:number,num2:number,valor?:string) {
    console.log(valor)
    return num1+num2
}

function resta(num1:number,num2:number,caracter?:string){
    //console.log(caracter);
    return num1-num2
}

const dia=()=>{
    let variableA="Jueves";
    console.log("el dia de hoy es :"+variableA)
}

const dia2=(variableA="Jueves")=>{
  
    console.log("el dia de hoy es :"+variableA)
}
 

//console.log(suma(numero,44))// como no definimos parametro "valor" que es optativo, cuando se ejecuta lo toma como indefinido (undefined)

// let resultado = suma(33,22,"hola");
// console.log(resultado)

console.log(resta(11,44))

let respuesta=resta(33,44);// como tiene return obtengo un "resultado" de la funcion al ejecutarse

console.log(respuesta)

console.log(dia2())// me tira undefined ya que al no tener un return solo ejecuta todas sus acciones directamente, sin traer ningun resultado (sin devolver nada)

// suma(nombre,3)  -> da error ya que estoy colocando un tipo de dato que no es el permitido al definirlo 

//proxima clase : Objetos en Typescript + POO 