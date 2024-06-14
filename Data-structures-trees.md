Welcome back to another section on non-linear data structures. In this serie, we'll explore trees as another type of non-linear data structures. Our focus will be on understanding the fundamental concepts and operations associated with trees.

- **Trees:** A tree which as the name suggests is a top-down structure which consists ofnodes connected by edges. Trees are hierarchical structures that represents a collection of elements, where each element is connected to one or more elements in a parent-child relationship. Trees are used to model various kinds of data, including file systems, databases, and organizational structures. In understanding trees as a data structure, there are some basic terminologies you need to understand and we would be taking a look at them.

      - **Node:** Node is the basic unit of a tree, which contains data. Each node can have zero or more        child      nodes.
      - **Edge:** An Edge is a connection between two nodes, representing the parent-child relationship.
      - **Root:** A root refers to the topmost node of a tree, from which all nodes descend. There is only one    root in a tree.
      - **Parent:** Parent refers to a node that has one or more child nodes.
      - **Child:** A node that descends from another node (its parent).
      - **Leaf (or External Node):** A leaf refers to a node that does not have any children. It is the end of  a path in the tree.
      - **Internal Node:** An internal node is a node that has at least one child.
      - **Subtree:** A subtree is a portion of a tree that includes a node and all its descendants.

A picture of a graph is shown below

![Graph](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/us3hs9ej4d2i4t33ulbo.jpg)

In discussing trees, it's important to note that there are different types of trees, which include: Binary Tree, Binary Search Tree (BST), Heaps, B-trees, and Tries. Let's discuss them in detail

- **Binary Tree:** A binary node has at most two children (left and right).

- **Binary Search Tree (BST):** A binary Search Tree is a binary tree with the additional property that the left child is less than the parent node and the right child is greater.

- **Balanced Trees:** A balanced Trees is a tree that maintain a balanced structure to ensure efficient operations, like AVL trees and Red-Black trees.

- **Heaps:** Complete binary trees used to implement priority queues, with properties like the min-heap or max-heap.

- **B-trees:** Generalizations of binary search trees used in databases and filesystems, designed to work well on storage systems.

- **Tries:**Trees used to store dynamic sets of strings, useful for tasks like autocomplete and spell checking.

An implementation of a graph with various operations is illustrated below.

```js

```

### Conclusion

In this serie, we have extensively discussed trees as a type of non-linear data structure in JavaScript. We implemented a detailed example demonstrating how to create and manipulate trees, covering various operations. This brings us to the end of our discussion on data Structure. In the next episode, we'll discussing some common algorithms.

### Resources and References

You can check out some of the resources listed below to learn more about graphs as a non-linear data structure:

- [Introduction to Tree Data Structure](https://www.geeksforgeeks.org/introduction-to-tree-data-structure/)
- [Graph Data Stucture](https://www.programiz.com/dsa/graph)
- [Graph Data Structure](https://www.tutorialspoint.com/data_structures_algorithms/graph_data_structure.htm)
