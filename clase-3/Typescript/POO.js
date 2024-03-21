"use strict";
//recepcion de un consultorio de dentista
//la POO se enfoca en las entidades encargadas de realizar esas acciones.
let listaDelDia = [];
//molde
class Recepcion {
    //creo un constructor,para que apenas genere una instancia de la clase, la cree con informacion,con atributos
    constructor(correoR, nombreR, diasR) {
        this.correo = correoR;
        this.nombre = nombreR;
        this.diaLaborales = diasR;
    }
    //metodos (comportamientos-capacidades)
    cargarPaciente(paciente) {
        listaDelDia.push(paciente);
        console.log(listaDelDia + " que se cargo dentro de los dias laborales del recepcionista que son :" + this.diaLaborales);
    }
    ;
    saludar() {
        alert("Te damos la bienvenida!! soy " + this.nombre);
    }
    asignarTurno() {
        console.log("asigna turno al paciente ...");
    }
    armarAgenda() {
        this.asignarTurno();
        console.log('sacar la lista de pacientes de ese dia..');
    }
}
//Herencia 
//superclase
class ProfesionalBucal {
    //asignar valores apenas creo una instancia
    constructor(correo, matricula, nombre) {
        this.correo = correo;
        this.matricula = matricula;
        this.nombre = nombre;
    }
    //metodos
    control() {
        console.log(this.nombre + " chequea la boca del paciente..");
    }
}
//subclase
class Dentista extends ProfesionalBucal {
    //metodo
    tratamientoConducto() {
        //console.log(this.correo +"Hace tratamiento conducto...")
        //correo es atributo que heredo de ProfesionalBucal y me tira error porque es un atributo privado (solo lo puedo usar en la superclase ProfesionalBucal- donde se creo )
        console.log(this.nombre + "Hace tratamiento conducto...");
        //nombre es atributo que heredo de ProfesionalBucal ,y como es publico lo puedo tambien utilizar dentro de la subclase Dentista 
    }
}
class Asistente extends ProfesionalBucal {
    //generamos el contructor para que en la instancia de Asistente,indique el atributo de los horarios.
    //le agregamos todos los parametros necesarios que trae del ProfesionalBucal,que le indicamos que asigne a los atributos que trae de esta otra clase con super()
    constructor(horariosAsist, correo, matricula, nombre) {
        super(correo, matricula, nombre);
        //atributos 
        this.diasDisponible = ["lun", "mier", "viernes"];
        this.horarios = horariosAsist;
    }
    limpiezaGral() {
        console.log("Hace limpieza gral de la boca del paciente...");
    }
}
//instancia de una clase (con el new)
const recepcionistaA = new Recepcion("marta@recepcion.com", "Marta Ruiz", ["lunes", "martes"]);
const recepcionB = new Recepcion("ruben@recepcion.com", "Ruben Gomez", ["Miercoles", "Jueves"]);
//recepcionB.saludar();
//recepcionistaA.saludar();
const PacienteA = {
    nombrePaciente: "Juan Perez",
    edadPaciente: 33,
    nroLegajo: 221347
};
recepcionistaA.cargarPaciente(PacienteA);
recepcionB.cargarPaciente({
    nombrePaciente: "Laura Lopez",
    edadPaciente: 19,
    nroLegajo: 22
});
const dentistaA = new Dentista("dentistaA@consultorio.com", 11111, "Luis Luna"); //Dentista subclase de ProfesionalBucal , el cual necesita que le pase 3 parametros para crearlo
const asistenteA = new Asistente([9, 10, 11, 12], "asistenteA", 22222, "Pablo Piedra");
dentistaA.control();
asistenteA.control();
dentistaA.tratamientoConducto(); //solo el dentista, el asistente no tiene este metodo, esta capacidad
asistenteA.limpiezaGral();
console.log(asistenteA.nombre, asistenteA.horarios);
recepcionistaA.saludar(); //atributo "nombre" es privado, entonces solo lo puede utilizar dentro de la definicion de la clase , en la instancia no lo podemos usar.
//recepcionistaA.correo me tira Typescript error por ser privado
//recepcionB.asignarTurno()//tira error porque ese metodo se definio com privado(private),entonces solo se puede utilizar dentro de la clase (el molde)
recepcionB.armarAgenda(); //lo puedo hacer por que es publico y puedo utilizarlo por fuera de la clase, en la instancia
console.log(recepcionistaA.diaLaborales);
