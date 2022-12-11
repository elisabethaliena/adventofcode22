import fs from "node:fs"

const data = fs.readFileSync('3/data.txt', 'utf8');

const obj = data.split('\r\n');

let commonArray = [];
for (let i = 0; i < obj.length; i++) {
    let lineStart = obj[i].slice(0, obj[i].length/2);
    let lineEnd = obj[i].slice(obj[i].length/2);

    let result = findCommonCharInOneLine(lineStart, lineEnd);
    commonArray.push(result);
}

let result = 0;
for (let k = 0; k < commonArray.length; k++) {
    result += getCharValue(commonArray[k]);
}

console.log("Answer 1: ", result);

commonArray = [];
for (let i = 0; i < obj.length; i+=3) {
    let lineFirst = obj[i];
    let lineSecond = obj[i+1];
    let lineThird = obj[i+2];

    let result = findCommonCharInThreeLines(lineFirst, lineSecond, lineThird);
    commonArray.push(result);
}

 
result = 0;
for (let k = 0; k < commonArray.length; k++) {
    result += getCharValue(commonArray[k]);
}
console.log("Answer 2: ", result);

function getCharValue(a) {
    let result = 0;
    a == a.toLowerCase() ? result = a.charCodeAt(0) - 96 : result = a.charCodeAt(0) - 38;
    return result;
} 

function findCommonCharInOneLine(firstHalf, secondHalf) {
    let commonChar = '';
    for (let j = 0; j < firstHalf.length; j++) {
        const index = secondHalf.indexOf(firstHalf[j]);
        if (index !== -1) {
            commonChar = firstHalf[j];
        }
    }
    return commonChar;
}

function findCommonCharInThreeLines(firstLine, secondLine, thirdLine) {
    let commonChar = '';
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < firstLine.length; j++) {
            let index = secondLine.indexOf(firstLine[j]);
            if (index !== -1 && thirdLine.indexOf(firstLine[j]) !== -1) {
                commonChar = firstLine[j];
            }
        }
    }
    return commonChar;
}