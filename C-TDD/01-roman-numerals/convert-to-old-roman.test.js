const convertToOldRoman = require("./convert-to-old-roman");

test("returns I if passed 1 as an argument", () => {
  expect(convertToOldRoman(1)).toEqual("I");
  expect(convertToOldRoman(3)).toEqual("III");
  expect(convertToOldRoman(4)).toEqual("IIII");
  expect(convertToOldRoman(7)).toEqual("VII");
  expect(convertToOldRoman(15)).toEqual("XV");
  expect(convertToOldRoman(18)).toEqual("XVIII");
  expect(convertToOldRoman(22)).toEqual("XXII");
});
