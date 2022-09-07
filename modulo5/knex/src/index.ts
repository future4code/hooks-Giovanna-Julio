import express, {Request, Response} from "express";
import cors from "cors";
import connection from "./database/connection";

const app = express();

app.use(express.json());
app.use(cors());


app.get("/products", async (req: Request, res: Response) => {
  let errorCode = 400

  try {
    const searchedPrdct = req.query.name

    let products
    
    if (searchedPrdct) {
      products = await connection.raw(`
        SELECT * FROM Produtos
        WHERE nome LIKE "%${searchedPrdct}%"
      `)
    } else {
      products = await connection.raw(`
        SELECT * FROM Produtos
      `)
    }

    if (!products) {
      errorCode = 400
      throw new Error ("Sorry, no products were found")
    }

    res.status(200).send(products)
  } catch (error) {
    res.status(errorCode).send(error.message)
  }
})

app.post("/products", async (req: Request, res: Response) => {
  let errorCode = 400

  try {
    
  } catch (error) {
    res.status(errorCode).send(error.message)
  }
})


app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
});