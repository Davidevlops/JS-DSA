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
