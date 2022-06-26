const { validateEmail } = require("..");

describe("validate email", () => {
  test("should return true", () => {
    expect(validateEmail("langesh@gmail.com")).toBe(true);
  });

  test("should return false", () => {
    expect(validateEmail("langesh")).toBe(false);
  });
});
