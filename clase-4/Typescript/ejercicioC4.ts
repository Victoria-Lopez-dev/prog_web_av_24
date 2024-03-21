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

//type (estructura del objeto)

type PacienteAnimal={
    nombre:string
    tipo:string
    raza:string
    propietario:string
    ingreso:number
    notas:string
    vacunasAplicadas:string[]//Array<string>puedo usar cualquiera de los dos
}

const listaEspera:PacienteAnimal[]=[];//definimos que permita solo tipo de dato objeto PacienteAnimald dentro del array

const historial:PacienteAnimal[]=[];

//superClase del personal de la veterinaria aprovechando que todos tienen las mismas propiedades 
class PersonalVete{
    //atributos
    edad:string
    usuario:string
    correo:string

    constructor(edadP:string,usuarioP:string,correoP:string){
        this.edad=edadP;
        this.usuario=usuarioP;
        this.correo=correoP
    }
}

//subclase de PersonalVete
class Recepcion extends PersonalVete{
    //atributos(caracteristicas)
        //hereda los atributos de PersonalVete
        //le agregamos a los atributos de PersonalVete, los dias en que trabaja
    diasEnQueTrabaja:string[]//Array<string>puedo usar cualquiera de los dos

    constructor(listaDeDias:string[],edadP:string,usuarioP:string,correoP:string){
        super(edadP,usuarioP,correoP);//porque le sumamos los atributos de PersonalVete al atributo de la lista de dias en que trabaja
        this.diasEnQueTrabaja=listaDeDias
    }

    //metodos(capacidades):
    
    ingresarLista(paciente:PacienteAnimal){
        // # Ingresar pacientes a la lista de espera para ser atendidos por la veterinaria.
        listaEspera.push(paciente)
    }

    cargarPaciente(paciente:PacienteAnimal){
        // # Agregar un paciente con su información a la lista del historial de pacientes de la clínica veterinaria
        historial.push(paciente)

    }
    // # Cobrar la consulta (la cual es de $1000) y en caso de ser necesario, algún medicamento( el cual sale $800 c/u).

}

//subclase de PersonalVete
class Veterinaria extends PersonalVete{
    //atributos
        //hereda los atributos de PersonalVete

    //metodos:

    // # Sacar los pacientes de la lista de espera
    // # Agregar información al objeto del paciente
    // # Indicar lo que se debe facturar ( si solo consulta o si se agregan medicamentos)
}

//className (React - JSX) / class -> HTML atributos de HTML donde asignamos nombres a etiquetas
//JS/TS -> class clase POO ("molde" de una entidad/actor participante de nuestro programa del cual armamos las entidades - instancias )