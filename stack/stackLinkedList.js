class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class StackLinkedList {
  constructor(value) {
    this.array = [];
    const newNode = new Node(value);
    // every new element should be at the top
    this.topEle = newNode;
    this.length = 1;
    this.array.push(newNode);
  }

  push(value) {
    // create new node for each push
    const newNodeEle = new Node(value);
    // check if it is empty
    if (this.length === 0) {
      this.topEle = newNodeEle;
    } else {
      // if not empty push in next node
      newNodeEle.next = newNodeEle;
      this.topEle = newNodeEle;
    }
    this.array.push(newNodeEle);
    this.length++;
  }

  pop() {
    // if length is 0 then means stack is empty
    if (this.length === 0) return undefined;
    // store top in temp
    const temp = this.topEle;
    // second top is new top
    this.topEle = this.topEle.next;
    // separate temp
    temp.next = null;
    this.length--;
    this.array.pop();
    return temp;
  }

  peek() {
    // get top element
    return this.topEle;
  }

  isEmpty() {
    return this.length === 0;
  }

  printStack() {
    for (let i = 0; i < this.length; i++) {
      console.log("| " + this.array[i] + " |->");
    }
  }
}

const stackOp = new StackLinkedList("Zero");
stackOp.push("One");
stackOp.push("Second");
stackOp.push("Third");
console.log("printStack", stackOp.printStack());
console.log("Top Value: ", stackOp.peek());
console.log("Is Stack Empty: ", stackOp.isEmpty());
console.log("Get Top value using pop: ", stackOp.pop());
