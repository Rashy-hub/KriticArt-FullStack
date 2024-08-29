import express, { Router, Request, Response } from 'express'
import PingController from '../controllers/pingController'
const pingRouter: Router = express.Router()

pingRouter.get('/ping', async (_req: Request, res: Response) => {
    const controller = new PingController()
    const response = await controller.getMessage()
    return res.send(response)
})

export default pingRouter
