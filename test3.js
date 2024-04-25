class Stack {
    constructor() {
      this.items = [];
    }
  
    push(element) {
      this.items.push(element);
    }
  
    pop() {
      if (this.isEmpty()) {
        return "Underflow";
      }
      return this.items.pop();
    }
  
    peek() {
      if (this.isEmpty()) {
        return "Stack is empty";
      }
      return this.items[this.items.length - 1];
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  
    size() {
      return this.items.length;
    }
  
    clear() {
      this.items = [];
    }
  
    printStack() {
      console.log(this.items.toString());
    }
  }
  
  // Example usage:
  const stack = new Stack();
  
  console.log("Is stack empty?", stack.isEmpty()); // Output: true
  
  stack.push(10);
  stack.push(20);
  stack.push(30);
  
  console.log("Stack after pushing 10, 20, and 30:");
  stack.printStack(); // Output: [10, 20, 30]
  
  console.log("Peek:", stack.peek()); // Output: 30
  console.log("Stack size:", stack.size()); // Output: 3
  
  console.log("popped element:", stack.pop()); // Output: 30
  
  console.log("Stack after popping:");
  stack.printStack(); // Output: [10, 20]