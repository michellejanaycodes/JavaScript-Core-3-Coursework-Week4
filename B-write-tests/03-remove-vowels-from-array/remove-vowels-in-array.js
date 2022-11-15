const removeVowels = require("./remove-vowels");

const removeVowelsFromWords = (words) => words.map(word => removeVowels(word));

module.exports = removeVowelsFromWords;

/*
    input: ["Irina", "Etza", "Daniel"]
    expected output: ["rn", "tz", "Dnl"]
*/
