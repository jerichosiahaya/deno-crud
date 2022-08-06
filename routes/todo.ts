import { Router } from "https://deno.land/x/oak/mod.ts";
import todoController from "../controllers/todo.ts";

const router = new Router();
router
    .get('/', (context) => {
        context.response.body = 'The server is alive! 🚀'; 
    })
    .get('/todos', todoController.getAll)
    .post("/todos", todoController.createTodo)
    .get("/todos/:id", todoController.getByID)
    .put("/todos/:id", todoController.updateByID)
    .delete("/todos/:id", todoController.deleteByID);

export default router;