import { app } from "./app";
import { friendshipRouter } from "./controller/router/FriendshipRouter";
import { postRouter } from "./controller/router/PostRouter";
import { userRouter } from "./controller/router/UserRouter";

app.use('/user', userRouter);
app.use('/feed', postRouter);
app.use('/friend', friendshipRouter);