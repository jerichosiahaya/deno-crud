import dbClient from "../db.ts";

export default {
    findAll: async () => {
        const result = await dbClient.query(`select * from todos`);
        return result;
    },
};