Welcome back! In the last episode, we started data structures in detail. We discussed some fundamental concepts, including the definition of a data structure, the categories of data structures, and specifically explored arrays as a type of linear data structure.

In this episode, we'll be discussing Linked List as another type of linear data structure.

- **Linked List:** A linked list is a collection of nodes, with each node containing a data element and a reference (or pointer) to the next node in the sequence. Unlike arrays, linkedlists do not require contiguous memory allocation. This characteristic enables dynamic memory allocation and facilitates efficient insertion and deletion operations. Linked lists can be categorized into two major types: singly linked lists and doubly linked lists.

  - **Singly linked List:** A singly linked list is a fundamental data structure widely used in computer science and programming. It consists of nodes, where each node has two components: data and a reference (or pointer) to the next node in the sequence. In a singly linked list, each node points only to the next node in the sequence, with the last node pointing to null, indicating the end of the list. Various operations can be performed on a singly linked list, similar to those on an array. These operations include access, insertion/deletion, traversal, and search. A picture of a singly linked list is shown below.

  ![singly linked list](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/l4wessv6l6j8m9csnrm8.png)

  An implementation of a singly linked list with it's various operations is illustrated below.

  ```js
  class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }

  class SinglyLinkedList {
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
  const singlyLinkedList = new SinglyLinkedList();
  singlyLinkedList.insertFirst(3);
  singlyLinkedList.insertFirst(2);
  singlyLinkedList.insertFirst(1);
  singlyLinkedList.insertLast(4);
  singlyLinkedList.insertLast(5);

  singlyLinkedList.printList(); // Output: 1 -> 2 -> 3 -> 4 -> 5

  singlyLinkedList.delete(3);
  console.log("\nLinked List after deleting 3:");
  singlyLinkedList.printList(); // Output: 1 -> 2 -> 4 -> 5

  console.log("\nIs 4 present in the list?", singlyLinkedList.search(4)); // Output: true
  console.log("Is 6 present in the list?", singlyLinkedList.search(6)); // Output: false
  ```

  - **Doubly linked lists:** A doubly linked list is a data structure similar to a singly linked list, but with the addition of each node containing references to both the next node and the previous node in the sequence. In a doubly linked list, each node has three fields: data, a pointer to the next node (often called 'next'), and a pointer to the previous node (often called 'prev'). This bidirectional linkage allows traversal in both forward and backward directions. Various operations can be performed on a doubly linked list, similar to those on an array. These operations include access, insertion/deletion, traversal, and search.

  A picture of a doubly linked list is shown below.

  ![doubly linked list](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/6bn1f08wb786i7410n3k.png)

  An implementation of a doubly linked list with it's various operations is illustrated below.

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

This brings us to the end of this episode. In the next episode, we will explore Stacks and Queues as a data structure.

### Conclusion

In this episode, we have successfully discussed linked list as a type of linear data structure in JavaScript. We explored its main types and implemented a comprehensive example demonstrating how to create and manipulate a linked list, covering various operations. In the next episode, we'll continue our exploration by discussing stacks and queues, which are also linear data structures.

### Resources and References

You can check out some of the resources listed below to learn more about Data structures.

- [geeksforgeeks](https://www.geeksforgeeks.org/data-structures/linked-list/)
- [js algorithms and data structures masterclass by Colt Steele](https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/)
