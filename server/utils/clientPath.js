import * as path from 'node:path'
import { fileURLToPath } from 'url'

// en ES Modules, y Node.js no define __dirname ni __filename automáticamente
// aquí lo hacemos nosotros y obtengo la ruta actual del archivo
// no hay problema si ejecutamos la app desde otro directorio
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
export const CLIENT_PATH = path.join(__dirname, '..', '..', 'client', 'public')
