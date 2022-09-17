import express, {Request, Response} from "express";
import cors from "cors";
import connection from "./database/connection";

const app = express();

app.use(express.json());
app.use(cors());



app.listen(process.env.PORT || 3003, () => {console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)});