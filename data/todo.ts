import dbClient from "../db.ts";

export default {
    findAll: async () => {
        const result = await dbClient.query(`select * from todos`);
        return result;
    },
    findByID: async (id: any) => {
        const result = await dbClient.query("select * from ?? where id = ?", ["todos", id]);
        return result;
    }
    // deleteByID: async (id: any) => {
    //     const result = 
    // }
};