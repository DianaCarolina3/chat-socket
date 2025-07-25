// controlador de funciones del servidor de http
import express from 'express'
import 'dotenv/config'
// createServer, para tener un control más bajo nivel sobre el servidor
// permite que tengamos acceso a toda la funcionalidad http y por ende del socket.io
import { createServer } from 'node:http'
import { Server } from "socket.io";
// Morgan es un logger que guarda una traza de algo
import logger from 'morgan'
import { CLIENT_PATH } from "./utils/clientPath.js";
import { initSocket } from "./socket/connection.js";
import { createMessagesTable } from "./db/schemaChat.js";
import { chatRouter } from "./routes/chat.js";

const PORT = process.env.PORT ?? 3000

const app = express()
const server = createServer(app)
// io: in-out (entrada y salida)
const io = new Server(server, {
    // permite recuperar coneccion(data) cuando un cliente temporalmente se desconecta
    connectionStateRecovery: {
        // tiempo maximo de desconnecion que queremos guardar(data)
        maxDisconnectionDuration: {}
    }
})

// Middlewares
app.use(logger('dev'))
app.use(express.static(CLIENT_PATH))
app.use('/', chatRouter)

// Crea tabla al iniciar
await createMessagesTable()

// esto lo paso en una fn a un archivo independiente
// io.on('connection', () => {
//     console.log('a user has connected!')
// })
initSocket(io)

const serverApp = server.listen(PORT,() => {
    console.log(`Server listening on the http://localhost:${serverApp.address().port}`)
})