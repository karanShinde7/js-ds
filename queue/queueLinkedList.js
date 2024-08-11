class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class QueueLinkedList {
    
    constructor(value){
        const newNode = new Node(value);
        this.firstEle = newNode;
        this.lastEle = newNode;
        this.length = 1;
    }

    push(value){
        const newNodeEle = new Node(value);
        if(this.length === 0) {
            // if 0 then both pointer at same position
            this.firstEle = newNodeEle;
            this.lastEle = newNodeEle;
        } else {
            // if more than 1, new node should be after the last
            this.lastEle.next = newNodeEle;
            this.lastEle = newNodeEle;
        }
        this.length++;
        return this;
    }

    pop(){
        if(this.length ===0) return undefined;
        const temp = this.firstEle;
        if(this.length === 1){
            // if only one then remove both pointers
            this.firstEle = null;
            this.lastEle = null;
        } else {
            // remove current first and second will become first
            this.firstEle = this.firstEle.next;
            temp.next = null;
        }
        this.length--;
        return temp;
    }

    pick(){
        return this.firstEle;
    }

    isEmpty(){
        return this.length === 0;    
    }
}

const queueOp = new QueueLinkedList("Zero");
queueOp.push("One");
queueOp.push("Two");
queueOp.push("Three");

console.log("Queue", queueOp)

console.log("First element ",queueOp.pick());

queueOp.pop();
queueOp.pop();
queueOp.pop();

console.log("Is Queue empty?", queueOp.isEmpty());
