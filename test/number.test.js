const { validateMobileNumber } = require("..");

describe("Testing numbers", () => {
  test("valid Indian number", () => {
    expect(validateMobileNumber("IN", 9686728298)).toBe(true);
  });
  test("valid Indian number", () => {
    expect(validateMobileNumber("IN", 9686728298)).toBe(true);
  });

  test("valid Indian number", () => {
    expect(validateMobileNumber("IN", "09883443344")).toBe(true);
  });

  test("valid Indian number", () => {
    expect(validateMobileNumber("IN", "+919883443344")).toBe(true);
  });

  test("valid Indian number", () => {
    expect(validateMobileNumber("IN", "0091-9883443344")).toBe(true);
  });

  test("valid Indian number", () => {
    expect(validateMobileNumber("IN", "+91 -9883443344")).toBe(true);
  });

  test("valid Indian number", () => {
    expect(validateMobileNumber("IN", "+91- 9883443344")).toBe(true);
  });

  test("valid Indian number", () => {
    expect(validateMobileNumber("IN", "0091 - 9883443344")).toBe(true);
  });

  test("Invalid Indian number", () => {
    expect(validateMobileNumber("IN", 867772829)).toBe(false);
  });
});
