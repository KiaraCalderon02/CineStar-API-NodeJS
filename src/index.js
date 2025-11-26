import express from 'express'
import indexRoutes from './routes/index.routes.js'

const app = express()

app.use('/api', indexRoutes)

app.listen(3000)