let calculator = require("./calculator");

test("checks for valid password", () => {
  expect(calculator("")).toEqual(0);
  expect(calculator("0,5")).toEqual(5);
  expect(calculator("3,6")).toEqual(9);
});
