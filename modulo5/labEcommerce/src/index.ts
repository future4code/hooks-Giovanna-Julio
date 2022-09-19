import { app } from "./app";
import { getAllProducts } from "./endpoints/getAllProducts";
import { getAllPurchases } from "./endpoints/getAllUserPurchases";
import { getAllUsers } from "./endpoints/getAllUsers";
import { postProductRegistration } from "./endpoints/postProductRegistration";
import { postPurchaseRegistration } from "./endpoints/postPurchaseRegistration";
import { postUserRegistration } from "./endpoints/postUserRegistration";


app.get("/users", getAllUsers);
app.post("/users", postUserRegistration);
app.get("/products", getAllProducts);
app.post("/products", postProductRegistration);
app.get("/users/:userId/purchases", getAllPurchases);
app.post("/purchases", postPurchaseRegistration);