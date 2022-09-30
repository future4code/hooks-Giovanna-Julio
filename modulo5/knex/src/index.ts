import express, {Request, Response} from "express";
import cors from "cors";
import connection from "./database/connection";

const app = express();

app.use(express.json());
app.use(cors());


app.get("/users", async (req: Request, res: Response) => {
  let errorCode = 400

  try {
    const searchedUser = req.query.name

    let users
    
    if (searchedUser) {
      users = await connection.raw(`
        SELECT * FROM KnexUsers
        WHERE name LIKE "%${searchedUser}%"
      `)
    } else {
      users = await connection.raw(`
        SELECT * FROM KnexUsers
      `)
    }

    if (!users) {
      errorCode = 400
      throw new Error ("Sorry, no users found.")
    }

    res.status(200).send(users)
  } catch (error) {
    res.status(errorCode).send(error.message)
  }
})

app.post("/users", async (req: Request, res: Response) => {
  let errorCode = 400

  try {
    const { name, email } = req.body

    if (!name || !email || typeof name !== "string" || name.length < 4 || typeof email !== "string" || email.includes("@") === false) {
      errorCode = 406
      throw new Error("You must inform a valid name and an e-mail. Name must be a string of at least 4 characters and e-mail must also be a string containing the character '@'.")
    }

    const checkEmail = await connection.raw(`
      SELECT * FROM KnexUsers
      WHERE email LIKE "%${email}%"
    `)
    if (checkEmail) { 
      errorCode = 409
      throw new Error("E-mail already registered in our database.")
    }

    await connection.raw (`
      INSERT INTO KnexUsers (id, nome, email)
      VALUES (${Number(Date.now())}, ${name}, ${email})
    `)

    const confirmUser = await connection.raw(`
      SELECT * FROM KnexUsers
      WHERE email LIKE "%${email}%"
    `)
    if (!confirmUser) {
      errorCode = 404
      throw new Error ("Issues creating a new user. Please try again.")
    }

    res.status(201).send(confirmUser)
  } catch (error) {
    res.status(errorCode).send(error.message)
  }
})

app.put("/users/:id", async (req: Request, res: Response) => {
  let errorCode = 400

  try {
    const id = req.params.id
    const newEmail = req.body.newEmail

    const confirmId = await connection.raw(`
      SELECT * FROM KnexUsers
      WHERE id LIKE "%${id}%"
    `)
    if (!confirmId) {
      errorCode = 404
      throw new Error ("This ID does not match any users.")
    }

    const confirmEmail = await connection.raw(`
    SELECT * FROM KnexUsers
    WHERE email LIKE "%${newEmail}%"
    `) 
    if (!newEmail || confirmEmail || newEmail.includes('@') === false) throw new Error ("Please inform a new, valid e-mail address.")
    
    await connection.raw(`
      UPDATE KnexUsers
      SET email = "${newEmail}"
      WHERE id = "%${id}%";
    `)

    res.status(200).send("E-mail address altered successfully.")
  } catch (error) {
    res.status(errorCode).send(error.message)
  }
})

app.delete("/users/:id", async (req: Request, res: Response) => {
  let errorCode = 400

  try {
    const id = req.params.id

    const confirmId = await connection.raw(`
      SELECT * FROM KnexUsers
      WHERE id LIKE "%${id}%"
    `)
    if (!confirmId) {
      errorCode = 404
      throw new Error ("This ID does not match any users.")
    }

    await connection.raw(`
      DELETE FROM KnexUsers 
      WHERE id = "${id}";
    `)

    res.status(200).send("User successfully deleted.")
  } catch (error) {
    res.status(errorCode).send(error.message)
  }
})

app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
});