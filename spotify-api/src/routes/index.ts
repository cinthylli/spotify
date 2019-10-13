import { Router } from 'express';
const router = Router();
// Valida si va a subir una imagen
import multer from "../libs/multer";
import { crearUsuario, obtenerUsuario, obtenerUsuarios } from '../controllers/usuario.controller';
import { crearAlbum, obtenerAlbum, obtenerAlbums } from '../controllers/album.controller';
import { crearArtista, obtenerArtista, obtenerArtistas } from "../controllers/artista.controller";
import { crearCancion, obtenerCancion, obtenerCanciones } from '../controllers/cancion.controller';

router.route('/usuario')
    .post( multer.single('rutaImagen') , crearUsuario)
    .get(obtenerUsuarios)

router.route('/usuario/:id')
    .get(obtenerUsuario)

router.route('/cancion')
    .post(crearCancion)
    .get(obtenerCanciones)

router.route('/cancion/:id')
    .get(obtenerCancion)

router.route('/artista')
    .post(multer.single('rutaImagen'), crearArtista)
    .get(obtenerArtistas)

router.route('/artista/:id')
    .get(obtenerArtista)

router.route('/album')
    .post( multer.single('rutaImagen'), crearAlbum)
    .get(obtenerAlbums)

router.route('/album/:id')
    .get(obtenerAlbum)

export default router;

