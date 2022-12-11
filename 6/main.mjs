import fs from "node:fs"

const data = fs.readFileSync('6/data.txt', 'utf8');

console.log(data);

const obj = data.split('\r\n');


let result = 0;
for (let i = 0; i < obj.length; i++) {
    result = findUniqueCharString(obj[i].toString(), 4);
}
console.log("Answer A: ", result);
result = 0;
for (let i = 0; i < obj.length; i++) {
    result = findUniqueCharString(obj[i].toString(), 14);
}
console.log("Answer B: ", result);

function findUniqueCharString(text, markerLength) {
    for (let i = 0; i < text.length; i++) {
        let result = check4CharsForUniqueness(text.slice(i, i+markerLength));
        if (result == null) {
            return i+markerLength;
        } 
    }
}

// source: https://stackoverflow.com/questions/62492941/duplicate-element-in-a-string
function check4CharsForUniqueness(chars) {
    return chars.split("").sort().join("").match(/(.)\1+/g);
}