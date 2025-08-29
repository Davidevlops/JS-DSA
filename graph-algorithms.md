## Welcome to the Algorithm Series: Graph Algorithms

After unraveling the intricacies of sorting algorithms, we would be diving into one of the most powerful and fundamental topics in computer science: Graph Algorithms.

From the social networks we scroll through to the GPS navigation we rely on, graph algorithms are the invisible engines powering the technology that defines our modern world. Let's explore how they work.

### What Is a Graph Algorithm?
Graph algorithms are a set of computational techniques used to solve problems related to graphs, which are data structures consisting of nodes (also called vertices) and edges (connections between nodes). I understanding graph datastrutures kindly refer to (). Graph algorithms are used to help analyze and process graphs in areas like networking, social media, search engines, and more.

### Common categories of Graph Algorithms
- Graph Traversal Algorithms
- Pathfinding Algorithms
- Connectivity & Optimization Algorithms

Graph Traversal: These are the foundational exploration algorithms. Their primary purpose is to visit all the nodes and edges in a graph in a systematic, orderly fashion. Traversal is almost always the first step in understanding a graph's structure. Graph traversal are divided into two which are:
- Breadth-First Search (BFS)
- Depth-First Search (DFS)

Breadth-First Search (BFS): Breadth-First Search (BFS) is a fundamental algorithm used for traversing or searching through tree or graph data structures. It starts at a selected node (called the source or root) and explores all of its neighbor nodes at the present depth level before moving on to nodes at the next depth level.

Visual Example (Tree Traversal)
        A
       / \
      B   C
     / \   \
    D   E   F

Step-by-step:

Start: Queue = [A]

Dequeue A, process it. Enqueue its neighbors B and C.
Queue = [B, C]

Dequeue B, process it. Enqueue its neighbors D and E.
Queue = [C, D, E]

Dequeue C, process it. Enqueue its neighbor F.
Queue = [D, E, F]

Dequeue D, process it. It has no unvisited neighbors.
Queue = [E, F]

Dequeue E, process it. It has no unvisited neighbors.
Queue = [F]

Dequeue F, process it. Algorithm ends.

JavaScript Implementation:
function breadthFirstSearch(graph, startNode) {
  const queue = [startNode]; // Initialize the queue
  const visited = new Set();
  visited.add(startNode);

  while (queue.length > 0) {
    // Dequeue from the front
    const currentNode = queue.shift();
    console.log(`Visiting node: ${currentNode}`); // Process the node

    // Enqueue all unvisited neighbors
    for (const neighbor of graph[currentNode]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor); // Add to the back
      }
    }
  }
}

// Example graph represented as an Adjacency List
const graph = {
  'A': ['B', 'C'],
  'B': ['A', 'D', 'E'],
  'C': ['A', 'F'],
  'D': ['B'],
  'E': ['B', 'F'],
  'F': ['C', 'E']
};

// Traverse starting from node 'A'
breadthFirstSearch(graph, 'A');
// Output: Visiting node: A, B, C, D, E, F

Depth-First Search (DFS) is a fundamental algorithm for traversing or searching tree or graph data structures. The algorithm starts at a selected node (called the source or root) and explores as far as possible along each branch before backtracking.

Visual Example (Tree Traversal)
        A
       / \
      B   C
     / \   \
    D   E   F

Step-by-step (Recursive Call Stack):

Start at A (visited).

Go to first neighbor of A: B.

At B (visited), go to its first neighbor: D.

At D (visited). No unvisited neighbors. Backtrack to B.

At B, go to its next unvisited neighbor: E.

At E (visited). No unvisited neighbors. Backtrack to B. B has no more neighbors. Backtrack to A.

At A, go to its next unvisited neighbor: C.

At C (visited), go to its first neighbor: F.

At F (visited). No unvisited neighbors. Backtrack to C, then to A. Algorithm ends.

function depthFirstSearch(graph, currentNode, visited = new Set()) {
  // Mark the current node as visited and process it
  visited.add(currentNode);
  console.log(`Visiting node: ${currentNode}`);

  // Recur for all adjacent vertices
  for (const neighbor of graph[currentNode]) {
    if (!visited.has(neighbor)) {
      depthFirstSearch(graph, neighbor, visited);
    }
  }
}

// Use the same graph as before
depthFirstSearch(graph, 'A');
// Possible Output: Visiting node: A, B, D, E, F, C
// (The order can vary based on the structure of the graph and insertion order)



