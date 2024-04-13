// Given a dictionary and a string. Return if the string can be space separated into words

const string = "helloworldfolks"; // "hello world folks"
const dictionary = {
    "folk": true,
    "folks": true,
    "he": true,
    "hell": true,
    "hello": true,
    "world": true
}

const spaceSeparate = (string, dict) => {
    let n = string.length;

    for (let i = 0; i < n; i++) {
        let stringPart1 = string.slice(0,i);
        let stringPart2 = string.slice(i,n);
    
        if (dict[stringPart1] != undefined) {
        if (dict[stringPart2] !== undefined) {
            return stringPart1+ ' '+stringPart2;
        } else {
            stringPart2 = spaceSeparate(stringPart2,dict);

            if (stringPart2 !== null) {

                return stringPart1+' '+stringPart2;
            }
        }
        }
    }
    return null;
}

console.log(spaceSeparate(string,dictionary));


