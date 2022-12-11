export default class Stack {
    id = 0;
    content = [];
    index = 0;

    constructor(id, index) {
        this.id = id;
        this.index = index;
    }
}