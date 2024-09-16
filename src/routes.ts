import { Router } from "express";

import items from "./app/controllers/ItemControllers";

import emails from "./app/controllers/EmailControllers"

const routes = Router();

routes.get("/items", items.index);
routes.get("/items/:id", items.show);
routes.post("/items", items.create);
routes.put("/items/:id", items.update);
routes.delete("/items/:id", items.destroy);


routes.get("/emails", emails.index);
routes.post("/emails", emails.create);

export default routes;