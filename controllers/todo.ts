import todos from "../data/todo.ts";
// import iTodo from "../data/todo.ts"
import Todo from "../data/todo-dto.ts";

export default {
    getAll: async ({response}: {response: any}) => {
        const todo = await todos.findAll();
        console.log(todo);
        response.status = 200;
        response.body = todo;
    },
    getByID: async ({response, params}: {response: any, params: {id: string}}) => {
        const todoByID = await todos.findByID(params.id);
        console.log(todoByID);
        response.status = 200;
        response.body = todoByID;
    },
    deleteByID: async ({ response, params }: { response: any, params: { id: string } }) => {
        const todoByID = await todos.deleteByID(params.id);
        console.log(todoByID);
        response.status = 200;
    },
    createTodo: async ({ request, response }: { request: any; response: any }) => {
        const body = await request.body({ type: 'json' });
        const requestBody = await body.value;
        console.log(requestBody.task);
        let newTodo: Todo = {
            task: requestBody.task
        };
        console.log(newTodo);
        await todos.create(newTodo);
        response.status = 200;
    }
};