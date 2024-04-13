// Given a dictionary and a string. Return if the string can be space separated into words

const dictionary = new Set(["folk", "folks", "he", "hell", "low", "hello", "world"]);


const spaceSeparate = (string, dict) => {
  let n = string.length;

  for (let i = 0; i < n; i++) {
    let stringPart1 = string.slice(0, i);
    let stringPart2 = string.slice(i, n);

    if (dict.has(stringPart1)) {
      if (dict.has(stringPart2)) {
        return stringPart1 + " " + stringPart2;
      } else {
        stringPart2 = spaceSeparate(stringPart2, dict);

        if (stringPart2 !== null) {
          return stringPart1 + " " + stringPart2;
        }
      }
    }
  }
  return null;
};

console.log(spaceSeparate("helloworldfolks", dictionary)); // "hello world folks"

