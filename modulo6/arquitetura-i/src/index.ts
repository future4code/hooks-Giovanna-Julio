import { app } from "./app";
import { UserController } from "./controller/UserController";

const userController = new UserController();


app.get('/all', userController.getAllUsers);
app.post('/users', userController.insertUser);
app.delete('/:id', userController.deleteUser);
