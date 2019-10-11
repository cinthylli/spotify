import express from "express";
import morgan from "morgan";
import indexRoutes from "./routes/index"
import  path  from "path";

const app = express();

//Configuraciones
app.set('port', process.env.PORT || 4000);

//Middleware
app.use(morgan('dev'));
//Leer json
app.use(express.json())


//Routes
app.use('/api', indexRoutes)

//Almacenar archivos publicos como imagenes
app.use('/uploads', express.static(path.resolve('uploads')));


export default app;