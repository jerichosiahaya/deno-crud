import dbClient from "../db.ts";
import Todo from "../data/todo-dto.ts";

export default {
    findAll: async () => {
        const result = await dbClient.query(`select * from todos`);
        return result;
    },
    findByID: async (id: any) => {
        const result = await dbClient.query("select * from ?? where id = ?", ["todos", id]);
        return result;
    },
    deleteByID: async (id: any) => {
        const result = await dbClient.query("delete from todos where id =?", [id]);
        return null;
    },
    create: async (data: Todo) => {
        await dbClient.query("insert into todos(task) values (?)", [data.task]);
        return null;
    },
    updateByID: async (data:Todo) => {
        const getData = await dbClient.query("select * from todos where id",[data.id]);
        if (getData != null) {
            await dbClient.query(`update todos set task = '${data.task}', done = ${data.done} where id = ${data.id}`);
            return null
        } else {
            return "no match data had been found"
        }
    }
};