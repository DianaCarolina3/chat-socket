import { randomUUID } from 'node:crypto'
import { ModelChat } from "../../models/chat.js";

export const handleChatEvents = async (io, socket, data) => {
    // guardamos información que llega en la db
    // ?? quiere decir que si no se cumplen las opciones anteriores y es null o undefined devuelve ''
    const content = typeof data === 'string' ? data : data?.content?.toString?.() ?? ''
    const id = randomUUID()

    // insertamos mensaje en la db y retorna la fecha
    const date = await ModelChat.insertMessagesAndGetAfterId(id, content)

    // 2. servidor: enviamos mensaje recibido del cliente
    // servidor informa a todos(cliente) sobre el mensaje
    io.emit('chat message', {
        content,
        id,
        date
    })
}
