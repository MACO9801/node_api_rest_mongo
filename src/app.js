import express from "express"
import {config} from "dotenv"
import mongoose from "mongoose"
import bookRoutes from "./routes/book.routes.js"
import bodyParser from "body-parser"

config()


// Usamos EXPRESS para los MiddleWares
const app = express()
app.use(bodyParser.json())

// Conectar base de datos
mongoose.connect(process.env.MONGO_URL, {dbName: process.env.MONGO_DB_NAME})
const db = mongoose.connection

app.use('/books', bookRoutes)


const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Servidor iniciado en el puerto ${port}`)
})