import { Request, Response } from "express";
import Album from "../models/album";

export async function crearAlbum(req: Request, res: Response) : Promise<Response> {
    console.log("guardando imagen");
    console.log(req.body)

    const { titulo, descripcion, anio, artista } = req.body;
    const nuevoAlbum = {
        titulo: titulo,
        descripcion: descripcion,
        anio: anio,
        artista: artista,
        rutaImagen: req.file.path
    }

    const album = new Album(nuevoAlbum);
    await album.save();
    console.log(album)

    return res.json({
        menssage: "Album creado satisfactoriamente",
        album
    })
}

export async function obtenerAlbums (req: Request, res: Response) {
    const albums = await Album.find();
    return res.json(albums);
}

export async function obtenerAlbum(req: Request, res: Response) {
    const { id } = req.params;
    const album = await Album.findById(id);
    return res.json(album);
    
}

export async function eliminarAlbum(req: Request, res: Response) {
    const { id } = req.params;
    const albumEliminado = await Album.findOneAndRemove(id);
    return res.json({
        message:"Album eliminado",
        albumEliminado
    });
}

export async function actualizarAlbum(req: Request, res: Response) {
    const { id } = req.params;
    const { titulo, descripcion, anio, artista } = req.body;
    const albumActualizado = await Album.findByIdAndUpdate(id, {
        titulo,
        descripcion,
        anio,
        artista
    });

    return res.json({
        message: "Album Actualizado",
        albumActualizado
    })
}