import { Schema, model, Document } from 'mongoose';
import { iArtista } from "./artista";


var AlbumSchema = new Schema({
    titulo: String,
    descripcion: String,
    anio: Number,
    rutaImagen: String,
    artista: { type: Schema.Types.ObjectId, required: true}
});

export interface iAlbum extends Document{
    titulo: string;
    descripcion: string;
    anio: Number;
    rutaImagen: string;
    artista?: iArtista['_id'];
}

export default model<iAlbum>('Album', AlbumSchema);