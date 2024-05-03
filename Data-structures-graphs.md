# Discovering JavaScript's Hidden Secrets: Understanding Graphs as a Non Linear Data Structure.

Welcome to another section on data structures, this time, we would be focusing on non-linear data structures. In the previous section, we delved into stacks and queues, which are examples of linear data structures. Now, we'll explore non-linear structures, which exhibit more complex relationships between their elements. Let's begin by understanding the fundamental concepts and operations associated with non-linear data structures

In this episode, we'll delve into graphs, a fundamental non-linear data structure widely used in computer science. Graphs offer a versatile way to represent relationships between objects or entities. Let's dive in and explore the concepts, properties, and operations associated with graphs.

- **Graphs:** A graph, as a type of non-linear data structure, consists of a collection of nodes and edges that connect pairs of nodes. Graphs are a fundamental concept in computer science and are utilized to represent various relationships between objects. As we delve into the topic of graphs, it's essential to grasp some key concepts, namely: Nodes and Edges.

      - **Nodes:** Nodes, also known as vertices, are fundamental building blocks of a graph. Each node represents an entity or an object in the graph. For example, in a social network graph, nodes could represent individuals, while in a transportation network, nodes could represent cities or junctions

      - **Edges:** Edges, also known as links, are fundamental components of a graph data structure. They represent the relationships or connections between pairs of nodes. In essence, an edge defines how nodes are related to each other within the graph.

A picture of a graph is shown below

![Graph](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/us3hs9ej4d2i4t33ulbo.jpg)

In discussing graphs, it's important to note that there are different types of graphs which include:

- Directed Graph
- Undirected Graph
- Weighted Graph
- Unweighted Graph
- Cyclic Graph
- Acyclic Graph

- **Directed Graph:** A directed graph, also known as a digraph, is a type of graph in which edges have a direction associated with them. Unlike undirected graphs, where edges represent symmetric relationships between nodes, directed graphs depict asymmetric relationships by indicating a specific direction of connection between nodes.

- **Undirected Graph:** An undirected graph is a type of graph in which edges do not have a direction associated with them. Undirected graphs depict symmetric relationships by indicating that the relationship between two nodes is bidirectional.

- **Weighted Graph:** A weighted graph is a type of graph in which each edge has an associated numerical value called a weight or a cost. These weights represent quantitative measures of the relationships between pairs of nodes in the graph. Unlike unweighted graphs, where edges have no associated numerical values, weighted graphs provide additional information about the strength, distance, or any other relevant metric of the connections between nodes.

- **Unweighted Graph:** An unweighted graph is a type of graph in which edges do not have any associated numerical value or weight. Unlike weighted graphs, where edges have numerical values representing costs, distances, or other quantitative measures, unweighted graphs simply indicate the presence or absence of connections between pairs of nodes without considering any specific weight or cost associated with those connections.

- **Cyclic Graph:** A cyclic graph is a type of graph that contains at least one cycle, which is a closed path in the graph where the starting node and ending node are the same. In other words, a cyclic graph is a graph that has a sequence of edges that forms a loop, allowing traversal from a node back to itself by following the edges of the cycle.

- **Acyclic Graph:** An acyclic graph, also known as a DAG (Directed Acyclic Graph), is a type of graph that does not contain any cycles. In other words, it is a directed graph in which it is impossible to traverse through the graph and return to the starting node by following the direction of the edges.

An implementation of a graph with it operations is illustrated below.

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
console.log("Has edge between A and B:", graph.hasEdge("A", "B"));
console.log("Has edge between A and C:", graph.hasEdge("A", "C"));
graph.removeVertex("B");
graph.printGraph();
```

### Conclusion

In this episode, we have comprehensively discussed graphs as a type of non linear data structure in JavaScript. We implemented a detailed example demonstrating how to create and manipulate graphs, covering various operations. In the next episode, we'll explore tress as a type of non-linear data structure.

### Resources and References

You can check out some of the resources listed below to learn more about stacks and queues as linear data structures:

- [GeeksforGeeks -Graph Data Structure And Algorithms](https://www.geeksforgeeks.org/graph-data-structure-and-algorithms/)
- [Graph Data Stucture](https://www.programiz.com/dsa/graph)
- [Graph Data Structure](https://www.tutorialspoint.com/data_structures_algorithms/graph_data_structure.htm)
