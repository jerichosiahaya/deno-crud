import { Client } from "https://deno.land/x/mysql/mod.ts";
import "https://deno.land/x/dotenv/load.ts";

const client = await new Client().connect({
    hostname: Deno.env.get("DATABASE_HOST"),
    username: Deno.env.get("DATABASE_USER"),
    password: "",
    db: Deno.env.get("DATABASE_NAME"),
});
// await client.execute("USE personal");
// var data = await client.execute("select * from todos");
// console.log(data);
export default client;