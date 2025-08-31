## Welcome to the Algorithm Series: Graph Algorithms

This is part of the Discovering Algorithms series. After unraveling the intricacies of sorting algorithms, it’s time to step into something even more exciting — **Graph Algorithms**. Think about the social networks you scroll through, the GPS app that gets you to your destination, or even the way recommendations pop up on streaming platforms — graphs are working behind the scenes to make it all happen. They’re the hidden engines powering so much of our everyday tech. In this article, we’ll break down how they work and why they’re so important.

### What Is a Graph Algorithm?
A **Graph algorithm** is set of computational technique used to solve problems related to graphs, which are data structures consisting of nodes (also called vertices) and edges (connections between nodes). In understanding graph datastrutures kindly refer to (https://dev.to/davidevlops/discovering-javascripts-hidden-secrets-understanding-graphs-as-a-non-linear-data-structure-5gap). Graph algorithms are used to help analyze and process graphs in areas like networking, social media, search engines, and more.

### Common categories of Graph Algorithms
* **Graph Traversal Algorithms**
* **Pathfinding Algorithms**
* **Minimum Spanning Tree (MST) Algorithms**

## Graph Traversal
These are the foundational exploration algorithms. Their primary purpose is to visit all the nodes and edges in a graph in a systematic, orderly fashion. Traversal is almost always the first step in understanding a graph's structure. Graph traversal are divided into two which are:
- **Breadth-First Search (BFS)**
- **Depth-First Search (DFS)**

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

## Pathfinding Algorithms
A pathfinding algorithm is a step-by-step procedure designed to find the shortest or most optimal path between two points, often referred to as the start node and the goal node. This "path" is navigated through a structured representation of the environment, typically a graph made up of nodes (or vertices) and edges (or connections). There are basic types of Pathfinding Algorithms which include: Breadth-First Search (BFS) and the Depth-First Search (DFS). othher advance types of pathfinding algorithms include Dijkstra's Algorithm.

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
console.log('Distances:', result.distances); // Distances: { A: 0, B: 3, C: 2, D: 3 }
console.log('Previous nodes:', result.previous); // Previous nodes: { A: null, B: 'C', C: 'A', D: 'C' }

// Get path to specific node
const pathToD = getShortestPath(result.previous, 'D');
console.log('Shortest path to D:', pathToD); // Shortest path to D: [ 'A', 'C', 'D' ]

## Minimum Spanning Tree Algorithm
A Minimum Spanning Tree (MST) is the subset of connections in a weighted network that achieves the absolute lowest total cost for connecting all points, while rigorously avoiding any redundant loops. It guarantees that every single point is included and reachable, yet it forms a efficient "tree" structure where there is only one unique path between any two points, ensuring no resources are wasted on unnecessary connections. An example of a Minimum Spanning Tree algorithm is Kruskal's Algorithm.
Kruskal's Algorithm is a greedy, efficient method for finding an MST by iteratively adding the smallest available edge and using the Union-Find data structure to intelligently avoid cycles, ensuring the result is both spanning and of minimum cost.

Kruskal's algorithm operates on a simple, greedy principle: "Always pick the smallest available edge, and add it to the tree if it doesn't create a cycle."

Detailed Example with Visualization

        (A)
     5/  |  \5
    (B) 3|   (C)
     2\  |  /4
        (D)

Kruskal's Algorithm has a simple rule: Sort all edges by weight and add the smallest one to the MST, but only if it doesn't create a cycle.

Step 1: Sort all edges from smallest to largest weight.

B-D : weight 2

A-D : weight 3

C-D : weight 4

A-B : weight 5

A-C : weight 5

Step 2: Initialize.

Start with an empty MST: MST = { }

Total Cost = 0

Imagine each vertex is its own separate tree: Trees: {A}, {B}, {C}, {D}

Step 3: Process the smallest edge: B-D (weight 2)

Check: Are B and D in the same tree? No ({B} vs {D}).

Action: Add this edge. It connects two previously separate trees.

MST = {B-D}

Merge the trees of B and D.

Trees: {A}, {B, D}, {C}

Total Cost = 0 + 2 = 2

Step 4: Process the next smallest edge: A-D (weight 3)

Check: Are A and D in the same tree?

A is in tree {A}

D is in tree {B, D}

Different trees.

Action: Add this edge. It connects trees {A} and {B, D}.

MST = {B-D, A-D}

Merge the trees of A and B/D.

Trees: {A, B, D}, {C}

Total Cost = 2 + 3 = 5

Step 5: Process the next smallest edge: C-D (weight 4)

Check: Are C and D in the same tree?

C is in tree {C}

D is in tree {A, B, D}

Different trees.

Action: Add this edge. It connects the last separate tree {C} to the main tree.

MST = {B-D, A-D, C-D}

Merge the trees. Now all vertices are connected.

Trees: {A, B, C, D}

Total Cost = 5 + 4 = 9

We now have |V| - 1 = 3 edges in our MST. The algorithm is complete.

Step 6: (Skipped Edges) Process the remaining edges: A-B (5) and A-C (5)

The algorithm would check A-B:

Are A and B in the same tree? Yes (both are in {A, B, C, D}).

Adding this edge would create a cycle (A-D-B-A). REJECT.

The algorithm would check A-C:

Are A and C in the same tree? Yes.

Adding this edge would create a cycle (A-D-C-A). REJECT.

4. The Final Result
The Minimum Spanning Tree consists of the edges:

B-D (weight 2)

A-D (weight 3)

C-D (weight 4)

Total Weight (Cost) of the MST: 2 + 3 + 4 = 9

class UnionFind {
    constructor(size) {
        this.parent = new Array(size);
        this.rank = new Array(size);
        
        // Initialize each element as its own parent
        for (let i = 0; i < size; i++) {
            this.parent[i] = i;
            this.rank[i] = 0;
        }
    }
    
    find(x) {
        // Path compression
        if (this.parent[x] !== x) {
            this.parent[x] = this.find(this.parent[x]);
        }
        return this.parent[x];
    }
    
    union(x, y) {
        const rootX = this.find(x);
        const rootY = this.find(y);
        
        if (rootX === rootY) return false; // Already in the same set
        
        // Union by rank
        if (this.rank[rootX] < this.rank[rootY]) {
            this.parent[rootX] = rootY;
        } else if (this.rank[rootX] > this.rank[rootY]) {
            this.parent[rootY] = rootX;
        } else {
            this.parent[rootY] = rootX;
            this.rank[rootX]++;
        }
        
        return true;
    }
}

function kruskalsAlgorithm(edges, vertexCount) {
    // Sort edges by weight in ascending order
    edges.sort((a, b) => a[2] - b[2]);
    
    const uf = new UnionFind(vertexCount);
    const mst = [];
    let totalWeight = 0;
    let edgesAdded = 0;
    
    for (const edge of edges) {
        if (edgesAdded === vertexCount - 1) break;
        
        const [u, v, weight] = edge;
        
        // Check if adding this edge creates a cycle
        if (uf.find(u) !== uf.find(v)) {
            uf.union(u, v);
            mst.push(edge);
            totalWeight += weight;
            edgesAdded++;
        }
    }
    
    return { mst, totalWeight };
}

// Example usage with the graph from our explanation:
// Graph: A=0, B=1, C=2, D=3
const edges = [
    [0, 1, 5], // A-B: weight 5
    [0, 2, 5], // A-C: weight 5
    [0, 3, 3], // A-D: weight 3
    [1, 3, 2], // B-D: weight 2
    [2, 3, 4]  // C-D: weight 4
];

const vertexCount = 4; // A, B, C, D

const result = kruskalsAlgorithm(edges, vertexCount);

console.log("Minimum Spanning Tree Edges:"); // Minimum Spanning Tree Edges:
1 - 3 : 2
0 - 3 : 3
2 - 3 : 4
result.mst.forEach(edge => {
    const [u, v, weight] = edge;
    console.log(`${u} - ${v} : ${weight}`);
});

console.log("Total Weight:", result.totalWeight); // Total Weight: 9

// For better readability with vertex names
const vertexNames = ['A', 'B', 'C', 'D'];
console.log("\nWith vertex names:");
result.mst.forEach(edge => {
    const [u, v, weight] = edge;
    console.log(`${vertexNames[u]} - ${vertexNames[v]} : ${weight}`);
}); // With vertex names:
B - D : 2
A - D : 3
C - D : 4




##  Conclusion

Graph algorithmics remains a vibrant area of research. Current challenges involve developing scalable algorithms for distributed systems and handling streaming graph data. The classical algorithms covered herein form the foundational knowledge upon which these modern advancements are built. Future work will undoubtedly continue to refine these techniques, but the core paradigms of traversal, relaxation, and union-find will persist as cornerstones of the discipline.