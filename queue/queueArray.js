class QueueArray {
  constructor() {
    this.array = [];
  }

  // Queue works in FIFO (First In First Out)
  // To add element push
  // To remove first element pop
  // Get the element without removing custom function
  // check empty

  push(value) {
    // push the value inside queue
    this.array.push(value);
  }

  pop() {
    // before pop, check queue is empty or not
    if (this.isEmpty()) return "underflow";
    // remove first element
    return this.array.shift();
  }

  pick() {
    // as queue should get first out
    return this.array[0];
  }

  isEmpty() {
    return this.array.length === 0;
  }

  printQueue() {
    let data = "";
    for (let i = 0; i < this.array.length; i++) {
      data += this.array[i] + " -> ";
    }
    return data;
  }
}

function queueOperation() {
  let queueOp = new QueueArray();

  console.log("Is queue empty?", queueOp.isEmpty());

  console.log("Push 5 intergers in the queue");

  queueOp.push(1);
  queueOp.push(11);
  queueOp.push(111);
  queueOp.push(1111);
  queueOp.push(11111);

  console.log("queue elements ", queueOp.printQueue());

  console.log("Pick the top value ", queueOp.pick());

  console.log("Pop 1st value: ", queueOp.pop());
  console.log("Pop 2nd value: ", queueOp.pop());
  console.log("Pop 3rd value: ", queueOp.pop());
  console.log("Pop 4th value: ", queueOp.pop());
  console.log("Pop 5th value: ", queueOp.pop());
  console.log("Pop 6th value: ", queueOp.pop());
}

queueOperation();
