
//objetos -> describir entidades,cosas,indicar sus cualidades
//{} , dentro de ellas propiedades:valor separadas por coma simple (,) excepto el ultimo par propiedad/valor

//defino variable de un objeto
let alumno={
    nombre:"Luis",
    apellido:"Perez",
    edad:33,
    alumnoRegular:true,
    cursos:["PWI","PWA"]
}

//modificar propiedades -> objeto.propiedad=nuevoValor

alumno.edad=44;

//agregar una nueva propiedad -> objeto.nuevapropiedad=valor

alumno.correo="bla@bla.com"

// eliminar una propiedad -> delete objeto.propiedad

delete alumno.alumnoRegular

//console.log(alumno)

//operadores - operaciones que podemos realizar

//Aritmeticos -> calculos 
//simbolos -> + - * /
//suma (+)

34+2// si sumo dos numeros hace el calculo matematico
alumno.nombre+2 // si sumo un string a otra cosa,hace una concatenacion
false+2 // booleans -> false = 0 , true = 1
"34"+2

34-1//resta matematica
"34"-1//detecta que el contenido es un numero y lo resta
"Hola"-1// NaN (Not a Number) -> el calculo da como resultado algo que no es un numero 
//isNaN() -> metodo de JS nos permite indicar si lo que colocamos dentro de los parentesis es o no un NaN. Nos devuelve un booleano

//* y /
33/2//devuelve un numero
"hola"/2//devuelve NaN
"33"/2//devuelve numero

//Comparacion -> comparan y devuelven booleanos(true o false)

//simbolos : == | === | > | < |<= |>= | != |!==

//== y === -> igualdad( algo es igual a ...)

// el igual unico (=) se utiliza para definir variables
//doble igual (==) compara si esos valores son iguales (compara solo contenido, no tipo de dato)

alumno.apellido == "Gomez" //false
34 == "34" //true (por que no le importa los tipos de datos sino el contenido)


//el triple igual (===) compara tanto el valor como el tipo de dato

34 === "34" //false -> valores: es el mismo valor, pero tienen distinto tipo de dato : number y el otro string

alumno.apellido === "Perez"//true porque coincide tanto el tipo de dato como el valor del dato




// > | < ( mayor o menor)    <= |>= (menor o igual , mayor o igual)

//para que la respuesta sea algo valido es recomendable que compare con estos simbolos , numeros 


"34">34 //false

"35">34//interpreta a 35 como numero -> true

33>35// compara dos numeros y al no cumplirse esa comparacion nos devuelve false

"dos">1 //false -> respuesta no util porque estoy comparando si una palabra es mas grande que un numero 

//si queremos comparar cantidad de caracteres de un string -> length (puedo usarlo tanto en arrays para que nos indique la cantidad de items de la lista,como en string para cantidad de caracteres)

//  3       >1 
"dos".length>1 //true 
//podria como alternativa  guardar en una variable el string o el length del string y compararlo

//con el agregado del igual (>= o <=) incluye al valor que estoy comparando. Recordemos que el signo igual(=) va despues del simbolo de mayor o menor
"34">=34 //true
//console.log("34"<=34 )

//!== | != (distinto) lo opuesto a la igualdad , si hay una desigualdad nos da true

//!== compara tanto el valor como el tipo de dato
//!= compara el valor
"hola" != 34// true 
"34" != 34 // false porque compara el valor y 34 es igual a 34
"34" !== 34// true -> poruqe compara tanto el valor como el tipo de dato.

console.log("34" !== 34)

//Logicos &&(and) ||(or) !(not) -> booleanos

//condicionaa que ciertas condiciones/operaciones se cumplan o no 


//&& -> necesita que todas esas operaciones o condiciones nos de como resultado true para darnos el resultado true
//           true           false(porque alumno.apellido es "Perez")

34>20 && alumno.apellido === "Gomez" && alumno.edad>22// como una ya da false el resultado final es false

//|| (or) nos pide que por lo menos 1 de esas operaciones me de true para darme como resultado final true 

34>20 || alumno.apellido === "Gomez" ||  alumno.edad>22 // true porque se fija que una  esas operaciones ya nos da true 
console.log(34>20 || alumno.apellido === "Gomez" ||  alumno.edad>22)



//!() not -> nos da el "opuesto" , necesia que esa operacion no nos de verdadero para que lo sea

// !     false -> me devuelve el opuesto -> true 
!(alumno.nombre == undefined)//true 


// condicionales 
//accion ante cierta condicionas 

//operador ternario -> sintaxis: condicion ? accion-true : accion-false;

//si o si tengo que indicarle que hacer tanto si se cumple como si no se cumple la condicion 
//solo me permite hacer una accion verdadera y una accion falsa 
//siempre definir todo en la misma linea 
//puedo ir anidando condiciones tambien si quiero 


alumno.apellido === "Perez" && alumno.edad>20? calcularNac(alumno.edad):console.log("No es alumno regular..")


//funciones -> conjuntos de acciones,instrucciones 

//funcion tradicional o arraw function(funcion flecha)
//primero creo la funcion(defino) y luego ejecuto 

//en la tradicional si la defino despues de ejecutarla lo hace sin problema (hoisting)
//funcion flecha nos obliga a escribir en orden


// function name(params) {
    //acciones o instruccciones
// 

// const name=(params)=>{
    //acciones o instruccciones
// }


function calcularNac(edad) {
    let actual=2024;
    let nacimiento=actual-edad;
    console.log("el alumno nacio en el año "+nacimiento)
    return nacimiento
}

const calculoDeNac=(edad)=>{
    let actual=2024;
    let nacimiento=actual-edad;

    return nacimiento
}


//condicionales if/else
//sintaxis:
/*
    if(condicion){
        //accion/es a realizar si se cumple la condicion (true)
    }else{
        //accion/es a realizar si no se cumple la condifion (false)
    }

    me permite no utilizar el else, y hace mas visual si anidando condiciones
    
    if(condicion){
        if(condicion){

        }
    }else{
        if(condicion){

        }
    }

    if(condicion){

    }

*/

//switch -> evalua valores y nos da distintas alternativas segun ese valor especifico

/* sintaxis:

switch(valor){
    case 1:

    break;
    case 2:

    break;
    case 3:

    break;

    default :
    break;
}
*/


switch(alumno.cursos.length){

    case 2:
        console.log("descuento 1")
        break;

    case 1:
        console.log("descuento 2")
        break;
    
    case 3:
        console.log("descuento 3")
        break;
    default:
        console.log("se anoto a mas cursos de los permitidos...")
    break;

}

//React - TypeScript - intro a POO 