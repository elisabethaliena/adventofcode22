import fs from "node:fs"

const legend = {
    'A': 'Rock', 
    'B': 'Paper', 
    'C': 'Scissors', 
    'X': 'Rock', 
    'Y': 'Paper', 
    'Z': 'Scissors'
}

const scoreLegend = {
    'A': 1, 
    'B': 2, 
    'C': 3,
    'X': 1, 
    'Y': 2, 
    'Z': 3
}

const reverseLegend = {
    'A': 'Lose', 
    'B': 'Draw', 
    'C': 'Win',
    'X': 'Lose', 
    'Y': 'Draw', 
    'Z': 'Win'
}

function calculateWinner(left, right) {
    switch (legend[left] + legend[right]) {
        case "RockScissors":
        case "ScissorsPaper":
        case "PaperRock":
            return left;
        case "RockPaper": 
        case "PaperScissors":
        case "ScissorsRock": 
            return right;
        case "RockRock": 
        case "ScissorsScissors":
        case "PaperPaper": 
            return 0;
    }
}

function calculateByResult(left, right) {
    if (reverseLegend[right] === 'Draw') {
        return Number.parseInt(3 + scoreLegend[left]); 
    }
    
    const arr = ['Rock', 'Paper', 'Scissors'];
    let tmp = arr.indexOf(legend[left]);
    let move = '';
    if (reverseLegend[right] === 'Lose') {
        move = (tmp > 0 ? arr[tmp - 1] : arr[arr.length - 1]);
        return Number.parseInt(0 + scoreLegend[getKeyByValue(legend, move)]);
    }
    if (reverseLegend[right] === 'Win') {
        move = (tmp < arr.length - 1 ? arr[tmp + 1] : arr[0]);
        return Number.parseInt(6 + scoreLegend[getKeyByValue(legend, move)]);
    }
}

function calculateScore(left, right) {
    let res = calculateWinner(left, right);
    if (res === right) {
        return scoreLegend[right] + 6;
        //console.log("You win!", legend[left], legend[right]);
    } else if (res == 0) {
        return scoreLegend[right] + 3;
        //console.log("It's a draw!", legend[left], legend[right])
    } else {
        return scoreLegend[right] + 0;
        //console.log("You lose!", legend[left], legend[right]);
    }
}

function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
  }
  

const data = fs.readFileSync('2/data.txt', 'utf8');

const obj = data.split('\r\n');

let result = 0;
for (let i = 0; i < obj.length; i++) {
    result += calculateScore(obj[i][0], obj[i][2]);
}

console.log("Answer 1: ", result);

result = 0;
for (let i = 0; i < obj.length; i++) { 
    result += calculateByResult(obj[i][0], obj[i][2]);
}

console.log("Answer 2: ", result);