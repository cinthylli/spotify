import { Schema, model, Document } from "mongoose";

var ArtistaSchema = new Schema({
    nombre: String,
    descripcion: String,
    rutaImagen: String
});

export interface iArtista extends Document {
    nombre: string;
    descrpcion: string;
    rutaImagen: string;
}

export default model<iArtista>('Artista', ArtistaSchema);