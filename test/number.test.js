const validateNumber = require("../lib/valNumber");

describe("Testing numbers", () => {
  test("valid Indian number", () => {
    expect(validateNumber("IN", 9677728298)).toBe(true);
  });

  test("Invalid Indian number", () => {
    expect(validateNumber("IN", 867772829)).toBe(false);
  });
});
