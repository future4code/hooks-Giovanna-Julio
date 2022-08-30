import express, {Request, Response} from 'express';
import cors from 'cors'
import { productList, productInfo } from './data';
import { v4 as generateId } from 'uuid'

const app = express()

app.use(express.json())
app.use(cors())

app.get("/test", (req: Request, res: Response) => {
    try {
        res.status(200).send("This API in fully functional as of now.")
    } catch (error) {
        res.send("API currently offline.")   
    }
})

app.get("/products", (req: Request, res: Response) => {
    try {
        res.status(200).send(productList)
    } catch (error) {
        res.send("Products couldn't load a this moment.")
    }
})

app.post("/products/add", (req: Request, res: Response) => {
    try {
        const name = req.body.name
        const price = Number(req.body.price)

        if (!name && !price) throw new Error ("Please insert product's name and price.")
        if (!name && price) throw new Error ("Please insert product's name.")
        if (name && !price) throw new Error ("Please insert product's price.")

        const stringVerify = "a"
        const numberVerify = 0
        if (typeof name !== typeof stringVerify) throw new Error ("Product's name must be a string of characters.")
        if (typeof price !== typeof numberVerify) throw new Error ("Product's price must be a number in dollars.")

        if(price <= 0) throw new Error ("Price must be greater than zero.")

        const verifyExistence = productList.find((product)=>{product.name.toLowerCase() === (name as string).toLowerCase()})

        if(verifyExistence) throw new Error ("This product is already on the list.")

        const newProduct: productInfo = {
            id: generateId(),
            name: name,
            price: price
        }

        productList.push(newProduct)

        const checkAdd = productList.find((product)=>{product.id === newProduct.id})
        if (!checkAdd) throw new Error ("An unexpected error has occurred. Please try again.")

        res.status(201).send("Product included.")

    } catch (error) {
        res.send(error.message)
    }
})

app.patch("/products/:id", (req: Request, res: Response) => {
    try {
        const productId = req.params.id
        if (!productId) throw new Error ("Please identidy the desired product")

        const product = productList.find((product) => {product.id === productId})
        if (!product) throw new Error ("Product cannot be found. Please try again.")

        const newPrice = Number(req.body.newPrice)
        if (!newPrice || newPrice === product.price) throw new Error ("Please inform a valid new price.")

        const changedProduct = { ...product, price: newPrice }

        productList.splice(productList.indexOf(product), 1, changedProduct)

        const checkAdd = productList.find((product)=>{product.id === productId})
        if (!checkAdd) throw new Error ("An unexpected error has occurred. Please try again.")

        res.status(200).send("Here are your changes: " + changedProduct)

    } catch (error) {
        res.send(error.message)
    }
})

app.delete("/products/:id", (req: Request, res: Response) => {
    try {
        const productId = req.params.id
        if (!productId) throw new Error ("Please select a product to delete.")

        const product = productList.find((item) => { item.id === productId})
        if (!product) throw new Error ("Product cannot be found. Please try again.")

        productList.splice(productList.indexOf(product), 1)

        const checkDel = productList.find((product)=>{product.id === productId})
        if (checkDel) throw new Error ("An unexpected error has occurred. Please try again.")

        res.status(200).send(productList)
    } catch (error) {
        res.send(error.message)
    }
})

app.listen(3003, () => { console.log("Port open at http://localhost:3003/") })