addition = require("../calc");

describe("Calculator", () => {
    describe("Addition function", () => {
        test("Should return 42 for 20 + 22", () => {
            expect(addition(20, 22)).toBe(42);
        });
        test("Should return 73 for 41 + 32", () => {
            expect(addition(41, 32)).toBe(73);
        });
    });
    describe("Subtraction function", () => {

    });
    describe("Multiplication function", () => {

    });
    describe("Division function", () => {

    });

});