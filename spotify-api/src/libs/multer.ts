import multer  from "multer";
import uuid  from "uuid/v4";
import path from "path";

const storage = multer.diskStorage({
    destination: "uploads",
    filename: (req, file, cb) => {
        // Permite guardar el archivo con un nombre en clave unico
        cb(null, uuid() + path.extname(file.originalname) )
    }
})

export default multer({storage});