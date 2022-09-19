import { app } from "./app";
import { getOrderedUsers } from "./endpoints/getOrderedUsers";
import { getUsersByName } from "./endpoints/getUsersByName";
import { getUsersByPage } from "./endpoints/getUsersByPage";
import { getUsersByType } from "./endpoints/getUsersByType";
import { getUsersMasterFilter } from "./endpoints/getUsersMasterFilter";


app.get("/users/:parameter", getOrderedUsers);

app.get("/users/names", getUsersByName);

app.get("/users/page", getUsersByPage);

app.get("/users/:type", getUsersByType);

app.get("/users/advancedsearch/:type/:parameter/", getUsersMasterFilter);
