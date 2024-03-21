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


-Atributos Recepcion:
    # Edad
    # Usuario
    # Correo
    # DiasEnQueTrabaja

-Atributos Veterinaria:
    # Edad
    # Usuario
    # Correo


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
}
//subclase de PersonalVete
class Veterinaria extends PersonalVete {
}
//className (React - JSX) / class -> HTML atributos de HTML donde asignamos nombres a etiquetas
//JS/TS -> class clase POO ("molde" de una entidad/actor participante de nuestro programa del cual armamos las entidades - instancias )
