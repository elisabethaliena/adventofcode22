import fs from "node:fs"

const data = fs.readFileSync('1/data.txt', 'utf8');

const obj = data.split('\r\n\r\n');

let allCalories = [];
for (let i = 0; i < obj.length; i++) {
    let calories = 0;
    const singleLoad = obj[i].split("\r\n");
    for (let j = 0; j < singleLoad.length; j++) {
        calories += Number.parseInt(singleLoad[j], 10);
    }
    allCalories.push(calories);
}

allCalories.sort((a, b) => b - a);

let topThreeCalories = 0;
for (let k = 0; k < 3; k++) {
    topThreeCalories += allCalories[k];
}

console.log(topThreeCalories);