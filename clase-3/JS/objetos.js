"use strict";
//a partir del molde, creo el objeto
const alumno1 = {
    infoGral: {
        apellido: "Perez",
        nombre: "Juan",
        edad: 33,
    },
    cursos: ["PWI", "PWA"],
    regular: true
};
const alumno2 = {
    infoGral: {
        nombre: "Marta",
        apellido: "Gomez",
        edad: 22
    },
    cursos: ["PWI"]
};
const docente1 = {
    infoGral: {
        nombre: "Julia",
        apellido: "Ruiz",
        edad: 44
    }
};
const mostrarAlumnosReg = (alumno) => {
    if (alumno.regular) {
        console.log(alumno.infoGral.nombre + " es regular");
    }
};
const objeto3 = {
    nombre: "Ramon",
    regular: false
};
let listaAlumnos = [];
listaAlumnos.push(alumno1);
//listaAlumnos.push(docente1); -> da error porque quiero ingresar al array un tipo de dato que no permite su tipado
// mostrarAlumnosReg(objeto3) -> tira error ya que al definir la funcion le indicamos que el tipo de objeto que vamos a pasar como parametro es Alumno
mostrarAlumnosReg(alumno1);
console.log(listaAlumnos);
