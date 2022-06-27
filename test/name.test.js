const { validateName } = require("..");

describe("validate name", () => {
  test("should return true", () => {
    expect(validateName("langesh_-")).toBe(true);
  });

  test("should return true", () => {
    expect(validateName("__langesh__")).toBe(true);
  });

  test("should return false", () => {
    expect(validateName("langesh@123")).toBe(false);
  });

  test("should return false", () => {
    expect(validateName("langesh***")).toBe(false);
  });
});
