## Welcome to the Algorithm Series: String Matching Algorithms

Imagine trying to find a single word in a thousand-page book from flipping through every page, scanning every line, and hoping your eyes catch the right sequence of letters. Now imagine a system that can do the same thing across millions of documents in milliseconds.

That’s the magic of String Matching Algorithms, the invisible engines making modern search possible. They’re the hidden force behind Google’s lightning-fast searches, code editors that highlight matches as you type, plagiarism detectors that scan billions of texts, and even bioinformatics tools that compare DNA sequences.

At their core, these algorithms teach computers how to “read” and recognize patterns within text. From validating user input and parsing data to building full-scale search engines, string matching lies at the heart of how machines understand language.

In this article, we’ll peel back the curtain to understand how string matching truly works, explore the mechanics and intuition behind legendary algorithms like Naïve Search, Knuth–Morris–Pratt (KMP), Rabin–Karp, and Boyer–Moore, and implement them step by step using JavaScript — revealing how a few lines of logic can transform raw text into intelligent, searchable data.

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

**Naïve String Matching Algorithm** The Naïve approach is also called the Brute-Force String Matching Algorithm. It operates by sliding the pattern over the text one character at a time and checking, at each position, whether the pattern matches the substring of the text beginning at that point. This comparison continues character by character until a mismatch occurs or the entire pattern matches.

The algorithm works as follows:

1. Start at index 0 of the text and compare each character of P with the corresponding character in T.
2. If all characters match, record the index as a match position.
3. If a mismatch occurs, shift the pattern one character to the right and compare again.
4. Continue this process until the pattern has been aligned with every possible substring of the text.
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

String matching algorithms form the backbone of modern computing — from simple text searches to complex DNA analysis. Understanding how each algorithm works not only sharpens your problem-solving skills but also teaches you how to think about efficiency and optimization.

By learning Naïve, KMP, Rabin–Karp, and Boyer–Moore, you’ve unlocked a deeper understanding of how powerful and efficient pattern searching can be.