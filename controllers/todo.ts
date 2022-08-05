import todos from "../data/todo.ts";
import iTodo from "../data/todo.ts"

export default {
    getAll: ({response}: {response: any}) => {
        const todo = todos.findAll;
        response.status = 200;
        response.body = todo;
    }
};