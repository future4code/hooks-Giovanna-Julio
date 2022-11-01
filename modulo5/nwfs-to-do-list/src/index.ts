import express, {Request, Response} from "express";
import cors from "cors";
import connection from "./database/connection";
import { STATUS, User, Task } from "./types";
import {v4 as generateId} from 'uuid';

const app = express();

app.use(express.json());
app.use(cors());

app.post('/users', async(req: Request, res: Response) => {
    let errorCode = 400

    try {
        const {name, nickname, email} = req.body
        if (!name || !nickname || !email) throw new Error ("Please inform new user's name, nickname and email.")
        if (email.includes("@") === false) {
            errorCode = 406
            throw new Error ("Plese insert a valid e-mail address.")
        }

        const checkEmail = await connection("To_Do_Users")
            .select("*")
            .where({ email });
        if (checkEmail.length === 0) {
            errorCode = 409
            throw new Error ("E-mail already registered.")
        }

        const newUser: User = {
            id: generateId(),
            name,
            nickname,
            email
        } 

        await connection("To_Do_Users")
            .insert(newUser)

        res.status(201).send('User successfully created.')
    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
});

app.get("/user/:id", async (req: Request, res: Response) => {
    let errorCode = 400

    try {
        const id = req.params.id
        
        const verifyUser = await connection("To_Do_Users")
            .select("id", "nickname")
            .where({ id });
        
        if (verifyUser.length === 0) {
            errorCode = 404
            throw new Error ("No users found under the provided ID.")
        }

        res.status(200).send(verifyUser)
    } catch (error) {
        res.status(errorCode).send(error.message)
    }
});

app.put("/user/edit/:id", async (req: Request, res: Response) => {
    let errorCode = 400

    try {
        const id = req.params.id

        const verifyUser = await connection("To_Do_Users")
            .select("*")
            .where({ id });
        if (verifyUser.length === 0) {
            errorCode = 404
            throw new Error ("No users found under the provided ID.")
        }

        const {name, nickname} = req.body
        if (!name && !nickname) {
            errorCode = 411
            throw new Error ("At least one change must be submitted.")
        }

        const verifyChanges = await connection("To_Do_Users")
            .select("name", "nickname")
            .where({ id })
        if (verifyChanges.length > 0) throw new Error ("At least one change must be made")

        if (verifyChanges[0] === name && verifyChanges[1] !== nickname) {
            await connection("To_Do_Users")
            .update({ nickname })
            .where({ id });

            res.status(200).send("Changes in nickname saved successfully.")
        }
        if (verifyChanges[0] !== name && verifyChanges[1] === nickname) {
            await connection("To_Do_Users")
            .update({ name })
            .where({ id });

            res.status(200).send("Changes in name saved successfully.")
        }

        await connection("To_Do_Users")
            .update({ name, nickname })
            .where({ id });

        res.status(200).send("Changes in name and nickname saved successfully.")       
    } catch (error) {
        res.status(errorCode).send(error.message)
    }
});

app.post("/task", async (req: Request, res: Response) => {
    let errorCode = 400

    try {
        const {title, description, due_date, user_id} = req.body
        if(!title || !description || !due_date || !user_id) throw new Error ("All fields must be filled. Please, try again.")

        const formattedDueDate = due_date.slice(6,11) + "-" + due_date.slice(3,5) + "-" + due_date.slice(0,2)

        const newTask: Task = {
            id: generateId(),
            title,
            description, 
            due_date: formattedDueDate,
            status: STATUS.TODO,
            user_id
        }

        await connection("To_Do_List")
            .insert({
                id: newTask.id,
                title: newTask.title, 
                description: newTask.description, 
                due_date: newTask.due_date, 
                status: newTask.status, 
                user_id: newTask.user_id
            })

        res.status(201).send(`Task *${newTask.title}* was successfully created. Get moving! :)`)
    } catch (error) {
        res.status(errorCode).send(error.message)
    }
});

app.get("/task/:id", async (req: Request, res: Response) => {
    let errorCode = 400

    try {
        const id = req.params.id
        
        const verifyTask = await connection("To_Do_List")
            .select(
                "id",
                "title",
                "description",
                "due_date",
                "status",
                "user_id",
            )
            .where({ id });
        
        if (verifyTask.length === 0) {
            errorCode = 404
            throw new Error ("No users found under the provided ID.")
        }
        
        
        const generateTaskDisplay = () =>{
            for (const task of verifyTask) {
                // const taskDueDate = task.due_date as string
                // const formattedDueDate = taskDueDate.slice(9,11) + "/" + taskDueDate.slice(6,8) + "/" + taskDueDate.slice(0,5) 
                
                let displayTask = {
                    id: task.id,
                    title: task.title,
                    description: task.description,
                    due_date: task.due_date,
                    status: task.status,
                    user_id: task.user_id
                }
                taskDisplay.push(displayTask)
            }
        }
        const taskDisplay: Task [] = []
        generateTaskDisplay()

        res.status(200).send(taskDisplay)
    } catch (error) {
        res.status(errorCode).send(error.message)
    }
})


app.listen(process.env.PORT || 3306, () => {console.log(`Servidor rodando na porta ${process.env.PORT || 3306}`)});