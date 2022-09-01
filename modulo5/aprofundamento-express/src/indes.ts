import express, {Request, Response} from 'express';
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())

app.listen(3003, () => { console.log("Port open at http://localhost:3003/") })

app.get("/ping", (req: Request, res: Response) => {
    res.send("pong")
})

