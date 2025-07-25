import { Router } from 'express'
import { ChatController } from '../controllers/http/chat.js'

export const chatRouter = () => {
    const router = Router()

    router.get('/', ChatController.getAll)

    return router
}