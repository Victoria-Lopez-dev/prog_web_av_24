"use strict";
/* Ejercicio Veterinaria usando TypeScript + POO

- actores -> La Recepción (Sandra y Julian ) ; y la Veterinaria (Alejandra).

- solo atiende Perros y Gatos

- Metodos/capacidades Recepcion:

    # Ingresar pacientes a la lista de espera para ser atendidos por la veterinaria.
    # Agregar un paciente con su información a la lista del historial de pacientes de la clínica veterinaria
    # Cobrar la consulta (la cual es de $1000) y en caso de ser necesario, algún medicamento( el cual sale $800 c/u).


-  Metodos/capacidades de la Veterinaria :
    # Sacar los pacientes de la lista de espera
    # Agregar información al objeto del paciente
    # Indicar lo que se debe facturar ( si solo consulta o si se agregan medicamentos)


-Atributos/caracteristicas Recepcion:
    # Edad(string)
    # Usuario(string)
    # Correo(string)
    # DiasEnQueTrabaja(array de string)

-Atributos/caracteristicas Veterinaria:
    # Edad(string)
    # Usuario(string)
    # Correo(string)


- propiedades de Perros o Gatos (pacientes):
    # NombreAnimal(string)
    # Tipo(perro o gato :string)
    # Raza(string)
    # Dueño(string)
    # AñoDeIngreso(number)
    # Notas(string)
    # VacunasAplicadas(array de strings)


*/
const listaEspera = []; //definimos que permita solo tipo de dato objeto PacienteAnimald dentro del array
const historial = [];
const cosasACobrar = [];
//moldes de la Recepcion y Veterinaria
//superClase del personal de la veterinaria aprovechando que todos tienen las mismas propiedades 
class PersonalVete {
    constructor(edadP, usuarioP, correoP) {
        this.edad = edadP;
        this.usuario = usuarioP;
        this.correo = correoP;
    }
}
//subclase de PersonalVete
class Recepcion extends PersonalVete {
    constructor(listaDeDias, edadP, usuarioP, correoP) {
        super(edadP, usuarioP, correoP); //porque le sumamos los atributos de PersonalVete al atributo de la lista de dias en que trabaja
        this.diasEnQueTrabaja = listaDeDias;
    }
    //metodos(capacidades):
    ingresarLista(paciente) {
        // # Ingresar pacientes a la lista de espera para ser atendidos por la veterinaria.
        listaEspera.push(paciente);
    }
    cargarPaciente(paciente) {
        // # Agregar un paciente con su información a la lista del historial de pacientes de la clínica veterinaria
        historial.push(paciente);
    }
    cobrar(cosasACobrar) {
        // # Cobrar la consulta (la cual es de $1000) y en caso de ser necesario, algún medicamento( el cual sale $800 c/u).
        let montoTotal = 0;
        for (let item of cosasACobrar) {
            if (item === "consulta") {
                montoTotal = montoTotal + 1000;
            }
            else if (item === "medicamento") {
                montoTotal = montoTotal + 800;
            }
        }
        return montoTotal;
    }
}
//subclase de PersonalVete
class Veterinaria extends PersonalVete {
    //atributos
    //hereda los atributos de PersonalVete
    //metodos:
    sacarPaciente() {
        // # Sacar los pacientes de la lista de espera   ->   listaEspera
        if (listaEspera.length > 0) {
            let proximoPaciente = listaEspera.shift();
            console.log("atendiendo al paciente " + (proximoPaciente === null || proximoPaciente === void 0 ? void 0 : proximoPaciente.nombre));
        }
        else {
            console.log("ya terminamos, no hay pacientes por atender");
        }
    }
    cargarInfoPaciente(data, info, nombreAnimal) {
        // # Agregar información al objeto del paciente -> historial
        //buscar al paciente, agregar la info
        let paciente = historial.find((animal) => { animal.nombre === nombreAnimal; });
        if (paciente !== undefined) {
            switch (data) {
                case "nombre":
                    paciente.nombre = info;
                    break;
                case "tipo":
                    paciente.tipo = info;
                    break;
                case "raza":
                    paciente.raza = info;
                    break;
                case "propietario":
                    paciente.propietario = info;
                    break;
                case "ingreso":
                    paciente.ingreso = parseInt(info);
                    break;
                case "notas":
                    paciente.notas = paciente.notas + info;
                    break;
                case "vacunasAplicadas":
                    paciente.vacunasAplicadas.push(info);
                    break;
                default:
                    console.log("propiedad del animal no existe...");
            }
        }
    }
    cargarCobranza(infoCobranza) {
        // # Indicar lo que se debe facturar ( si solo consulta o si se agregan medicamentos)
        cosasACobrar.push(infoCobranza); //consulta y medicamento
    }
}
//instancia de Recepcion y Veterinaria (crear a los actores involucrados en la veterinaria)
let sandra = new Recepcion(["Lunes", "Miércoles", "Viernes"], "40 años", "sandraOtaz", "sandraotaz@recepcion.com");
let Juan = new Recepcion(["Martes", "Jueves", "Sabados"], "53 años", "juanPerez", "juanPerez@recepcion.com");
let Alejandra = new Veterinaria("52 años", "alejandraRuiz", " alejandraRuiz@veterinaria.com");
let pacienteAIngresar = {
    nombre: "Firulais",
    tipo: "Perro",
    raza: "Caniche",
    propietario: "Pepe",
    ingreso: 2023,
    notas: "Se le dieron las vacunas correspondientes...",
    vacunasAplicadas: ["vacuna1", "vacuna2"]
};
sandra.ingresarLista(pacienteAIngresar);
Juan.cargarPaciente(pacienteAIngresar);
console.log(listaEspera);
console.log(historial);
Alejandra.sacarPaciente();
console.log(listaEspera);
//className (React - JSX) / class -> HTML atributos de HTML donde asignamos nombres a etiquetas
//JS/TS -> class clase POO ("molde" de una entidad/actor participante de nuestro programa del cual armamos las entidades - instancias )
