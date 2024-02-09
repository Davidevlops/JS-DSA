# Discovering JavaScript's Hidden Secrets: Understanding Data Structures

One of the key attributes of a proficient Software Engineer or Data Engineer is the adeptness in selecting appropriate data structures to suit the nature of the data being handled. Unfortunately, this skill isn't universally prioritized among engineers who often prioritize solving the problem at hand over considering the most efficient data structure.

A comprehensive understanding of data structures enables engineers to address problems with optimal efficiency. It's imperative to recall our initial lesson on Big O notation, which underscores the importance of algorithmic efficiency in terms of both time and space complexity. Here, 'space' refers directly to the judicious choice of data structures employed to tackle the given problem.

In this episode, we'll dive into Data structures in details, a crucial concept for understanding algorithmic efficiency and performance.

### Prerequisites

To gain a comprehensive grasp of data structures in JavaScript, a solid foundation in JavaScript fundamentals is paramount. This encompasses mastery of basic syntax, variables, data types, control flow structures, functions, and scope.

### What is Data Structure ?

A data structure is a way of organizing and storing data in a computer that allows for the efficient organization, management, and manipulation of data. so that it can be accessed and modified efficiently. They provide a way to store and retrieve data in a manner that optimizes various operations such as insertion, deletion, searching, and sorting. Understanding data structures is essential for efficient programming and problem-solving in computer science.

#### Data structures can be categorized mainly into three types which are:

- Primitive Data Structures
- Linear Data structures
- Non-linear Data Structures

- **Primitive Data Structures:**Primitive data structures, also known as basic data structures, are fundamental building blocks used to represent and store data in computer memory. They are simple, predefined data types provided by programming languages to store raw data values. These data structures are directly supported by the hardware and are usually implemented directly within the language's syntax. Examples of primitive data structures are integers, floating-point numbers, characters, and boolean values. As in the case of javascript which includes null, undefined, Bigint, Symbol, infinity e.t.c.

- **Linear Data Structures:** Linear data structures are a type of data structure in which data elements are organized sequentially, with each element connected to its previous and next element. The elements are arranged in a linear order, meaning that each element has exactly one predecessor and one successor, except for the first and last elements Examples include arrays, linked lists, stacks, and queues. We would be explaining in detals the linear data structures examples using showing a pictural diagram and discussing several operations that can be carried out on each of them. let's dive in.

- **Non-linear Data Structures:** Non-linear data structures are data structures in which elements are not organized sequentially or in a linear order. Unlike linear data structures, where each element has a single predecessor and successor, non-linear data structures allow for more complex relationships between elements, such as branching or hierarchical structures. These structures are essential for representing relationships between data in a variety of applications, including hierarchical data, graphs, trees, and more.

In the couple of lessons ahead, we would be discussing extensively on linear Data Structures and In this lesson we would focusing only on Arrays

