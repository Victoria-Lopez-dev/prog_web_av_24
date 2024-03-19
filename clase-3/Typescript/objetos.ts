//objetos -> "molde" del formato del objeto 
//creamos el molde con type (esta parte de type no aparece cuando se compila a JS,solo los objetos creados)
type DatoGral={
    nombre:string
    apellido:string
    edad:number
}
type Producto={
    tipo:string
    precio:number
    descuento:boolean
}

type Docente={
    infoGral:DatoGral
    usuario?:string
    permisos?:(string)[]
}

type Alumno={
    infoGral:DatoGral
    cursos:Array<string>
    regular?:boolean//al colocar el signo de pregunta lo hago optativo
}

//a partir del molde, creo el objeto
const alumno1:Alumno={
    infoGral:{
        apellido:"Perez",
        nombre:"Juan",
        edad:33,
    },
    cursos:["PWI","PWA"],
    regular:true
}

const alumno2:Alumno={
    infoGral:{
        nombre: "Marta",
        apellido: "Gomez",
        edad: 22
    },
    cursos:["PWI"]
    
}
const docente1:Docente={
    infoGral:{
        nombre:"Julia",
        apellido:"Ruiz",
        edad:44
    }
}
const mostrarAlumnosReg=(alumno:Alumno)=>{
   if(alumno.regular){
    console.log(alumno.infoGral.nombre +" es regular")
   }
};

const objeto3={
    nombre:"Ramon",
    regular:false
}

let listaAlumnos:(Alumno)[]=[];

listaAlumnos.push(alumno1);
//listaAlumnos.push(docente1); -> da error porque quiero ingresar al array un tipo de dato que no permite su tipado

// mostrarAlumnosReg(objeto3) -> tira error ya que al definir la funcion le indicamos que el tipo de objeto que vamos a pasar como parametro es Alumno

mostrarAlumnosReg(alumno1);

console.log(listaAlumnos)
