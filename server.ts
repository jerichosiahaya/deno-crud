import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import todoRouter from "./routes/todo.ts"; // added the router call

const app = new Application();
const port: number = 8080;

app.use(todoRouter.routes()); // Intitialize the router with our application. 
app.use(todoRouter.allowedMethods());

app.addEventListener("listen", ({ secure, hostname, port }) => {
    const protocol = secure ? "https://" : "http://";
    const url = `${protocol}${hostname ?? "localhost"}:${port}`;
    console.log(`Listening on: ${port}`);
});

await app.listen({ port });
export default app;
