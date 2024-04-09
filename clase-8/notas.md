## base de datos
sistema de almacenamiento de informacion, las clasificamos segun la manera de tener la informacion organizada.

# relacionales
- Se escribian en lenguaje SQL - estructuradas en forma de tablas
- Todos sus campos tienen que estar completos
- Nuevos conceptos: campos - registros


# No relacionales 
- Almacenan la informacion en colecciones 
- Tambien llamada NoSQL
- Documento que va a ser como un gran array de objetos, objeto de objetos (como un JSON)
no son tan "rigidas" como las relacionales.

- MongoDB como DB no relacional (paralelismo con MySQL - XAMPP)
- Compass como GUI (interfaz grafica - Graphic Unit Interface  - paralelismo con phpMyAdmin)

- Colecciones -> paralelismo a las tablas de SQL . Almacenan los documentos 
- Documentos -> paralelismo a los registros de SQL . La informacion en si, escrita en BJSON (similar a JSON)

- ObjectId -> valor unico a nivel global creado por MongoDB para diferenciar a todos sus documentos.Los crea de manera automatica y podemos si queremos acceder a dicho dato.

- Necesitamos al crear DB crear una coleccion (que puede o no estar vacia) para que me figure

## comandos Mongosh - terminal o consola 

Muy importante, siempre ver dentro de que db estoy parado para que pueda acceder a la informacion que necesito y ejecutar las acciones correspondientes.

# show dbs
nos muestra todas las base de datos que tenemos creadas

# db 
nos muestra en que base de datos nos encontramos parados

# use nombreDB
nos paramos sobre una base de datos para poder realizar acciones sobre esta o creamos una nueva base de datos(si es que el nombre que colocamos no existe entre las ya creadas)



## acciones dentro de colecciones 

# leer - buscar

db.coleccion.find() -> trae todos los documentos de la coleccion
 db.coleccion.findOne({filtro}) -> trae el primer documento que cumple con la condicion indicada en el filtro
  db.coleccion.find({filtro})-> trae todoslos documentos que cumplen con la condicion indicada en el filtro

  filtro -> {propiedad/campo :valor}

  # operadores 

  $eq -> == (igual a)
  $gt -> > (mayor a )
  $gte -> >= (mayor o igual)
  $lt -> < (menor a )
  $lte -> <= (menor o igual a)

  filtro + operadores -> {propiedad/campo:{$operador:valor}}


# operadores logicos 

Con estos operadores podemos buscar rangos(similar a cuando aplicamos en JS)

$and  
$or
$not

ejemplo

  filtro + operadores logicos+ operadores -> {$op.logico:[{campos},{campos}]}

# ingresar documentos 

db.nombreColeccion.insertOne({})

Nos devuelve la ejecucion del comando tanto si lo pudo crear como su ObjectId.

db.nombreColeccion.insertMany([{},{},...])

Nos devuelve la ejecucion del comando tanto si lo pudo crear como sus ObjectId con cada indice para poder diferenciarlo.




