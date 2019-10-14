import { Schema, model, Document } from "mongoose";
//import { iAlbum } from "./album";

var CancionSchema = new Schema({
    numero: Number,
    tituloCancion: String,
    duracion: String,
    urlCancion: String,
    //album: { type: Schema.Types.ObjectId, required: true}
});

export interface iCancion extends Document {
    numero: number;
    tituloCancion: string;
    duracion: string;
    urlCancion: string;
    //album?: iAlbum['_id'];
}

export default model <iCancion>('Cancion', CancionSchema);