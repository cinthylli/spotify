import { Schema, model, Document } from "mongoose";

var UsuarioSchema = new Schema({
    nombre: String,
    apellido: String,
    correo: String,
    contrasena: String,
    rol: String, 
    rutaImagen: String
});

export interface iUsuario extends Document {
    nombre: string;
    apellido: string;
    correo: string;
    contrasena: string;
    rol: string;
    rutaImagen: string;
}
export default model<iUsuario>('Usuario', UsuarioSchema);