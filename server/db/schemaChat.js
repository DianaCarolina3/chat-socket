import { dbTurso } from './connection.js'

export async function createMessagesTable() {
    await dbTurso.execute(`
    CREATE TABLE IF NOT EXISTS messages (
        id TEXT PRIMARY KEY,
        content TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
`)
}

