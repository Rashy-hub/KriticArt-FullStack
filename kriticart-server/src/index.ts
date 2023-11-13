import express, { Request, Response, Application } from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'

//For env File
dotenv.config()

const app: Application = express()
const port = process.env.PORT || 8000

app.get('/', (req: Request, res: Response) => {
    res.send('Welcome to Express & TypeScript KriticArt server')
})

app.use(express.json())
app.use(morgan('tiny'))
app.use(express.static('public'))

app.listen(port, () => {
    console.log(`Server is Fire at http://localhost:${port}`)
})
