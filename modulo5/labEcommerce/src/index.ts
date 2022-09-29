import { app } from "./app";
import { deleteProduct } from "./endpoints/deleteProduct";
import { deleteUser } from "./endpoints/deleteUser";
import { deletePurchase } from "./endpoints/deletePurchase"
import { getAllProducts } from "./endpoints/getAllProducts";
import { getAllPurchases } from "./endpoints/getAllUserPurchases";
import { getAllUsers } from "./endpoints/getAllUsers";
import { postProductRegistration } from "./endpoints/postProductRegistration";
import { postPurchaseRegistration } from "./endpoints/postPurchaseRegistration";
import { postUserRegistration } from "./endpoints/postUserRegistration";


app.get("/users", getAllUsers);
app.get("/products", getAllProducts);
app.get("/users/:userId/purchases", getAllPurchases);
app.post("/users", postUserRegistration);
app.post("/products", postProductRegistration);
app.post("/purchases", postPurchaseRegistration);
app.delete("/users/:id", deleteUser);
app.delete("/products/:id", deleteProduct);
app.delete("/purchases/:id", deletePurchase);