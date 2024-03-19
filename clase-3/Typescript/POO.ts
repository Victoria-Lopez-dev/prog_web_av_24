//recepcion de un consultorio de dentista
//la POO se enfoca en las entidades encargadas de realizar esas acciones.

//
let listaDelDia:Array<any>=[]

type Material={
    nombre:string
    stock:number
}
//molde
class Recepcion{
    //atributos (caracteristicas)

    //creo un constructor,para que apenas genere una instancia de la clase, la cree con informacion,con atributos
     constructor(){
    
     }

    //metodos (comportamientos-capacidades)
    cargarPaciente(paciente:any){
        listaDelDia.push(paciente);
        
    };

    saludar(){
        alert("Te damos la bienvenida!! soy ")
    }

    asignarTurno(){
        console.log("asigna turno al paciente ...")
    }
}

//instancia de una clase 

 //const recepcionistaA= new Recepcion();


//this



