//tipo de datos: strings- booleans - numbers 
//strings -> caracteres
"djfhksdfkjshdkfj hjsdfhksdfhksjd fkjsdf",'hola', 
`admin123`

//booleans -> verdadero - falso 
false , true 
//numbers
342342 , 123.33

//variables -> espacios de memoria 
//crear -> res nombre=valor
//var - let - const 
//var -let 
//const -> constante 
//camelCase - snake_case

//crear variable
let nombre_persona = "Juan";
const numero=344;

//utilizar variable -> llamar a la misma

nombre_persona

//modificar variable 

nombre_persona=true;


//consola -> console.log() console.table() console.dir()
console.log(nombre_persona)


//metodo alert() prompt() no se ejecutan en la terminal porque requieren del browser

//alert("mensaje de alerta")
//prompt("Ingresar dato")//metodo para recibir info del front



//agrupar informacion

//array - arreglos - listas
//sintaxis:  [],separadas por una coma simple (menos el ultimo item )

//indice         0               1    2       3
const lista=[nombre_persona,"hola",2332,[1,2,3,4],"otra cosa..."]

const numeros=[1,2,3,4,5]
//indices (iniciaban con el numero 0) - metodos
//length -> largo de la lista (indice+1)

//acceder a un item de la lista array[indice]

//console.log(lista[3]);
console.log(lista);

//spread operator  ... -> obtener el contenido de un array 

const nuevaLista=["item1","item2",...numeros]

console.log(nuevaLista)

//--Ejemplo
let alumnos1=["Alana","Juan","Pedro"]
let alumnos2=["Marta",'Julia',"Jose"]

console.log([...alumnos1,...alumnos2])

alumnos1=[...alumnos1,"Nicolas"]
//metodos del array  -> sintaxis: array.metodo()

//push() pop() shift() unshift() splice() slice() 

//push() unshift() agregar items a la lista
//pop() shift() sacar item de la lista
alumnos1.push("Paula")//agrega al final del array
alumnos1.pop() //saca el ultimo item

alumnos1.shift()//saca el primer item
alumnos1.unshift("Josefa")//agrega al inicio

//alumnos1.splice(param1,param2,param3)//param1 el indice , param2 la cantidad hacia la derecha que queremos sacar , param3 (optativo) por cual/es reemplazamos
lista.splice(2,1)



//slice() -> corta la lista 

const listaModificada=lista.slice(0,2)
console.log(listaModificada);
console.log(lista)