- **Arrays:** An array is one of the fundamental data structures in computer science, commonly used for storing collections of elements, such as numbers or strings, that are accessed by indices. It provides a way to store multiple elements of the same data type in a contiguous block of memory, with each element occupying a fixed-size memory space. A picture of Array is shown below.
  ![Array](https://media.geeksforgeeks.org/wp-content/cdn-uploads/20200922124319/Singly-Linked-List1.png "Arrays")

  There are various operations that can be performed on an array, this operations includes: Access, Insertion, Deletion, Traversal, Search.
  Access: Elements in an array are accessed using their indices. Accessing an element at a specific index typically has a time complexity of O(1), as it involves a simple calculation to determine the memory address of the desired element.

  Insertion/Deletion: Insertion and deletion operations in arrays can be costly, especially if they require shifting elements to accommodate the change. In the worst-case scenario, these operations have a time complexity of O(n), where n is the number of elements in the array.
  The operation that can be performed on an array include: Insertion, deletion, and access. The implementaion is shown below.

  Traversal: Arrays can be traversed sequentially to perform operations on each element. This is commonly done using loops, such as for loops, iterating over each index of the array.

  Search: Searching for an element in an array typically involves iterating through each element sequentially until the desired element is found. In the worst-case scenario, this operation has a time complexity of O(n), where n is the number of elements in the array.

  Types of Arrays:
  One-dimensional Arrays: These are the simplest form of arrays where elements are arranged in a single row or column.

  Multi-dimensional Arrays: Arrays can have multiple dimensions, forming a matrix-like structure. Common examples include two-dimensional arrays (rows and columns) and three-dimensional arrays (rows, columns, and depth).

  ````js

       class Array {
       constructor() {
       this.length = 0;
       this.data = {};
       }
       // Get element at index
       get(index) {
       return this.data[index];
       }

  // Push element to end of array
  push(item) {
  this.data[this.length] = item;
  this.length++;
  return this.length;
  }

  // Pop element from end of array
  pop() {
  const lastItem = this.data[this.length - 1];
  delete this.data[this.length - 1];
  this.length--;
  return lastItem;
  }

  // Delete element at index
  delete(index) {
  const deletedItem = this.data[index];
  this.shiftItems(index);
  return deletedItem;
  }

  // Helper function to shift items to the left after deletion
  shiftItems(index) {
  for (let i = index; i < this.length - 1; i++) {
  this.data[i] = this.data[i + 1];
  }
  delete this.data[this.length - 1];
  this.length--;
  }
  }

  // Example usage:
  const Array = new Array();
  Array.push(1);
  Array.push(2);
  Array.push(3);
  Array.pop();
  console.log(Array);
  // Output: Array { length: 2, data: { '0': 1, '1': 2 } }

       ```

  ````

- **linked lists:** A linked list is a collection of nodes, where each node contains a data element and a reference (or pointer) to the next node in the sequence. Unlike arrays, linked lists do not require contiguous memory allocation, allowing for dynamic memory allocation and efficient insertion and deletion operations. Linked lists can be singly linked, doubly linked, depending on the number of references each node contains.

  - **singly linked lists:** A singly linked list is a fundamental data structure used in computer science and programming. It is a collection of nodes where each node contains two parts: data and a reference (or pointer) to the next node in the sequence. In a singly linked list, each node points only to the next node in the sequence, and the last node points to null, indicating the end of the list.

          ```js

    class Node {
    constructor(data) {
    this.data = data;
    this.next = null;
    }
    }

    class LinkedList {
    constructor() {
    this.head = null;
    }

          // Insertion at the beginning
          insertFirst(data) {
            const newNode = new Node(data);
            newNode.next = this.head;
            this.head = newNode;
          }

          // Insertion at the end
          insertLast(data) {
            const newNode = new Node(data);
            if (!this.head) {
              this.head = newNode;
              return;
            }
            let current = this.head;
            while (current.next) {
              current = current.next;
            }
            current.next = newNode;
          }

          // Deletion by value
          delete(value) {
            if (!this.head) return;

            if (this.head.data === value) {
              this.head = this.head.next;
              return;
            }

            let current = this.head;
            while (current.next) {
              if (current.next.data === value) {
                current.next = current.next.next;
                return;
              }
              current = current.next;
            }
          }

          // Search
          search(value) {
            let current = this.head;
            while (current) {
              if (current.data === value) {
                return true;
              }
              current = current.next;
            }
            return false;
          }

          // Traversal
          printList() {
            let current = this.head;
            while (current) {
              console.log(current.data);
              current = current.next;
            }
          }

    }

    // Example usage:
    const linkedList = new LinkedList();
    linkedList.insertFirst(3);
    linkedList.insertFirst(2);
    linkedList.insertFirst(1);
    linkedList.insertLast(4);
    linkedList.insertLast(5);

    console.log("Initial Linked List:");
    linkedList.printList(); // Output: 1 -> 2 -> 3 -> 4 -> 5

    linkedList.delete(3);
    console.log("\nLinked List after deleting 3:");
    linkedList.printList(); // Output: 1 -> 2 -> 4 -> 5

    console.log("\nIs 4 present in the list?", linkedList.search(4)); // Output: true
    console.log("Is 6 present in the list?", linkedList.search(6)); // Output: false

          ```

  - **doubly linked lists:** A doubly linked list is a data structure similar to a singly linked list, with the addition of each node containing a reference to both the next node and the previous node in the sequence. In a doubly linked list, each node has three fields: data, a pointer to the next node (often called next), and a pointer to the previous node (often called prev). This bidirectional linkage allows traversal in both forward and backward directions.

    ```js
    class Node {
      constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
      }
    }

    class DoublyLinkedList {
      constructor() {
        this.head = null;
        this.tail = null;
      }

      // Insertion at the beginning
      insertFirst(data) {
        const newNode = new Node(data);
        if (!this.head) {
          this.head = newNode;
          this.tail = newNode;
        } else {
          newNode.next = this.head;
          this.head.prev = newNode;
          this.head = newNode;
        }
      }

      // Insertion at the end
      insertLast(data) {
        const newNode = new Node(data);
        if (!this.head) {
          this.head = newNode;
          this.tail = newNode;
        } else {
          this.tail.next = newNode;
          newNode.prev = this.tail;
          this.tail = newNode;
        }
      }

      // Deletion by value
      delete(value) {
        if (!this.head) return;

        let current = this.head;
        while (current) {
          if (current.data === value) {
            if (current === this.head && current === this.tail) {
              this.head = null;
              this.tail = null;
            } else if (current === this.head) {
              this.head = current.next;
              this.head.prev = null;
            } else if (current === this.tail) {
              this.tail = current.prev;
              this.tail.next = null;
            } else {
              current.prev.next = current.next;
              current.next.prev = current.prev;
            }
            return;
          }
          current = current.next;
        }
      }

      // Search
      search(value) {
        let current = this.head;
        while (current) {
          if (current.data === value) {
            return true;
          }
          current = current.next;
        }
        return false;
      }

      // Traversal forward
      printListForward() {
        let current = this.head;
        while (current) {
          console.log(current.data);
          current = current.next;
        }
      }

      // Traversal backward
      printListBackward() {
        let current = this.tail;
        while (current) {
          console.log(current.data);
          current = current.prev;
        }
      }
    }

    // Example usage:
    const doublyLinkedList = new DoublyLinkedList();
    doublyLinkedList.insertFirst(3);
    doublyLinkedList.insertFirst(2);
    doublyLinkedList.insertFirst(1);
    doublyLinkedList.insertLast(4);
    doublyLinkedList.insertLast(5);

    console.log("Forward Traversal:");
    doublyLinkedList.printListForward(); // Output: 1 -> 2 -> 3 -> 4 -> 5

    console.log("\nBackward Traversal:");
    doublyLinkedList.printListBackward(); // Output: 5 -> 4 -> 3 -> 2 -> 1

    doublyLinkedList.delete(3);
    console.log("\nList after deleting 3:");
    doublyLinkedList.printListForward(); // Output: 1 -> 2 -> 4 -> 5
    ```

    That's all for linkedList

- **stacks:** A stack is a fundamental data structure in computer science that follows the Last In, First Out (LIFO) principle. This means that the last element added to the stack will be the first one to be removed. Think of a stack as a collection of elements stacked one on top of the other, where you can only access or manipulate the topmost element.

      ```js
      class Stack {
        constructor() {
          this.items = [];
        }

        // Push operation: Adds an element to the top of the stack
        push(element) {
          this.items.push(element);
        }

        // Pop operation: Removes and returns the topmost element from the stack
        pop() {
          if (this.isEmpty()) {
            return "Underflow"; // Stack is empty
          }
          return this.items.pop();
        }

        // Peek operation: Returns the topmost element from the stack without removing it
        peek() {
          if (this.isEmpty()) {
            return "Stack is empty";
          }
          return this.items[this.items.length - 1];
        }

        // isEmpty operation: Checks if the stack is empty
        isEmpty() {
          return this.items.length === 0;
        }

        // Size operation: Returns the number of elements in the stack
        size() {
          return this.items.length;
        }

        // Clear operation: Removes all elements from the stack
        clear() {
          this.items = [];
        }

        // Print operation: Prints the elements of the stack
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

- **queues:** A queue is a fundamental data structure in computer science that follows the First In, First Out (FIFO) principle. This means that the first element added to the queue will be the first one to be removed. Think of a queue as a line of people waiting for a service, where the person who arrived first will be served first.

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
