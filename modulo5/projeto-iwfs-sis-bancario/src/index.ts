import express, {Request, Response} from 'express';
import cors from 'cors'
import {v4 as generateId} from 'uuid'
import { accountFormat, accounts, spendingsFormat, presentDate } from './data';

const app = express()

app.use(express.json())
app.use(cors())

app.get("/accounts", (req: Request, res: Response) => {
    let errorCode: number

    try {
        if (!accounts) {
            errorCode = 404
            throw new Error ("Database unavailable at this time.")
        }

        res.status(200).send(accounts)
    } catch (error) {
        res.status(errorCode).send(error.message)
    }
})

app.post("/account", (req: Request, res: Response) => {
    let errorCode: number

    try {
        const {name, cpf, dOb} = req.body

        if (!name||!cpf||!dOb) {
            errorCode = 406
            throw new Error ("One ore more fields missing")
        }
        if (cpf.length() !== 11 || dOb.length() !== 8) {
            errorCode = 411
            throw new Error ("CPF must be 11 characters long, DoB must be 8 characters long.")
        }

        if (Number(dOb) - Number(presentDate) < 18) {
            errorCode = 401
            throw new Error ("Account must not be held by a minor.")
        }

        const verifyCPF = accounts.find((account)=>{account.cpf === cpf})
        if (verifyCPF) {
            errorCode = 409
            throw new Error ("CPF already in database.")
        }

        const newAccount: accountFormat = {
            id: generateId(),
            name,
            cpf,
            dOb,
            balance: 0,
            spendings: []     
        } 

        accounts.push(newAccount)

        res.status(201).send("Account created.")
    } catch (error) {
        res.status(errorCode).send(error.message)
    }
})

app.get("/account/:id/balance", (req: Request, res: Response) => {
    let errorCode: number

    try {
        const desiredAccountId = req.params.id
        if (!desiredAccountId) { 
            errorCode = 400
            throw new Error ("Please inform a valid ID.")
        }

        const findAccount = accounts.find((acc) => {acc.id === desiredAccountId})
        if (!findAccount) {
            errorCode = 404
            throw new Error ("ID not found in our database.")
        }

        res.status(200).send(findAccount.balance)
    } catch (error) {
        res.status(errorCode).send(error.message)
    }
})

app.put("/account/:id/balance", (req: Request, res: Response) => {
    let errorCode: number

    try {
        const desiredAccountId = req.params.id
        if (!desiredAccountId) { 
            errorCode = 400
            throw new Error ("Please inform a valid ID.")
        }

        const findAccount = accounts.find((acc) => {acc.id === desiredAccountId})
        if (!findAccount) {
            errorCode = 404
            throw new Error ("ID not found in our database.")
        }

        const amount = req.body
        if (amount) { 
            errorCode = 400
            throw new Error ("You must inform an amount for deposit. Please verify the information and try again.")
        }

        let newBalance = findAccount.balance + Number(amount)

        findAccount.balance = newBalance

        accounts.splice(accounts.indexOf(findAccount), 1, findAccount)

        res.status(200).send(findAccount.balance)

    } catch (error) {
        res.status(errorCode).send(error.message)
    }
})

app.post("/account/:id/balance", (req: Request, res: Response) => {
    let errorCode: number

    try {
        const desiredAccountId = req.params.id
        if (!desiredAccountId) { 
            errorCode = 400
            throw new Error ("Please inform a valid receiver ID.")
        }

        const {senderName, senderCPF, receiverName, receiverCPF, amount} = req.body
        if (!senderName || !senderCPF || !receiverName || !receiverCPF || !amount) { 
            errorCode = 406
            throw new Error ("Please specify sender and receiver by name and CPF along with the amount for this transaction.")
        }

        const findSender = accounts.find((acc) => {acc.name === senderName && acc.cpf === senderCPF})
        const findReceiver = accounts.find((acc) => {acc.name === receiverName && acc.cpf === receiverCPF})
        if (!findSender || !findReceiver) {
            errorCode = 404
            throw new Error ("Provided details do not match database.")
        }

        findSender.balance -= amount
        findReceiver.balance += amount

        const newSpending: spendingsFormat = {
            amount,
            date: presentDate,
            description: "Transfer to" + desiredAccountId
        }

        findSender.spendings.push(newSpending)
        accounts.splice(accounts.indexOf(findSender), 1, findSender)
        accounts.splice(accounts.indexOf(findReceiver), 1, findReceiver)

        res.status(200).send()

    } catch (error) {
        res.status(errorCode).send(error.message)
    }
})

app.put("/account/:id/billing", (req: Request, res: Response) => {
    let errorCode: number 

    try {
        const desiredAccountId = req.params.id
        if (!desiredAccountId) { 
            errorCode = 400
            throw new Error ("Please inform a valid ID.")
        }

        const findAccount = accounts.find((acc) => {acc.id === desiredAccountId})
        if (!findAccount) {
            errorCode = 404
            throw new Error ("ID not found in our database.")
        }

        let {payment, date, description} = req.body
        if (!payment || !description || (date.length < 8 && date.length> 0)) {
            errorCode = 411
            throw new Error ("Please inform a payment amount and a description for your bill. If you are informing a date, make sure it fits the eight-digit requirement")
        }
    
        const verifyDateEntry = (date === true) 

        if (!verifyDateEntry) {
            date = presentDate 
        }
        
        if (Number(date) < Number(presentDate)) {
            errorCode = 403
            throw new Error ("You may only schedulhe payments for the present day or later, otherwise won't be allowed.")
        }

        if (findAccount.balance <= payment) { 
            errorCode = 401
            throw new Error ("Payment cannot be processed at the time. Please check your current balance prior to trying again.")
        }

        findAccount.balance -= payment
        
        const newPurchase: spendingsFormat = {
            amount: payment,
            date,
            description
        } 

        findAccount.spendings.push(newPurchase)

        res.status(200).send("Payment processed. " + newPurchase)
    } catch (error) {
        res.status(errorCode).send(error.message)
    }
})


app.listen(3003, () => { console.log("Port open at http://localhost:3003/") })
