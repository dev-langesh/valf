const { isalnum } = require("../../");

describe("isalnum", () => {
  test("return false", () => {
    expect(isalnum("&*(@")).toBe(false);
  });

  test("contain only alphabets", () => {
    expect(isalnum("al45")).toBe(true);
  });
});
