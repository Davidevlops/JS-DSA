## Welcome to the Algorithm Series: String Matching Algorithms

When we think about algorithms, sorting, searching and graphs often take the spotlight. But beyond these fundamental operations lies a powerful family of algorithms that quietly power everything from search engines to plagiarism detectors — String Matching Algorithms.

Whether you’re searching for a keyword in a document, validating user input, or building your own text editor, string matching lies at the heart of it. These algorithms make searching through text efficient and intelligent — far beyond the basic indexOf() or includes() methods in javascript.

In this article, you’ll learn how string matching works, understand key algorithms like Naïve Search, Knuth–Morris–Pratt (KMP), Rabin–Karp, and Boyer–Moore, and implement them using JavaScript.

### Understanding String Matching

Before diving into the  algorithms, let’s first understand what string matching means.

String Matching Algorithms also known as Pattern Matching Algorithms is the process of finding one or more occurrences of a pattern (substring) inside a text (main string).

Example

Text: "the quick brown fox jumps over the lazy dog"

Pattern: "brown"

Output: The pattern starts at index 10

**Why String Matching Matters**

String matching is used everywhere:

- Search engines to find keywords in web pages

- Chat filters to detect banned words

- Bioinformatics to find gene sequences

- Compilers to tokenize source code

- AI/ML preprocessing to clean and analyze text


### Common categories of Graph Algorithms

* **Naïve String Matching Algorithm**
* **Knuth–Morris–Pratt (KMP) Algorithm**
* **Rabin–Karp Algorithm (Hash-Based Search)**
* **Boyer–Moore Algorithm**

**Naïve String Matching Algorithm** The Naïve approach checks the pattern at every position in the text.
It’s simple but can be slow for long texts 


### JavaScript Implementation

```javascript
function naiveSearch(text, pattern) {
  const n = text.length;
  const m = pattern.length;
  const positions = [];

  for (let i = 0; i <= n - m; i++) {
    let j = 0;
    while (j < m && text[i + j] === pattern[j]) j++;
    if (j === m) positions.push(i);
  }

  return positions;
}

console.log(naiveSearch("AABAACAADAABAABA", "AABA"));
// Output: [0, 9, 12]
```

**Knuth–Morris–Pratt (KMP) Algorithm** The KMP algorithm improves efficiency by avoiding unnecessary re-checks using a prefix table (also called an LPS — Longest Prefix Suffix array).

It precomputes the longest proper prefix of the pattern which is also a suffix, allowing the search to skip redundant comparisons.

### A Visual Example of Depth-First Search Algorithm

```
        A
       / \
      B   C
     / \   \
    D   E   F
```

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

**Pathfinding Algorithms:** A pathfinding algorithm is a step-by-step procedure designed to find the shortest or most optimal path between two points in a graph. Breadth-First Search (BFS) and the Depth-First Search (DFS)  are basic types of Pathfinding Algorithms. Other advanced types of pathfinding algorithms include Dijkstra's Algorithm, Bellman-Ford, and Floyd-Warshall. For the purpose of this article, we will be treating Dijkstra's Algorithm.

**Dijkstra's Algorithm:** Dijkstra's Algorithm finds the shortest path from a single starting point to all other nodes in a graph. It works on graphs where:

### Key Features of Dijkstra's Algorithm

- Works on **weighted graphs** (edges have weights like distance, time, or cost).  
- Requires **non-negative edge weights**.  
- Guarantees the shortest path.

### A Visual Example of  Dijkstra's Algorithm

```
         4
    (A) ------> (B)
     |           |
     | 2         | 5
     |           |
    \/          \/
    (C) ------> (D)
         1
```

Shortest path from **A to D**: `A → C → D` with total cost **3**. 

## JavaScript Implementation  

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

A Minimum Spanning Tree (MST) is the subset of connections in a weighted network that achieves the absolute lowest total cost for connecting all points, while rigorously avoiding any redundant loops. It guarantees that every single point is included and reachable, yet it forms a efficient "tree" structure where there is only one unique path between any two points, ensuring no resources are wasted on unnecessary connections. A common example of a Minimum Spanning Tree algorithm is Kruskal's Algorithm.

**Kruskal's algorithm:** Kruskal's Algorithm is a greedy, efficient method for finding an MST by iteratively adding the smallest available edge and using the Union-Find data structure to intelligently avoid cycles, ensuring the result is both spanning and of minimum cost.

### A Visual Example of  Kruskal's Algorithm

```
        (A)
     5/  |  \5
    (B) 3|   (C)
     2\  |  /4
        (D)
```

##### Steps

1. Sort edges by weight: **BD(2), AD(3), CD(4), AB(5), AC(5)**.  
2. Pick edges in order, skipping ones that form cycles.  
3. Final MST:  
   - **B–D (2)**  
   - **A–D (3)**  
   - **C–D (4)**  

Total Cost = **9**

## JavaScript Implementation

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

Graphs give us a way to map complexity into something we can analyze, optimize, and solve with code. By learning how to implement graph algorithms in JavaScript, we open the door to practical applications like smarter navigation systems and efficient social media recommendations. What begins as a study of nodes and edges soon reveals itself as a tool for tackling some of the biggest challenges in technology and daily life.

As you continue experimenting with graph algorithms, remember: the value isn’t only in writing the code, but in learning to see the world as a network of connections so that you can use that perspective to design smarter solutions.
