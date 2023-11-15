import express, { Router } from 'express'
import PingController from 'src/controllers/pingController'
const pingRouter: Router = express.Router()

pingRouter.get('/ping', async (_req, res) => {
    const controller = new PingController()
    const response = await controller.getMessage()
    return res.send(response)
})

export default pingRouter
