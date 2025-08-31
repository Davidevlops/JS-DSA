## Welcome to the Algorithm Series: Graph Algorithms

This is part of the Discovering Algorithms series. After unraveling the intricacies of sorting algorithms, it’s time to step into something even more exciting — **Graph Algorithms**. Think about the social networks you scroll through, the GPS app that gets you to your destination, or even the way recommendations pop up on streaming platforms — graphs are working behind the scenes to make it all happen. They’re the hidden engines powering so much of our everyday tech. In this article, we’ll break down how they work and why they’re so important.

# Understanding Graphs and Graph Algorithms
Before diving into **graph algorithms**, it’s important to first understand what a **graph** is as a data structure.
## What is a Graph?  
A **graph** is a data structure made up of:  
- **Nodes (or vertices):** the objects or points in the graph.  
- **Edges (or connections):** the links that connect one node to another.  

You can imagine a graph like a **map of a city**:  
- The **intersections** are the nodes.  
- The **roads** are the edges that connect those intersections.

For a more detailed explanation of graph data structures, you can check out this article:  
[Understanding Graphs as a Non-Linear Data Structure](https://dev.to/davidevlops/discovering-javascripts-hidden-secrets-understanding-graphs-as-a-non-linear-data-structure-5gap)  


## What is a Graph Algorithm?  

A **graph algorithm** is a method or set of steps used to solve problems involving **graphs**.  Graph algorithms play a vital role in analyzing and processing graphs across various domains, including: Networking, Social Media, Search Engines, Recommendation Systems, Route Optimization. Graph algorithms help us work with these connections and answer questions such as:  
- *What’s the fastest route from one point to another?*  
- *Which connections are the most important?*  
- *How do we find groups or clusters inside a network?*  
  


### Common categories of Graph Algorithms
* **Graph Traversal Algorithms**
* **Pathfinding Algorithms**
* **Minimum Spanning Tree (MST) Algorithms**

# Graph Traversal  

**Graph traversal** refers to the process of systematically visiting all the nodes and edges in a graph.  
It is often the first step in understanding a graph’s structure and is divided into two main techniques:  

- **Breadth-First Search (BFS)**  
- **Depth-First Search (DFS)**  

---

## Breadth-First Search (BFS)  

**Breadth-First Search (BFS)** Breadth-First Search  is a fundamental algorithm used for traversing or searching through tree or graph data structures. It starts at a selected node (called the source or root) and explores all of its neighbor nodes at the present depth level before moving on to nodes at the next depth level. 

### A Visual Example Breadth-First Search

    A
   / \
  B   C
 / \   \
D   E   F

Traversal Order: **A → B → C → D → E → F**

### JavaScript Implementation  

```javascript
function breadthFirstSearch(graph, startNode) {
  const queue = [startNode];       // Queue to manage nodes
  const visited = new Set([startNode]);

  while (queue.length > 0) {
    const current = queue.shift();
    console.log(`Visiting node: ${current}`);

    for (const neighbor of graph[current]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }
}

// Example graph (Adjacency List)
const graph = {
  'A': ['B', 'C'],
  'B': ['A', 'D', 'E'],
  'C': ['A', 'F'],
  'D': ['B'],
  'E': ['B', 'F'],
  'F': ['C', 'E']
};

breadthFirstSearch(graph, 'A');
// Output: A, B, C, D, E, F
```

**Depth-First Search (DFS):** Depth-First Search is a fundamental algorithm for traversing or searching tree or graph data structures. The algorithm starts at a selected node (called the source or root) and explores as far as possible along each branch before backtracking.

### A Visual Example of  Depth-First Search

        A
       / \
      B   C
     / \   \
    D   E   F

Possible Traversal Order: A → B → D → E → C → F

### JavaScript Implementation 

```javascript
function depthFirstSearch(graph, node, visited = new Set()) {
  visited.add(node);
  console.log(`Visiting node: ${node}`);

  for (const neighbor of graph[node]) {
    if (!visited.has(neighbor)) {
      depthFirstSearch(graph, neighbor, visited);
    }
  }
}

// Reuse the same graph
depthFirstSearch(graph, 'A');
// Possible Output: A, B, D, E, F, C

```

## Pathfinding Algorithms
A pathfinding algorithm is a step-by-step procedure designed to find the shortest or most optimal path between two points in a graph. Breadth-First Search (BFS) and the Depth-First Search (DFS)  are basic types of Pathfinding Algorithms. Other advance types of pathfinding algorithms include Dijkstra's Algorithm, Bellman-Ford, Floyd-Warshall. For the purpose of this article we eould be treating Dijkstra's Algorithm.

**Dijkstra's Algorithm:** Dijkstra's Algorithm finds the shortest path from a single starting point to all other nodes in a graph. It works on graphs where:

### Key Features  
- Works on **weighted graphs** (edges have weights like distance, time, or cost).  
- Requires **non-negative edge weights**.  
- Guarantees the shortest path.

### A Visual Image of  Dijkstra's Algorith
         4
    (A) ------> (B)
     |           |
     | 2         | 5
     |           |
    \/          \/
    (C) ------> (D)
         1
Shortest path from **A to D**: `A → C → D` with total cost **3**. 
---

## JavaScript Implementation  

### MinHeap (Priority Queue)  
Used to efficiently fetch the node with the smallest distance.  

```javascript
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
    if (newPriority < oldPriority) this.bubbleUp(index);
    else this.sinkDown(index);
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
      let left = 2 * index + 1;
      let right = 2 * index + 2;
      let swap = null;
      if (left < length && this.heap[left].priority < element.priority) {
        swap = left;
      }
      if (
        right < length &&
        ((swap === null && this.heap[right].priority < element.priority) ||
          (swap !== null && this.heap[right].priority < this.heap[left].priority))
      ) {
        swap = right;
      }
      if (swap === null) break;
      this.heap[index] = this.heap[swap];
      this.heap[swap] = element;
      index = swap;
    }
  }
}

function dijkstra(graph, source) {
  const dist = {};
  const prev = {};
  const Q = new MinHeap();

  // Initialize distances
  for (const vertex in graph) {
    dist[vertex] = Infinity;
    prev[vertex] = null;
    Q.push(vertex, Infinity);
  }

  // Start node distance = 0
  dist[source] = 0;
  Q.updatePriority(source, 0);

  while (!Q.isEmpty()) {
    const { node: u, priority: currentDist } = Q.pop();
    if (currentDist > dist[u]) continue;

    for (const neighbor in graph[u]) {
      const weight = graph[u][neighbor];
      const alt = dist[u] + weight;
      if (alt < dist[neighbor]) {
        dist[neighbor] = alt;
        prev[neighbor] = u;
        Q.updatePriority(neighbor, alt);
      }
    }
  }

  return { distances: dist, previous: prev };
}

function getShortestPath(prev, target) {
  const path = [];
  let current = target;
  while (current !== null) {
    path.unshift(current);
    current = prev[current];
  }
  return path;
}

// Example usage
const graph = {
  'A': { 'B': 4, 'C': 2 },
  'B': { 'D': 5 },
  'C': { 'D': 1, 'B': 1 },
  'D': {}
};

const result = dijkstra(graph, 'A');
console.log('Distances:', result.distances);
console.log('Previous nodes:', result.previous);

const pathToD = getShortestPath(result.previous, 'D');
console.log('Shortest path to D:', pathToD); // [ 'A', 'C', 'D' ]
```

## Minimum Spanning Tree Algorithm
A Minimum Spanning Tree (MST) is the subset of connections in a weighted network that achieves the absolute lowest total cost for connecting all points, while rigorously avoiding any redundant loops. It guarantees that every single point is included and reachable, yet it forms a efficient "tree" structure where there is only one unique path between any two points, ensuring no resources are wasted on unnecessary connections. An example of a Minimum Spanning Tree algorithm is Kruskal's Algorithm.

**Kruskal's algorithm:** Kruskal's Algorithm is a greedy, efficient method for finding an MST by iteratively adding the smallest available edge and using the Union-Find data structure to intelligently avoid cycles, ensuring the result is both spanning and of minimum cost.



Detailed Example with Visualization

        (A)
     5/  |  \5
    (B) 3|   (C)
     2\  |  /4
        (D)


### Steps (Simplified)  
1. Sort edges by weight: **BD(2), AD(3), CD(4), AB(5), AC(5)**.  
2. Pick edges in order, skipping ones that form cycles.  
3. Final MST:  
   - **B–D (2)**  
   - **A–D (3)**  
   - **C–D (4)**  

✅ Total Cost = **9**  

---

## JavaScript Implementation  

### Union-Find (Disjoint Set)  

```javascript
class UnionFind {
  constructor(size) {
    this.parent = Array.from({ length: size }, (_, i) => i);
    this.rank = new Array(size).fill(0);
  }

  find(x) {
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(this.parent[x]); // Path compression
    }
    return this.parent[x];
  }

  union(x, y) {
    const rootX = this.find(x);
    const rootY = this.find(y);
    if (rootX === rootY) return false;

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

```



##  Conclusion

Graph algorithmics remains a vibrant area of research. Current challenges involve developing scalable algorithms for distributed systems and handling streaming graph data. The classical algorithms covered herein form the foundational knowledge upon which these modern advancements are built. Future work will undoubtedly continue to refine these techniques, but the core paradigms of traversal, relaxation, and union-find will persist as cornerstones of the discipline.