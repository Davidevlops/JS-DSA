class Graph {
  constructor() {
    this.vertices = {};
  }

  // Add a vertex to the graph
  addVertex(vertex) {
    if (!this.vertices[vertex]) {
      this.vertices[vertex] = [];
    }
  }

  // Add an undirected edge between two vertices
  addEdge(vertex1, vertex2) {
    if (!this.vertices[vertex1] || !this.vertices[vertex2]) {
      console.log("Vertex not found");
      return;
    }
    // Add vertex2 to vertex1's adjacency list
    if (!this.vertices[vertex1].includes(vertex2)) {
      this.vertices[vertex1].push(vertex2);
    }
    // Add vertex1 to vertex2's adjacency list
    if (!this.vertices[vertex2].includes(vertex1)) {
      this.vertices[vertex2].push(vertex1);
    }
  }

  // Remove a vertex and its edges from the graph
  removeVertex(vertex) {
    if (!this.vertices[vertex]) {
      console.log("Vertex not found");
      return;
    }
    // Remove vertex from all adjacency lists
    for (let adjacentVertex of this.vertices[vertex]) {
      this.vertices[adjacentVertex] = this.vertices[adjacentVertex].filter(
        (v) => v !== vertex
      );
    }
    delete this.vertices[vertex];
  }

  // Remove an undirected edge between two vertices
  removeEdge(vertex1, vertex2) {
    if (!this.vertices[vertex1] || !this.vertices[vertex2]) {
      console.log("Vertex not found");
      return;
    }
    // Remove vertex2 from vertex1's adjacency list
    this.vertices[vertex1] = this.vertices[vertex1].filter(
      (v) => v !== vertex2
    );
    // Remove vertex1 from vertex2's adjacency list
    this.vertices[vertex2] = this.vertices[vertex2].filter(
      (v) => v !== vertex1
    );
  }

  // Check if there is an edge between two vertices
  hasEdge(vertex1, vertex2) {
    if (!this.vertices[vertex1] || !this.vertices[vertex2]) {
      console.log("Vertex not found");
      return false;
    }
    return this.vertices[vertex1].includes(vertex2);
  }

  // Print the adjacency list representation of the graph
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
