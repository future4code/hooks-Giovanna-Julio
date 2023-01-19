import { app } from "./app";
import { recipeRouter } from "./controller/router/RecipeRouter";
import { userRouter } from "./controller/router/UserRouter";

app.use('/', userRouter);
app.use('/recipe', recipeRouter);