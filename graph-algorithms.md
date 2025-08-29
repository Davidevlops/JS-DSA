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


Pathfinding Algorithms: A pathfinding algorithm is a step-by-step procedure designed to find the shortest or most optimal path between two points, often referred to as the start node and the goal node. This "path" is navigated through a structured representation of the environment, typically a graph made up of nodes (or vertices) and edges (or connections). There are basic types of Pathfinding Algorithms which include: Breadth-First Search (BFS) and the Depth-First Search (DFS). othher advance types of pathfinding algorithms include Dijkstra's Algorithm.

Dijkstra's Algorithm finds the shortest path from a single starting point (the source node) to all other nodes in a graph. It works on graphs where:

Edges have weights (e.g., distance, time, cost).

All edge weights are non-negative. This is its most critical constraint.

A Detailed Walkthrough with an Example
         4
    (A) ------> (B)
     |           |
     | 2         | 5
     |           |
    \/          \/
    (C) ------> (D)
         1

Explanation:

We start at A (distance 0). We look at its neighbors: B (weight 4) and C (weight 2). We update their distances and previous pointers. We are done with A.

The next smallest node in the PQ is C (distance 2). We look at its neighbors: D (weight 1). The potential new distance to D is distance[C] + 1 = 2 + 1 = 3. This is better than infinity, so we update D.

The next smallest node is D (distance 3). Its neighbor is B. The potential new distance to B is 3 + 5 = 8. This is worse than B's current distance of 4, so we ignore it. This is the key—the algorithm never overwrites a good path with a worse one.

Finally, we process B. It has no unvisited neighbors. The algorithm finishes.

To get the actual path to D, we follow the previous pointers backwards: D <- C <- A. So the path is A -> C -> D.

// MinHeap implementation for priority queue
class MinHeap {
    constructor() {
        this.heap = [];
    }

    push(node, priority) {
        this.heap.push({ node, priority });
        this.bubbleUp(this.heap.length - 1);
    }

    pop() {
        const min = this.heap[0];
        const last = this.heap.pop();
        
        if (this.heap.length > 0) {
            this.heap[0] = last;
            this.sinkDown(0);
        }
        
        return min;
    }

    isEmpty() {
        return this.heap.length === 0;
    }

    updatePriority(node, newPriority) {
        const index = this.heap.findIndex(item => item.node === node);
        if (index === -1) return;

        const oldPriority = this.heap[index].priority;
        this.heap[index].priority = newPriority;

        if (newPriority < oldPriority) {
            this.bubbleUp(index);
        } else {
            this.sinkDown(index);
        }
    }

    bubbleUp(index) {
        const element = this.heap[index];
        
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            const parent = this.heap[parentIndex];
            
            if (element.priority >= parent.priority) break;
            
            this.heap[parentIndex] = element;
            this.heap[index] = parent;
            index = parentIndex;
        }
    }

    sinkDown(index) {
        const length = this.heap.length;
        const element = this.heap[index];

        while (true) {
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let swap = null;
            let leftChild, rightChild;

            if (leftChildIndex < length) {
                leftChild = this.heap[leftChildIndex];
                if (leftChild.priority < element.priority) {
                    swap = leftChildIndex;
                }
            }

            if (rightChildIndex < length) {
                rightChild = this.heap[rightChildIndex];
                if ((swap === null && rightChild.priority < element.priority) ||
                    (swap !== null && rightChild.priority < leftChild.priority)) {
                    swap = rightChildIndex;
                }
            }

            if (swap === null) break;

            this.heap[index] = this.heap[swap];
            this.heap[swap] = element;
            index = swap;
        }
    }
}

// Dijkstra's Algorithm implementation
function dijkstra(graph, source) {
    // Initialize distances and previous nodes
    const dist = {};
    const prev = {};
    const Q = new MinHeap();

    // Initialize all distances to Infinity and add to priority queue
    for (const vertex in graph) {
        dist[vertex] = Infinity;
        prev[vertex] = null;
        Q.push(vertex, Infinity);
    }

    // Set source distance to 0 and update its priority
    dist[source] = 0;
    Q.updatePriority(source, 0);

    while (!Q.isEmpty()) {
        // Extract node with minimum distance
        const { node: u, priority: currentDist } = Q.pop();
        
        // If we've already found a better path through other nodes, skip
        if (currentDist > dist[u]) {
            continue;
        }

        // Process each neighbor
        for (const neighbor in graph[u]) {
            const weight = graph[u][neighbor];
            const alt = dist[u] + weight;

            // If found a shorter path to the neighbor
            if (alt < dist[neighbor]) {
                dist[neighbor] = alt;
                prev[neighbor] = u;
                Q.updatePriority(neighbor, alt);
            }
        }
    }

    return { distances: dist, previous: prev };
}

// Helper function to reconstruct the shortest path
function getShortestPath(prev, target) {
    const path = [];
    let current = target;
    
    while (current !== null) {
        path.unshift(current);
        current = prev[current];
    }
    
    return path;
}

// Example usage:
const graph = {
    'A': { 'B': 4, 'C': 2 },
    'B': { 'D': 5 },
    'C': { 'D': 1, 'B': 1 },
    'D': {}
};

const result = dijkstra(graph, 'A');
console.log('Distances:', result.distances);
console.log('Previous nodes:', result.previous);

// Get path to specific node
const pathToD = getShortestPath(result.previous, 'D');
console.log('Shortest path to D:', pathToD);