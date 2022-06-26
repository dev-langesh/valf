const { isdigit } = require("../../");

describe("isdigit", () => {
  test("contain only alphabets", () => {
    expect(isdigit(5)).toBe(true);
  });

  test("contain only alphabets", () => {
    expect(isdigit("al#45")).toBe(false);
  });
});
