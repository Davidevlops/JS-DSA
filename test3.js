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
    console.log("newNode", newNode);
    newNode.next = this.head;
    console.log("newNode.next", newNode.next);
    this.head = newNode;
    console.log("this.head", this.head);
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
    console.log("current", current);
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

// Example usage:
const linkedList = new LinkedList();
linkedList.insertFirst(4);
linkedList.insertFirst(3);
linkedList.insertFirst(2);
linkedList.insertFirst(1);
// linkedList.insertFirst(1);
// linkedList.insertLast(4);
// linkedList.insertLast(5);

console.log("Initial Linked List:");
linkedList.printList(); // Output: 1 -> 2 -> 3 -> 4 -> 5

// linkedList.delete(3);
// console.log("\nLinked List after deleting 3:");
// linkedList.printList(); // Output: 1 -> 2 -> 4 -> 5

// console.log("\nIs 4 present in the list?", linkedList.search(4)); // Output: true
// console.log("Is 6 present in the list?", linkedList.search(6)); // Output: false
