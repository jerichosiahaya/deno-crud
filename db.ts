import { Client } from "https://deno.land/x/mysql/mod.ts";

const client = await new Client().connect({
    hostname: "127.0.0.1",
    username: "root",
    password: ""
    // database: "todos"
});
await client.execute("USE personal");
export default client;