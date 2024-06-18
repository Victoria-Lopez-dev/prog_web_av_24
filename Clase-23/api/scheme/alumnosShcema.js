import {Schema,model} from "mongoose";

const alumnoSchema=Schema({
    nombre:{ type: String, required: true },
    dni:{type:Number,required: true}
});

export const alumno= model("alumnos",alumnoSchema);