import { Request, Response } from "express";
import Artista from "../models/artista";

export async function crearArtista(req: Request, res: Response) {
    console.log("Guardando artista")
    console.log(req.body)

    const { nombre, descripcion } = req.body;
    const nuevoArtista = {
        nombre: nombre,
        descripcion: descripcion,
        rutaImagen: req.file.path
    };

    const artista = new Artista(nuevoArtista);
    await artista.save();
    console.log(artista)

    return res.json({
        message: "Artista exitosamente guardado",
        artista
    })
}

export async function obtenerArtistas(req: Request, res: Response) {
    const artistas = await Artista.find()
    console.log("Exito - Obtener artista")
    return res.json(artistas);
}

export async function obtenerArtista(req: Request, res: Response) {
    const id = req.params.id;
    const artista = await Artista.findById(id);
    console.log("Exito - Obtener artista")
    return res.json(artista);
}

export async function eliminarArtista(req: Request, res: Response) {
    const { id } = req.params;
    const artistaEliminado = await Artista.findByIdAndRemove(id);
    return res.json({
        message: "Artista Eliminado",
        artistaEliminado
    })
}

export async function actualizarArtista(req: Request, res: Response) {
    const { id } = req.params;
    const { nombre, descripcion } = req.body;
    const artistaActualizado = await Artista.findByIdAndUpdate(id, {
        nombre,
        descripcion
    });
    return res.json({
        message: "Artista Actualizado",
        artistaActualizado
    })
}