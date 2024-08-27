import { Router } from "express";

import items from "./app/controllers/ItemControllers";

const routes = Router();

routes.get("/items", items.index);
routes.get("/items/:id", items.show);
routes.post("/items", items.create);
routes.put("/items/:id", items.update);
routes.delete("/items/:id", items.destroy);

export default routes;