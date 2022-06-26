const validateAge = require("../lib/validateAge");

describe("test for age", () => {
  test("Invalid age", () => {
    expect(validateAge(200)).toBe(false);
  });

  test("valid age", () => {
    expect(validateAge(20)).toBe(true);
  });

  test("age with valid condition", () => {
    expect(validateAge(20, { $gt: 18 })).toBe(true);
  });

  test("age with invalid condition", () => {
    expect(validateAge(20, { $lt: 19 })).toBe(false);
  });
});
