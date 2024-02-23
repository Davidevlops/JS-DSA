Welcome back, in the last episode,we dived into data structures in details we disussed some important concepts in Data structures which include: meaning of data structure, categroies of data structures, and discusssed array as an example of linear data structure.

In this episode, we would be discussing LinkedList as another type of linear data structure.

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
