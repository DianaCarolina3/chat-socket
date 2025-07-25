import { dbTurso } from "../db/connection.js";

export class ModelChat {

    static async insertMessagesAndGetAfterId(id, content) {
        let date
        try {
            await dbTurso.execute({
                sql: 'INSERT INTO messages(id, content) VALUES (?, ?)',
                args: [id, content]
            })

            // recuperamos fecha
            const dateQuery = await dbTurso.execute({
                sql: 'SELECT created_at FROM messages WHERE id = ?',
                args: [id]
            })
            date = dateQuery.rows[0].created_at ?? null
            return date
        } catch (err) {
            console.error(err)
        }
    }

    static async getMessagesAfterDate(dateNow) {
        return await dbTurso.execute({
            sql: 'SELECT id, content, created_at FROM messages WHERE created_at < ?',
            // el último id siempre es diferente a 0 entonces devuelve los mensajes desde el último id
            args: [dateNow]
        })
    }
}