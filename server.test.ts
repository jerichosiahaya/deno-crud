import { assertEquals } from "https://deno.land/std@0.151.0/testing/asserts.ts";

let baseUrl = "http://localhost:8080/"

Deno.test("get all data", async () => {
    const response = await fetch(baseUrl + "todos");
    await response.body?.cancel();
    assertEquals(response.status, 200);
});

Deno.test("get data by id", async () => {
    const response = await fetch(baseUrl + "todos/1");
    await response.body?.cancel();
    assertEquals(response.status, 200);
});

Deno.test("delete data by id", async () => {
    const req = new Request(baseUrl + "todos/1", {
        method: "DELETE",
    });
    var response = await fetch(req);
    await response.body?.cancel();
    assertEquals(response.status, 200);
});

Deno.test("insert data", async () => {
    const body = `{"task": "unit-test-insert"}`;
    const req = new Request(baseUrl + "todos", {
        method: "POST",
        body
    });
    var response = await fetch(req, );
    await response.body?.cancel();
    assertEquals(response.status, 200);
});

Deno.test("update data by id", async () => {
    const body = `{"task": "update data via unit test", "done": 1}`;
    const req = new Request(baseUrl + "todos/3", {
        method: "PUT",
        body
    });
    var response = await fetch(req,);
    await response.body?.cancel();
    assertEquals(response.status, 200);
});