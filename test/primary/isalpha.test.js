const { isalpha } = require("../../");

describe("isalpha", () => {
  test("contain only alphabets", () => {
    expect(isalpha("200")).toBe(false);
  });

  test("should return false", () => {
    expect(isalpha("a&89lpha")).toBe(false);
  });

  test("return true", () => {
    expect(isalpha("langesh")).toBe(true);
  });
});
