Welcome to the last episode on linear data structures. In the last episode, we discussed linked list as a type of data structure and also explained the two main types of linked list. Also, we implemented a typical singly and doubly linkedlist with their various operations.

In this episode, we'll be discussing stacks and queues as types of linear data structures. Let's dive in.

- **stacks:** A stack is a fundamental data structure in computer science that follows the Last In, First Out (LIFO) principle. Think of a stack as a collection of items stacked on top of each other, similar to a stack of plates in a cafeteria. The last plate placed on the stack is the first one to be removed. A picture of a stack is shown below.

An implementation of a stack data structure with it's various operations is illustrated below.

```js
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

console.log("Popped element:", stack.pop()); // Output: 30

console.log("Stack after popping:");
stack.printStack(); // Output: [10, 20]
```
