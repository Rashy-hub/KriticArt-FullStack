import express, { Request, Response, Application } from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import path from 'path'
import swaggerUi from 'swagger-ui-express'
import router from './routes'

//For env File
dotenv.config()

//Instentiate server
const app: Application = express()
const port = process.env.PORT || 8000

//Add middlewars
app.use(express.json())
app.use(morgan('tiny'))
app.use('/', express.static(path.join(__dirname, '../public')))
//setup middleware for swagger docs as json
app.use(
    '/docs',
    swaggerUi.serve,
    swaggerUi.setup(undefined, {
        swaggerOptions: {
            url: '/swagger.json',
        },
    })
)

app.use(router)
//Add routing
app.get('/', (req: Request, res: Response) => {
    res.send('Welcome to Express & TypeScript KriticArt server')
})
//Start Rest Api
app.listen(port, () => {
    console.log(`Server is Fire at http://localhost:${port}`)
})
