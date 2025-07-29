function isNumber(str) {
  return /^\d+$/.test(str);
}

function isAlphabet(str) {
  return /^[a-zA-Z]+$/.test(str);
}

function alternatingCaps(str) {
  return str
    .split("")
    .map((ch, idx) => (idx % 2 === 0 ? ch.toUpperCase() : ch.toLowerCase()))
    .join("");
}

function processData(data) {
  let odd_numbers = [];
  let even_numbers = [];
  let alphabets = [];
  let special_characters = [];
  let sum = 0;

  data.forEach(item => {
    if (isNumber(item)) {
      const num = parseInt(item);
      sum += num;
      num % 2 === 0 ? even_numbers.push(item) : odd_numbers.push(item);
    } 
    else if (isAlphabet(item)) {
      alphabets.push(item.toUpperCase());
    } 
    else {
      special_characters.push(item);
    }
  });

  const concatStrRaw = alphabets.join("");
  const reversed = concatStrRaw.split("").reverse().join("");
  const concat_string = alternatingCaps(reversed);

  return {
    odd_numbers,
    even_numbers,
    alphabets,
    special_characters,
    sum: sum.toString(),
    concat_string
  };
}

module.exports = { processData };
