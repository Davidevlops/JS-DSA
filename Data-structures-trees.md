Welcome back to another section on non-linear data structures. In this series, we'll explore trees as a type of non-linear data structure. Our focus will be on understanding the fundamental concepts and operations associated with trees.

- **Trees:** A tree, as the name suggests, is a top-down structure consisting of nodes connected by edges. Trees are hierarchical structures that represent a collection of elements, where each element is connected to one or more elements in a parent-child relationship. Trees are used to model various kinds of data, including file systems, databases, and organizational structures. To understand trees as a data structure, there are some basic terminologies you need to know, which we will be exploring.

          Terminologies Used In Tree Data Structure
      - **Node:** Node is the basic unit of a tree, which contains data. Each node can have zero or more child nodes.
      - **Edge:** An Edge is a connection between two nodes, representing the parent-child relationship.
      - **Root:** A root refers to the topmost node of a tree, from which all nodes descend. There is only one root in a tree.
      - **Parent:** Parent refers to a node that has one or more child nodes.
      - **Child:** A node that descends from another node (its parent).
      - **Leaf (or External Node):** A leaf refers to a node that does not have any children. It is the end of a path in the tree.
      - **Internal Node:** An internal node is a node that has at least one child.
      - **Subtree:** A subtree is a portion of a tree that includes a node and all its descendants.

A picture of a tree is shown below

![Tree ](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/us3hs9ej4d2i4t33ulbo.jpg)

When discussing trees, it's important to note that there are different types of trees, including Binary Trees, Binary Search Trees (BSTs), Heaps, B-trees, and Tries. Let's discuss them in detail.

- **Binary Tree:** A binary node has at most two children (left and right).

- **Binary Search Tree (BST):** A binary Search Tree is a binary tree with the additional property that the left child is less than the parent node and the right child is greater.

- **Balanced Trees:** A balanced Trees is a tree that maintain a balanced structure to ensure efficient operations, like AVL trees and Red-Black trees.

- **Heaps:** These are complete binary trees used to implement priority queues, with properties like the min-heap or max-heap.

- **B-trees:** B-trees are generalizations of binary search trees used in databases and filesystems, designed to work well on storage systems.

- **Tries:** Tries trees used to store dynamic sets of strings, useful for tasks like autocomplete and spell checking.

An implementation of a tree structure with various operations is illustrated below.

```js
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  // Insertion in a Binary Search Tree (BST)
  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  // In-order Traversal
  inOrderTraversal(node = this.root) {
    if (node !== null) {
      this.inOrderTraversal(node.left);
      console.log(node.value);
      this.inOrderTraversal(node.right);
    }
  }

  // Pre-order Traversal
  preOrderTraversal(node = this.root) {
    if (node !== null) {
      console.log(node.value);
      this.preOrderTraversal(node.left);
      this.preOrderTraversal(node.right);
    }
  }

  // Post-order Traversal
  postOrderTraversal(node = this.root) {
    if (node !== null) {
      this.postOrderTraversal(node.left);
      this.postOrderTraversal(node.right);
      console.log(node.value);
    }
  }

  // Level-order Traversal
  levelOrderTraversal() {
    const queue = [];
    if (this.root !== null) {
      queue.push(this.root);
    }
    while (queue.length > 0) {
      let node = queue.shift();
      console.log(node.value);
      if (node.left !== null) {
        queue.push(node.left);
      }
      if (node.right !== null) {
        queue.push(node.right);
      }
    }
  }

  // Search in a Binary Search Tree (BST)
  search(value) {
    return this.searchNode(this.root, value);
  }

  searchNode(node, value) {
    if (node === null) {
      return false;
    }
    if (value < node.value) {
      return this.searchNode(node.left, value);
    } else if (value > node.value) {
      return this.searchNode(node.right, value);
    } else {
      return true;
    }
  }
}

// Example Usage
const tree = new BinaryTree();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(3);
tree.insert(7);
tree.insert(13);
tree.insert(17);

console.log("In-order Traversal:");
tree.inOrderTraversal(); // 3, 5, 7, 10, 13, 15, 17

console.log("Pre-order Traversal:");
tree.preOrderTraversal(); // 10, 5, 3, 7, 15, 13, 17

console.log("Post-order Traversal:");
tree.postOrderTraversal(); // 3, 7, 5, 13, 17, 15, 10

console.log("Level-order Traversal:");
tree.levelOrderTraversal(); // 10, 5, 15, 3, 7, 13, 17

console.log("Search for 7:");
console.log(tree.search(7)); // true

console.log("Search for 8:");
console.log(tree.search(8)); // false
```

### Conclusion

In this serie, we have extensively discussed trees as a type of non-linear data structure in JavaScript. We implemented a detailed example demonstrating how to create and manipulate trees, covering various operations. This brings us to the end of our discussion on data Structure. In the next episode, we'll discussing some common algorithms.

### Resources and References

You can check out some of the resources listed below to learn more about graphs as a non-linear data structure:

- [Introduction to Tree Data Structure](https://www.geeksforgeeks.org/introduction-to-tree-data-structure/)
- [Tree Data Structure](https://www.tutorialspoint.com/data_structures_algorithms/tree_data_structure.htm)
- [Tree Data Structure](https://www.programiz.com/dsa/trees)
- [Tree (data structure)](<https://en.wikipedia.org/wiki/Tree_(data_structure)>)
