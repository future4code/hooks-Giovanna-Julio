import express, {Request, Response} from 'express'
import cors from 'cors'
import {v4 as generateId} from 'uuid'
import {user, users} from './data'


const app = express()

app.use(express.json())
app.use(cors())

app.get("/users", (req: Request, res: Response) => {
    try {
        res.status(200).send(users)
    } catch (error) {
        res.status(444).send("API offline at the moment.")
    }
})

app.get("/users/:type", (req: Request, res: Response) => {
    let errorCode: number

    try {
        const desiredType: string | undefined = req.params.type
        const verifyType = (desiredType.toUpperCase() === "ADMIN" || desiredType.toUpperCase() === "NORMAL")

        if (!desiredType || !verifyType) {
            errorCode = 404
            throw new Error ("User type not found.")
        }

        const desiredTypeList: user[] | undefined = users.filter((user)=>{
            return user.type.toUpperCase() === desiredType.toUpperCase()
        })

        if (!desiredTypeList) {
            errorCode = 404
            throw new Error ("0 users found with this requirement.")
        }

        res.status(200).send(desiredTypeList)
    } catch (error) {
        res.status(errorCode).send(error.message)
    }
})

app.get("/user", (req: Request, res: Response) => {
    let errorCode: number

    try {
        const desiredUser = req.query.name
        if (!desiredUser) {
            errorCode = 411
            throw new Error ("Please inform a user.")
        }

        const findUser: user | undefined = users.find((user)=>{return user.name.toUpperCase() === desiredUser.toString().toUpperCase()})
       
        if (!findUser) {
            errorCode = 404
            throw new Error ("User not found.")
        }

        res.status(200).send(findUser)
    } catch (error) {
        res.status(errorCode).send(error.message)
    }
})

app.post("/users", (req: Request, res: Response) => {
    let errorCode: number

    try {
        const {name, email, type, age} = req.body
        // if (!name || !email || !type || age) {
        //     errorCode = 400
        //     throw new Error ("One or more fields missing.")
        // }

        const correctCaseType = type.toUpperCase()

        const verifyEmail = users.find((user)=>{user.email.toLowerCase() === email.toLowerCase()})
        const verifyType = (correctCaseType === "ADMIN" || correctCaseType === "NORMAL")

        if (verifyEmail) {
            errorCode = 409
            throw new Error ("E-mail already registered in our database")
        }
        if (!verifyType) {
            errorCode = 417
            throw new Error ("Please define type as ADMIN or NORMAL")
        }

        const newUser: user = {
            id: generateId(),
            name,
            email,
            type: correctCaseType,
            age
        }

        users.push(newUser)

        res.status(201).send("User successfully created.")
    } catch (error) {
        res.status(errorCode).send(error.message)
    }
})


app.listen(3003, ()=>{console.log("Port open at http://localhost:3003/")})