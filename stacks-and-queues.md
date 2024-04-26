Welcome to the final episode of our series on linear data structures. In the previous episode, we explored linked lists as a type of data structure and discussed the two main types: singly linked lists and doubly linked lists. Additionally, we implemented typical operations for both types of linked lists.

In this episode, we'll be exploring stacks and queues, which are fundamental linear data structures used in computer science. Let's dive in.

- **Stacks:** A stack is a fundamental data structure in computer science that follows the Last In, First Out (LIFO) principle. Think of a stack as a collection of items stacked on top of each other, similar to a stack of plates in a cafeteria. The last plate placed on the stack is the first one to be removed. A picture of a stack is shown below.

![Stack Data structure](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/57oafjpiiomhev8j6cjt.png)

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

![Queue's Data structure ](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ygfbohtj4u31m1yfi5xn.png)

An implementation of a queue data structure with its various operations is illustrated below.

```js
class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    if (this.isEmpty()) {
      return "Underflow"; 
    }
    return this.items.shift();
  }

  peek() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items[0];
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

This concludes our discussion on stacks and queues, as well as our exploration of linear data structures as a whole. In the next episode, we will explore graphs as a non-linear data structure.

### Conclusion

In this episode, we have comprehensively discussed stacks and queues as a type of linear data structure in JavaScript. We implemented a detailed example demonstrating how to create and manipulate them, covering various operations. In the next episode, we'll explore graphs as a type of non-linear data structure.

### Resources and References

You can check out some of the resources listed below to learn more about stacks and queues as linear data structures:

- [GeeksforGeeks -difference between stack and queue data structures](https://www.geeksforgeeks.org/difference-between-stack-and-queue-data-structures/)
- [JavaScript Algorithms and Data Structures Masterclass by Colt Steele](https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/)
- [Implementing Stacks and Queues in Javascript](https://medium.com/@drewisatlas/implementing-stacks-and-queues-in-javascript-b3714dee112f)
- [Exploring Stacks and Queues via JavaScript](https://www.digitalocean.com/community/tutorials/js-stacks-queues)