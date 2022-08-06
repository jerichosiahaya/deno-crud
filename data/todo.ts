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
    }
};