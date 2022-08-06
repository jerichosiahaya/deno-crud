import { Router } from "https://deno.land/x/oak/mod.ts";
import todoController from "../controllers/todo.ts";

const router = new Router();
router
    .get('/todos', todoController.getAll)
    // .post("/todos", todoController.create)
    .get("/todos/:id", todoController.getByID)
    // .put("/todos/:id", todoController.update)
    // .delete("/todos/:id", todoController.delete);

export default router;