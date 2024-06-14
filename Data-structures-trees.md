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

- **Binary Tree:** A binary Tree

- **Binary Search Tree (BST):** An undirected graph is a type of graph in which edges do not have a direction associated with them. Undirected graphs depict symmetric relationships by indicating that the relationship between two nodes is bidirectional.

- **Heaps:** A weighted graph is a type of graph in which each edge has an associated numerical value called a weight or a cost. These weights represent quantitative measures of the relationships between pairs of nodes in the graph. Weighted graphs provide additional information about the strength, distance, or any other relevant metric of the connections between nodes.

- **B-trees:** An unweighted graph is a type of graph in which edges do not have any associated numerical value or weight. Unweighted graphs simply indicate the presence or absence of connections between pairs of nodes without considering any specific weight or cost associated with those connections.

- **Cyclic Graph:** A cyclic graph is a type of graph that contains at least one cycle, which is a closed path in the graph where the starting node and ending node are the same. In other words, a cyclic graph is a graph that has a sequence of edges that forms a loop, allowing traversal from a node back to itself by following the edges of the cycle.

- **Acyclic Graph:** An acyclic graph, also known as a DAG (Directed Acyclic Graph), is a type of graph that does not contain any cycles. In other words, it is a directed graph in which it is impossible to traverse through the graph and return to the starting node by following the direction of the edges.

An implementation of a graph with various operations is illustrated below.

```js
class Graph {
  constructor() {
    this.vertices = {};
  }
  addVertex(vertex) {
    if (!this.vertices[vertex]) {
      this.vertices[vertex] = [];
    }
  }
  addEdge(vertex1, vertex2) {
    if (!this.vertices[vertex1] || !this.vertices[vertex2]) {
      console.log("Vertex not found");
      return;
    }
    if (!this.vertices[vertex1].includes(vertex2)) {
      this.vertices[vertex1].push(vertex2);
    }
    if (!this.vertices[vertex2].includes(vertex1)) {
      this.vertices[vertex2].push(vertex1);
    }
  }

  removeVertex(vertex) {
    if (!this.vertices[vertex]) {
      console.log("Vertex not found");
      return;
    }
    for (let adjacentVertex of this.vertices[vertex]) {
      this.vertices[adjacentVertex] = this.vertices[adjacentVertex].filter(
        (v) => v !== vertex
      );
    }
    delete this.vertices[vertex];
  }

  removeEdge(vertex1, vertex2) {
    if (!this.vertices[vertex1] || !this.vertices[vertex2]) {
      console.log("Vertex not found");
      return;
    }
    this.vertices[vertex1] = this.vertices[vertex1].filter(
      (v) => v !== vertex2
    );
    this.vertices[vertex2] = this.vertices[vertex2].filter(
      (v) => v !== vertex1
    );
  }

  hasEdge(vertex1, vertex2) {
    if (!this.vertices[vertex1] || !this.vertices[vertex2]) {
      console.log("Vertex not found");
      return false;
    }
    return this.vertices[vertex1].includes(vertex2);
  }

  printGraph() {
    for (let vertex in this.vertices) {
      console.log(vertex + " -> " + this.vertices[vertex].join(", "));
    }
  }
}

// Example usage:
const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addEdge("A", "B");
graph.addEdge("B", "C");
graph.addEdge("A", "C");
graph.printGraph();
// output
// A -> B, C
// B -> A, C
// C -> B, A
console.log("Has edge between A and B:", graph.hasEdge("A", "B")); // true ;
console.log("Has edge between A and C:", graph.hasEdge("A", "C")); // true;
graph.removeVertex("B");
graph.printGraph();
// output
// A -> C
// C -> A
```

### Conclusion

In this serie, we have extensively discussed trees as a type of non-linear data structure in JavaScript. We implemented a detailed example demonstrating how to create and manipulate trees, covering various operations. This brings us to the end of our discussion on data Structure. In the next episode, we'll discussing some common algorithms.

### Resources and References

You can check out some of the resources listed below to learn more about graphs as a non-linear data structure:

- [GeeksforGeeks -Graph Data Structure And Algorithms](https://www.geeksforgeeks.org/graph-data-structure-and-algorithms/)
- [Graph Data Stucture](https://www.programiz.com/dsa/graph)
- [Graph Data Structure](https://www.tutorialspoint.com/data_structures_algorithms/graph_data_structure.htm)
