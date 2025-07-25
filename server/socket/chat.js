import { handleChatEvents } from "../controllers/socket/chat.js";
import { ModelChat } from "../models/chat.js";

export const chatEvents = async (io, socket) => {
    // 1. servidor: recibimos mensaje de cliente
    socket.on('chat message', async (data) => {
        // 2. servidor: enviamos mensaje recibido del cliente
        // servidor informa a todos(cliente) sobre el mensaje
        await handleChatEvents(io, socket, data)
    })

    // Recuperar mensajes anteriores:
    // si un cliente se conecta y no se han recuperado los mensajes de una desconecion
    //traemos todos los mensajes
    if (!socket.recovered) {
        try {
            let dateNow = new Date().toISOString().slice(0, 19).replace('T', ' ')

            // traemos la query el content, id y date
            const results = await ModelChat.getMessagesAfterDate(dateNow)

            results.rows.forEach((row) => {
                socket.emit('chat message', {
                    content: row.content,
                    id: row.id.toString(),
                    date: row.created_at
                })
            })
        } catch (err) {
            console.error(err)
        }
    }
}