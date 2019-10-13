import { Request, Response } from "express";
import Usuario from "../models/usuario";

export async function crearUsuario(req: Request, res: Response) {
    console.log('Creando usuario')
    console.log(req.body)

    const { nombre, apellido, correo, contrasena, rol, rutaImagen} = req.body;
    const nuevoUsuario = {
        nombre: nombre,
        apellido: apellido,
        correo: correo,
        contrasena: contrasena,
        rol: rol,
        rutaImagen: rutaImagen
    }

    const usuario = new Usuario(nuevoUsuario);
    await usuario.save();
    console.log(usuario);
    
    return res.json({
        message: "Usuario Creado",
        usuario
    })
}

export async function obtenerUsuarios(req: Request, res: Response) {
    const usuarios = await Usuario.find();
    return res.json(usuarios);
    
}

export async function obtenerUsuario(req: Request, res: Response) {
    const { id } = req.params;
    const usuario = await Usuario.findById(id);
    return res.json(usuario);
    
}

export async function eliminarUsuario(req: Request, res: Response) {
    const { id } = req.params;
    const usuarioEliminado = await Usuario.findOneAndRemove(id);
    return res.json({
        message: "Usuario Eliminado",
        usuarioEliminado
    })
} 

export async function actualizarUsuario(req: Request, res: Response) {
    const { id } = req.params;
    const { nombre, apellido, correo, contransena, rol, rutaImagen } = req.body;
    const usuarioActualizado = await Usuario.findByIdAndUpdate(id, {
        nombre,
        apellido,
        correo,
        contransena,
        rol,
        rutaImagen
    });

    return res.json({
        message: "Usuario Actualizado",
        usuarioActualizado
    })
}