import { CLIENT_PATH } from '../../utils/clientPath.js'

export class ChatController {

    static getAll = async (req, res) => {
        await res.sendFile('index.html', { root: CLIENT_PATH})
    }

}
