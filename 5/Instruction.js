export default class Instruction {
    amount = 0;
    origin = 0;
    destination = 0; 

    constructor(amount, origin, destination) {
        this.amount = amount;
        this.origin = origin; 
        this.destination = destination;
    }
}