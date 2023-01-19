import { app } from "./app";
import { userRouter } from "./controller/router/UserRouter";

app.use('/user', userRouter);