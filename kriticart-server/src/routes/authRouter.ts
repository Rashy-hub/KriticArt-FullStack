import express, { Router, Request, Response } from 'express'
import AuthController from '../controllers/authController'

const authRouter: Router = express.Router()

authRouter.post('/register', async (_req: Request, res: Response) => {
    const controller = new AuthController()
    const response = await controller.register(_req.body)
    return res.send(response)
})

export default authRouter
