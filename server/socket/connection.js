import { chatEvents } from "./chat.js";

export function initSocket(io) {
    io.on('connection', (socket) => {
        console.log('a user has connected!')

        // SEPARO la LOGICA del CHAT MESSAGE,
        // recibo eventos,
        // los dirigo al de chat donde se reciben los mensajes del cliente,
        // finalmente los dirigo al manejador de eventos de chat donde el servidor los emite

        chatEvents(io, socket)

        socket.on('disconnect', () => {
            console.log('an user has disconnected')
        })
    })
}

// ---------------------------------------------------------
// // 1. servidor: recibimos mensaje de cliente
// socket.on('chat message', (data) => {
//     // 2. servidor: enviamos mensaje recibido del cliente
//     // servidor informa a todos(cliente) sobre el mensaje
//     io.emit('chat message', data)
// })