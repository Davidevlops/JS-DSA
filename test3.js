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