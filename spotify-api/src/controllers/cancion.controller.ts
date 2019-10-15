import { Request, Response } from "express";
import Cancion from "../models/cancion";

export async function crearCancion(req: Request, res: Response) {
    console.log('Creando Cancion')
    console.log(req.body)

    const { numero, tituloCancion, duracion, album, urlCancion } = req.body;
    
    const nuevaCancion = {
        numero: numero,
        tituloCancion: tituloCancion,
        duracion: duracion,
        album: album,
        urlCancion: urlCancion
    }

    const cancion = new Cancion(nuevaCancion);
    await cancion.save(); 

    return res.json({
        message: "Cancion creada exitosamente",
        cancion
    })
}

export async  function obtenerCanciones(req: Request, res: Response) {
    const canciones = await Cancion.find();
    return res.json(canciones);
}

export async function obtenerCancion(req: Request, res: Response) {
    const { id } = req.params;
    const cancion = await Cancion.findById(id);
    return res.json(cancion);   
}

export async function eliminarCancion(req: Request, res: Response) {
    const { id } = req.params;
    const cancionEliminada = await Cancion.findByIdAndRemove(id);
    return res.json({
        message: "Cancion eliminada",
        cancionEliminada
    })
}

export async function actualizarCancion(req: Request, res: Response) {
    const { id } = req.params;
    const { numero, tituloCancion, duracion, album, urlCancion } = req.body;
    const cancionActualizada = await Cancion.findByIdAndUpdate(id, {
        numero,
        tituloCancion,
        duracion,
        album,
        urlCancion
    });
    return res.json({
        message: "Cancion Actualizada ",
        cancionActualizada
    })
    
}