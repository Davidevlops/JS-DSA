# Discovering JavaScript's Hidden Secrets: Understanding Stacks and Queues as types of linear Data Structure.

Welcome to the final episode of our series on linear data structures. In the previous episode, we explored linked lists as a type of data structure and discussed the two main types: singly linked lists and doubly linked lists. Additionally, we implemented typical operations for both types of linked lists.

In this episode, we'll be exploring stacks and queues, which are fundamental linear data structures used in computer science. Let's dive in.

- **stacks:** A stack is a fundamental data structure in computer science that follows the Last In, First Out (LIFO) principle. Think of a stack as a collection of items stacked on top of each other, similar to a stack of plates in a cafeteria. The last plate placed on the stack is the first one to be removed. A picture of a stack is shown below.

An implementation of a stack data structure with its various operations is illustrated below.

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

console.log("popped element:", stack.pop()); // Output: 30

console.log("Stack after popping:");
stack.printStack(); // Output: [10, 20]
```

- **Queues:** Queues are another fundamental data structure that follows the First In, First Out (FIFO) principle. Unlike stacks, where the last element added is the first to be removed, queues operate on the principle that the first element added is the first to be removed, similar to a line or queue of people waiting for service. A picture of a queue is shown below.

An implementation of a queue data structure with its various operations is illustrated below.

```js
class Queue {
  constructor() {
    this.items = [];
  }

  // Enqueue operation: Adds an element to the back (end) of the queue
  enqueue(element) {
    this.items.push(element);
  }

  // Dequeue operation: Removes and returns the front (first) element from the queue
  dequeue() {
    if (this.isEmpty()) {
      return "Underflow"; // Queue is empty
    }
    return this.items.shift();
  }

  // Peek operation: Returns the front element from the queue without removing it
  peek() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items[0];
  }

  // isEmpty operation: Checks if the queue is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Size operation: Returns the number of elements in the queue
  size() {
    return this.items.length;
  }

  // Clear operation: Removes all elements from the queue
  clear() {
    this.items = [];
  }

  // Print operation: Prints the elements of the queue
  printQueue() {
    console.log(this.items.toString());
  }
}

// Example usage:
const queue = new Queue();

console.log("Is queue empty?", queue.isEmpty()); // Output: true

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log("Queue after enqueuing 10, 20, and 30:");
queue.printQueue(); // Output: [10, 20, 30]

console.log("Peek:", queue.peek()); // Output: 10
console.log("Queue size:", queue.size()); // Output: 3

console.log("Dequeued element:", queue.dequeue()); // Output: 10

console.log("Queue after dequeuing:");
queue.printQueue(); // Output: [20, 30]
```

This concludes our discussion on stacks and queues, as well as our exploration of linear data structures as a whole. In the next episode, we will delve into graphs as a non-linear data structure

### Conclusion

In this episode, we have comprehensively discussed stacks and queues as a type of linear data structure in JavaScript. We implemented a detailed example demonstrating how to create and manipulate them, covering various operations. In the next episode, we'll explore graphs as a type of non-linear data structure.

### Resources and References

You can check out some of the resources listed below to learn more about linked list as a linear data structure:

- [GeeksforGeeks - Linked List](https://www.geeksforgeeks.org/difference-between-stack-and-queue-data-structures/)
- [JavaScript Algorithms and Data Structures Masterclass by Colt Steele](https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/)
