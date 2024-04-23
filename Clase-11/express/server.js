const express = require("express");//llamamos al modulo
const server= express();//accedemos a todos los metodos
const puerto=4000;

//server.tipoPeticion(endpoint,callback)
server.get("/endpoint",(req,res)=>{
    res.send("mensaje de respuesta...")
    //acciones a realizar cuando reciba esta peticion.
    //dentro de req esta la info que recibo de la peticion
    //dentro de res vamos a colocar la respuesta que le vamos a enviar al cliente/front
});//peticion de tipo get (lectura) -> cada vez que ejecute una peticion de tipo get con el path/endpoint "/" ejecute la funcion callback.
//la funcion callback tiene 2 parametros : req (request-peticion) y res(response - respuesta) siempre en el mismo orden (req,res)


server.listen(puerto,()=>{
    console.log(`Server corriendo al puerto ${puerto}`)
});
//contiene dos parametros : el nro de puerto por el cual se va a estar comunicando con el Front y el callback(funcion que va a ejecutar luego de "conectarse" a ese puerto)