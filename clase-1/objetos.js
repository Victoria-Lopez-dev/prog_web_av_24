
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

console.log(34 === "34") // 
