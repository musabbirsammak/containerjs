const Queue = require("../src/Queue");

let q = new Queue(5);

test("Test Queue constructor", () => {
    expect(q.q).toEqual(Array(5));
});