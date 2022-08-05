import todos from "../data/todo.ts";

export default {
    getAll: ({response}: {response: any}) => {
        response.status = 200;
        response.body = todos.findAll();
    }
};