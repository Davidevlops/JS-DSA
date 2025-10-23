## Welcome to the Algorithm Series: Numerical Algorithms

Imagine trying to calculate the exact trajectory of a rocket, simulate weather patterns, or predict financial market behavior — all problems that depend on solving complex mathematical equations.
Now imagine a system that can perform millions of such calculations accurately and efficiently within seconds.

That’s the power of Numerical Algorithms — the mathematical engines that make computers capable of solving problems from physics, engineering, finance, and even artificial intelligence.
They turn theoretical mathematics into practical computation, bridging the gap between continuous equations and digital logic.

Numerical Algorithms are the backbone of scientific and engineering computing.
They teach computers how to approximate, simulate, and optimize mathematical models when exact analytical solutions are impossible or too complex to obtain.
From calculating planetary orbits to training deep learning models, these algorithms ensure results are both accurate and efficient.

In this article, we’ll dive deep into the world of numerical algorithms — exploring how they work, their major categories, the reasoning behind them, and their implementation principles using JavaScript or Python-style pseudocode.
By the end, you’ll understand how mathematics and computation merge to solve real-world problems.

**Why Numerical Matching Matters**
Numerical algorithms are at the heart of nearly every scientific and technological advancement:

- Simulating physical systems (fluid flow, heat transfer, motion)

- Predicting stock market trends and financial risks

- Training AI models using optimization and gradient methods

- Rendering realistic graphics and game physics

- Performing weather forecasts, seismic analysis, and space exploration

Without numerical computation, most of modern engineering, data science, and machine learning would not exist.

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

## Boyer–Moore Algorithm

The Boyer–Moore algorithm scans the text from right to left and skips large sections of text using two smart rules:

Bad Character Rule

Good Suffix Rule

It’s one of the fastest practical algorithms for single pattern searches.


## JavaScript Implementation

```javascript
function badCharHeuristic(pattern) {
  const badChar = {};
  for (let i = 0; i < pattern.length; i++) {
    badChar[pattern[i]] = i;
  }
  return badChar;
}

function boyerMooreSearch(text, pattern) {
  const badChar = badCharHeuristic(pattern);
  const n = text.length, m = pattern.length;
  let s = 0;
  const result = [];

  while (s <= n - m) {
    let j = m - 1;

    while (j >= 0 && pattern[j] === text[s + j]) j--;

    if (j < 0) {
      result.push(s);
      s += m - (badChar[text[s + m]] || -1);
    } else {
      s += Math.max(1, j - (badChar[text[s + j]] ?? -1));
    }
  }

  return result;
}

console.log(boyerMooreSearch("ABAAABCD", "ABC"));
// Output: [4]
```

##  Conclusion

Numerical algorithms are the mathematical muscle of computation — quietly powering simulations, predictions, and optimizations behind the world’s most advanced technologies.

From finding roots and solving equations to integrating curves and optimizing systems, each algorithm transforms abstract math into real, usable insights.
They teach an essential engineering lesson: in computation, perfection is rare — but good approximations, done efficiently, change the world.

Understanding numerical algorithms not only sharpens your mathematical thinking but also equips you with the tools to design systems that calculate, predict, and evolve — from rockets and robots to neural networks and beyond.