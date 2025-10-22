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

### JavaScript Implementation

```javascript
function computeLPSArray(pattern) {
  const lps = new Array(pattern.length).fill(0);
  let len = 0;
  let i = 1;

  while (i < pattern.length) {
    if (pattern[i] === pattern[len]) {
      lps[i++] = ++len;
    } else if (len !== 0) {
      len = lps[len - 1];
    } else {
      lps[i++] = 0;
    }
  }
  return lps;
}

function kmpSearch(text, pattern) {
  const lps = computeLPSArray(pattern);
  const positions = [];
  let i = 0, j = 0;

  while (i < text.length) {
    if (pattern[j] === text[i]) {
      i++; j++;
    }

    if (j === pattern.length) {
      positions.push(i - j);
      j = lps[j - 1];
    } else if (i < text.length && pattern[j] !== text[i]) {
      j !== 0 ? (j = lps[j - 1]) : i++;
    }
  }

  return positions;
}

console.log(kmpSearch("ABABDABACDABABCABAB", "ABABCABAB"));
// Output: [10]

```

**Rabin–Karp Algorithm (Hash-Based Search)** The Rabin–Karp algorithm uses a rolling hash function to compare substrings instead of checking characters one by one.

**Dijkstra's Algorithm:** Dijkstra's Algorithm finds the shortest path from a single starting point to all other nodes in a graph. It works on graphs where:

This is especially useful when searching for multiple patterns in one text.

## JavaScript Implementation  

```javascript
function rabinKarp(text, pattern, prime = 101) {
  const n = text.length;
  const m = pattern.length;
  const d = 256; // number of possible characters
  let h = 1;
  let p = 0; // hash for pattern
  let t = 0; // hash for text
  const result = [];

  for (let i = 0; i < m - 1; i++) h = (h * d) % prime;

  for (let i = 0; i < m; i++) {
    p = (d * p + pattern.charCodeAt(i)) % prime;
    t = (d * t + text.charCodeAt(i)) % prime;
  }

  for (let i = 0; i <= n - m; i++) {
    if (p === t) {
      if (text.slice(i, i + m) === pattern) result.push(i);
    }
    if (i < n - m) {
      t = (d * (t - text.charCodeAt(i) * h) + text.charCodeAt(i + m)) % prime;
      if (t < 0) t += prime;
    }
  }

  return result;
}

console.log(rabinKarp("GEEKS FOR GEEKS", "GEEK"));
// Output: [0, 10]

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
