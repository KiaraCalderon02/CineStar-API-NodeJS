import { pool } from '../db.js'

//CINES

export const cines = async (req, res) => {
    try {
        const [result] = await pool.query('SELECT * FROM cine')

        res.json({
            success: true,
            message: "Lista de cines obtenida correctamente",
            data: result
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error en el servidor",
            error: error.message
        })
    }
}

export const cine = async (req, res) => {
    try {
        const [result] = await pool.query(
            'SELECT * FROM cine WHERE id = ?',
            [req.params.id]
        )

        if (result.length === 0) {
            return res.status(404).json({
                success: false,
                message: "Cine no encontrado",
                data: null
            })
        }

        res.json({
            success: true,
            message: "Cine encontrado",
            data: result[0]
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error en el servidor",
            error: error.message
        })
    }
}


//PELICULAS

export const peliculas = async (req, res) => {
    try {
        const [result] = await pool.query('SELECT * FROM pelicula')

        res.json({
            success: true,
            message: "Lista de películas obtenida correctamente",
            data: result
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error en el servidor",
            error: error.message
        })
    }
}

export const pelicula = async (req, res) => {
    try {
        const [result] = await pool.query(
            'SELECT * FROM pelicula WHERE id = ?',
            [req.params.id]
        )

        if (result.length === 0) {
            return res.status(404).json({
                success: false,
                message: "Película no encontrada",
                data: null
            })
        }

        res.json({
            success: true,
            message: "Película encontrada",
            data: result[0]
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error en el servidor",
            error: error.message
        })
    }
}