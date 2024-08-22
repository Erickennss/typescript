"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("./main");
test("the data is peanut butter", () => {
    expect(1).toBe(1);
});
test("greeting", () => {
    expect((0, main_1.greet)("Foo")).toBe("Hello Foo");
});
