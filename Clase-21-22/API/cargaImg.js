import multer,{diskStorage} from "multer";

//const upload=multer({dest:"./images"})

//configuramos el nombre y en donde se almacena la imagen dentro de la API

const storage=diskStorage({
    destination:(req,file,callback)=>{
        const pathDocument="./images";
        callback(null,pathDocument)
    }
    ,
    filename:(req,file,callback)=>{
        const ext=file.originalname.split(".").pop();
        const filename=`img-${Date.now()}.${ext}`
        callback(null,filename)
    },
})

export const upload=multer({storage});