const { validateMobileNumber } = require("..");

describe("Testing numbers", () => {
  test("valid Indian number", () => {
    expect(validateMobileNumber("IN", 9677728298)).toBe(true);
  });

  test("Invalid Indian number", () => {
    expect(validateMobileNumber("IN", 867772829)).toBe(false);
  });
});
