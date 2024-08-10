class StackArray {
  constructor() {
    this.array = []; // stack using array
  }

  // Stack works in LIFO (Last In First Out)
  // To add element push
  // To remove top element pop
  // Get the element without removing custom function
  // check empty

  isEmpty() {
    return this.array.length === 0;
  }

  push(value) {
    // push the value inside stack
    this.array.push(value);
  }

  pop(){
    // before pop, check stack is empty or not
    if(this.isEmpty()){
        return "underflow";
    }
    return this.array.pop();
  }

  pick(){
    // Get the element without removing custom function
    // before pick, check stack is empty or not
    if(this.isEmpty()){
        return "underflow";
    }
    return this.array[this.array.length - 1]; // get the last elememt
  }

  printStack(){
    let data = "";
    for(let i=0; i<this.array.length;i++){
        data += this.array[i] + ',';
    }
    return data;
  }
}

function stackOperation(){
    let stackOp = new StackArray();
    
    console.log("Is stack empty?", stackOp.isEmpty());

    console.log("Push 5 intergers in the stack");
    
    stackOp.push(1);
    stackOp.push(11);
    stackOp.push(111);
    stackOp.push(1111);
    stackOp.push(11111);

    console.log("Stack elements ", stackOp.printStack());

    console.log("Pick the top value ", stackOp.pick());

    console.log("Pop 1st value: ", stackOp.pop());
    console.log("Pop 2nd value: ", stackOp.pop());
    console.log("Pop 3rd value: ", stackOp.pop());
    console.log("Pop 4th value: ", stackOp.pop());
    console.log("Pop 5th value: ", stackOp.pop());
    console.log("Pop 6th value: ", stackOp.pop());



}

stackOperation();
