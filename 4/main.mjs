import fs from "node:fs"

const data = fs.readFileSync('4/data.txt', 'utf8');

const obj = data.split('\r\n');

let overlapping = 0;
for (let i = 0; i < obj.length; i++) {
    const data = obj[i].split(',');
    const firstHalf = data[0];
    const secondHalf = data[1];
    console.log(firstHalf, secondHalf);

    let singleData = firstHalf.split('-');
    let oneLower = Number.parseInt(singleData[0]);
    let oneHigher = Number.parseInt(singleData[1]);

    singleData = secondHalf.split('-');
    let twoLower = Number.parseInt(singleData[0]);
    let twoHigher = Number.parseInt(singleData[1]);

    //comment lines 23 - if on line 30 for first solution
    
    if (twoHigher < oneLower && oneHigher > twoLower) {
        continue;
    }
    if (oneLower === twoHigher || twoLower === oneHigher || twoLower < oneHigher || oneHigher > twoLower) {
        console.log("overlapping: ", oneLower, "-", oneHigher, twoLower, "-", twoHigher);
        overlapping++;
    } else if (oneLower >= twoLower && oneHigher <= twoHigher) {
        // if one is inside two's range
        console.log("overlapping: ", oneLower, "-", oneHigher, twoLower, "-", twoHigher);
        overlapping++;
    } else if (twoLower >= oneLower && twoHigher <= oneHigher) {
        // if two is inside one's range
        console.log("overlapping: ", oneLower, "-", oneHigher, twoLower, "-", twoHigher);
        overlapping++;
    }
}

console.log("Antwort: " + overlapping);