import express, {Application} from "express";
import morgan from "morgan";
import indexRoutes from "./routes/index"
import path from "path";
import cors from "cors";

//Inicializacion
const app: Application = express();

//Configuraciones
app.set('port', process.env.PORT || 4000);

//Middleware
app.use(morgan('dev'));
//comunicacion entre los dos servidores
app.use(cors())
//Leer json
app.use(express.json())

//Routes
app.use('/api', indexRoutes)

//Almacenar archivos publicos como imagenes
app.use('/uploads', express.static(path.resolve('uploads')));


export default app;