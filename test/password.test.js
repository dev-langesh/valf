const { validatePassword } = require("..");

describe("password validation", () => {
  test("no password", () => {
    expect(validatePassword("")).toBe("Password required");
  });

  test("short length", () => {
    expect(validatePassword("h")).toMatchObject({
      requirements: [
        "Length is too short",
        "Required a uppercase character",
        "Required a digit",
        "Required a symbol",
      ],
    });
  });

  test("without uppercase", () => {
    expect(validatePassword("thisislangesh")).toMatchObject({
      requirements: [
        "Required a uppercase character",
        "Required a digit",
        "Required a symbol",
      ],
    });
  });

  test("without digit", () => {
    expect(validatePassword("Thisislangesh")).toMatchObject({
      requirements: ["Required a digit", "Required a symbol"],
    });
  });

  test("without symbol", () => {
    expect(validatePassword("Thisislangesh33")).toMatchObject({
      requirements: ["Required a symbol"],
    });
  });
});
