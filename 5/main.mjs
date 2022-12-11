import fs from "node:fs"
import Instruction from "./Instruction.js";
import Stack from "./Stack.js";

const data = fs.readFileSync('5/data.txt', 'utf8');

const obj = data.split('\r\n\r\n');
const stacks = obj[0];
const instructions = obj[1];

let listOfStacks = [];
fillListOfStacks();
let listOfInstructions = []; 
fillListOfInstructions();

//executeInstructionsCrateMover9000();
executeInstructionsCrateMover9001();
console.log(listOfStacks);

let result = "";
for (let i = 0; i < listOfStacks.length; i++) {
    result += listOfStacks[i].content[listOfStacks[i].content.length - 1];
}
console.log("Answer: ", result);


function fillListOfStacks() {
    // split the stack data and add all the rows to a stack array
    const stacksByLine = stacks.split('\r\n');
    let stackArray = [];
    for (let i = 0; i < stacksByLine.length; i++) {
        const row = stacksByLine[i].split('');
        stackArray.push(row);
    }
    
    
    // initialize all the stacks with the ids and indeces from the last row
    let lastRow = stackArray[stackArray.length-1];
    for (let i = 0; i < lastRow.length; i++) {
        if (lastRow[i] !== ' ') {
            let stack = new Stack(lastRow[i], lastRow.indexOf(lastRow[i]));
            listOfStacks.push(stack);
        }
    }

    // iterate over whole stacks array and fill the stacks with content
    for (let i = 0; i < stackArray.length - 1; i++) {
        for (let j = 0; j < listOfStacks.length; j++) {
            if (stackArray[i][listOfStacks[j].index] !== ' ') 
                listOfStacks[j].content.push(stackArray[i][listOfStacks[j].index]);
        }
    }

    // finally reverse all the content arrays
    for (let i = 0; i < listOfStacks.length; i++) {
        listOfStacks[i].content.reverse();
    }

    console.log(listOfStacks);
}

function fillListOfInstructions() {
    const instructionsByLine = instructions.split('\r\n');
    for (let i = 0; i < instructionsByLine.length; i++) {
        let tmp = instructionsByLine[i].split(' ');
        let instruction = new Instruction();
        instruction.amount = tmp[1];
        instruction.origin = tmp[3];
        instruction.destination = tmp[5];
        listOfInstructions.push(instruction);
    }
}

function executeInstructionsCrateMover9000() {
    for (let i = 0; i < listOfInstructions.length; i++) {
        let elementsToMove = [];
        console.log("Ins: ", listOfInstructions[i]);
        for (let j = 0; j < listOfInstructions[i].amount; j++) {
            elementsToMove.push(listOfStacks[listOfInstructions[i].origin-1].content.pop());
        }
        console.log("Before: ", listOfStacks);
        console.log("-", elementsToMove, listOfInstructions[i].origin, listOfInstructions[i].destination);
        for (let k = 0; k < elementsToMove.length; k++) {
            listOfStacks[listOfInstructions[i].destination-1].content.push(elementsToMove[k]);
        }
        console.log("After: ", listOfStacks);
        elementsToMove = [];
    }
}

function executeInstructionsCrateMover9001() {
    for (let i = 0; i < listOfInstructions.length; i++) {
        let elementsToMove = [];
        console.log("Ins: ", listOfInstructions[i]);
        for (let j = 0; j < listOfInstructions[i].amount; j++) {
            elementsToMove.push(listOfStacks[listOfInstructions[i].origin-1].content.pop());
        }
        elementsToMove.reverse();
        console.log("Before: ", listOfStacks);
        console.log("-", elementsToMove, listOfInstructions[i].origin, listOfInstructions[i].destination);
        for (let k = 0; k < elementsToMove.length; k++) {
            listOfStacks[listOfInstructions[i].destination-1].content.push(elementsToMove[k]);
        }
        console.log("After: ", listOfStacks);
        elementsToMove = [];
    }
}