import { Router } from 'express'
import { cines, cine, peliculas, pelicula } from '../controllers/index.controller.js'

const router = Router()

router.get('/cines', cines);

router.get('/cines/:id', cine);

router.get('/peliculas', peliculas);

router.get('/peliculas/:id', pelicula);


export default router