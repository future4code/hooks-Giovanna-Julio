import { app } from './app'
import { ping } from './endpoints/ping'
import { createUser } from './endpoints/createUser'
import { getUsers } from './endpoints/getUsers'
import { createProduct } from './endpoints/createProduct'
import { getProducts } from './endpoints/getProducts'
import { createPurchase } from './endpoints/createPurchase'
import { getUserPurchases } from './endpoints/getUserPurchases'


app.get("/ping", ping);

app.post("/users", createUser);

app.get("/users", getUsers);

app.post("/products", createProduct);

app.get("/products", getProducts);

app.post("/purchases", createPurchase);

app.get("/users/:id/purchases", getUserPurchases);