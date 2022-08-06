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