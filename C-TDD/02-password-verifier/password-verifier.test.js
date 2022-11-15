let passwordVerifier = require("./password-verifier");

test("checks for valid password", () => {
  expect(passwordVerifier(null)).toEqual("Password rejected");
  expect(passwordVerifier("passW0rd")).toEqual("Password accepted");
});
