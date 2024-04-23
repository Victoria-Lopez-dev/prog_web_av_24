## express
Express -> framework que nos va a permitir armar de una manera simple nuestra API , server.

nos va a brindar las bases para estructurcturarla.

Es un modulo de NPM 
 instalarlo en el proyecto -> npm i express

 ## paso a paso

 npm init -y -> para crear el package.json

 npm i express -> para instalar el paquete/modulo del framework


 Va a consistir en distintos pedidos o peticiones que vamos a recibir y que en base a eso, vamos a ir haciendo tareas y dando devoluciones o respuestas.

 ## peticiones
 Se realizan siguiente un protocolo (HTTP: Hypertext Transfer Protocol - Protocolo de transferencia de Hipertexto) que establece la comunicacion entre cliente-servidor (front-api)

request - response (peticion/pedido - respuesta)

peticion (realizada por el cliente) -> 
head y body -> donde se detalle que necesita el cliente/front y se adjunta la informacion que necesita
head -> el usuario puede observar la info que se manda
body -> el usuario no ve la info enviada.
verbos HTTP(HTTP verbs) -> "identificadores" que definen que tipo de accion necesita el cliente que haga el servidor.
Se colocan en el Head de la peticion

respuesta - response (realizada por el server- api) -> head y body -> Siempre tenemos respuesta ya sea exitosa o con el error por el cual no se pudo responder a lo solicitado. Respuesta : codigo + respuesta

Protocolo HTTP -> status code (codigo de estado) -> numeros que definen distintos tipos de respuesta

## verbos HTTP

GET -> peticion de lectura
-> tenemos como respuesta informacion sin modificar 
-> peticion por defecto
-> unica peticion que no tiene body


POST -> peticion de creacion
-> tiene head y body , usualmente utiliza el body para mandar informacion sensible y manda resto de info por el head
-> siempre envia respuesta 

para la proxima clase repaso de express y hacemos cosas y respondemos a peticiones GET y POST


PATCH->
PUT->
DELETE->