import express from 'express'
import cors from 'cors'
import { usersBase, allPosts } from './data'

const app = express()

app.use(express.json())
app.use(cors())

app.listen(3003, ()=>{console.log('Port 3003 open, come on in...')})

app.get('/', (req, res) => {
    res.send("Ya basic!")
})


app.get('/users', (req, res) => {
    res.send(usersBase)
})

app.get('/posts', (req, res) => {
    res.send(allPosts)
})

app.get('/posts/:userId', (req, res) => {
    const wantedUserId = Number(req.params.userId) 

    const userPosts = allPosts.map((post)=>{
        return post.userId === wantedUserId
    })
    
    res.send(userPosts)
})