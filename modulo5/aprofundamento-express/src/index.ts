import express, {request, Request, Response} from 'express';
import cors from 'cors'
import { toDo, taskFormat } from './data';
import { v4 as generateId } from 'uuid'

const app = express()

app.use(express.json())
app.use(cors())


app.get("/ping", (req: Request, res: Response) => {
    res.send("pong")
})


app.get("/to-do/all/completed", (req: Request, res: Response) => {
    try {
        const inquireType = req.query.completed
        
        if (!inquireType) throw new Error ("Please inquire for completed or awaiting tasks.")

        const isTrueSet = (inquireType === 'true')

        const taskInquire = toDo.filter((task)=>{
            return task.completed === isTrueSet
        })

        if (!taskInquire) throw new Error ("There are no tasks with such status.")

        res.status(200).send(taskInquire)
    } catch (error) {
        res.send(error.message)
    }
})

app.post("/to-do/create-task", (req: Request, res: Response) => {
    try {
        const userId = Number(req.headers.auth)

        const user = toDo.filter((user) => user.id === userId)

        if (!user) throw new Error ("Please choose a user.")

        const newTask = req.body.taskname

        if (!newTask) throw new Error ("Please assign a name for the task.")

        const verifyTask = user.find((task)=>{task.title.toLowerCase() === (newTask as string).toLowerCase()})

        if(verifyTask) throw new Error ("This task already exists")

        const pushTask: taskFormat= {
            userId: userId,
            id: generateId(),
            title: newTask,
            completed: false
        }

        toDo.push(pushTask)

        res.status(201).send("Task successfully generated.")
    } catch (error) {
        res.send(error.message)
    }

})

app.put("/to-do/edit/status", (req: Request, res: Response) => {
    try {
        const taskId = Number(req.body.taskid)
        if (!taskId) throw new Error ("Please identidy the desired task")

        const task = toDo.find((task) => { task.id === taskId})
        if (!task) throw new Error ("Task cannot be found. Please try again.")

        const inquireType = req.body.completed
        if (!inquireType) throw new Error ("Please inform desired task status.")

        const isTrueSet = (inquireType === 'true')

        const changedTask = {...task , completed: isTrueSet}

        toDo.splice(toDo.indexOf(req.body.taskid), 1, changedTask)

        res.status(200).send("Here are your changes: " + changedTask)
        
    } catch (error) {
        res.send(error.message)
    }
    
})

app.delete("/to-do/edit/del", ( req: Request, res: Response) => {
    try {
        const taskId = Number(req.body.taskid)
        if (!taskId) throw new Error ("Please identidy the desired task")

        const task = toDo.find((task) => { task.id === taskId})
        if (!task) throw new Error ("Task cannot be found. Please try again.")

        toDo.splice(toDo.indexOf(req.body.taskid), 1)

        res.status(200).send("Task successfully deleted.")
        
    } catch (error) {
        res.send(error.message)
    }
})

app.get("/to-do/:userId", (req: Request, res: Response) => {
    try {
        const userId = Number(req.params.userId)
        if (!userId) throw new Error ("Please choose a user.")

        const userExists = toDo.find((user) => { user.userId === userId })
        if (!userExists) throw new Error ("User not found. Please try again")

        const userTasks = toDo.filter((task) => {
            return task.userId === userId
        })

        res.status(200).send(userTasks)
    } catch (error) {
        res.send(error.message)
    }
})



app.listen(3003, () => { console.log("Port open at http://localhost:3003/") })