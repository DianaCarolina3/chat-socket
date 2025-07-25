// con Turso usando SQLite y dependencia para usar Turso es @libsql/client
import { createClient } from '@libsql/client'

export const dbTurso = createClient({
    url: process.env.URL_TURSO,
    authToken: process.env.AUTH_TOKEN_TURSO,
})