import todos from "../data/todo.ts";
// import iTodo from "../data/todo.ts"

export default {
    getAll: async ({response}: {response: any}) => {
        const todo = await todos.findAll();
        console.log(todo);
        response.status = 200;
        response.body = todo;
    },
    getByID: async ({response, params}: {response: any, params: {id: number}}) => {
        const todoByID = await todos.findByID(params.id);
        console.log(todoByID);
        response.status = 200;
        response.body = todoByID;
    }
};