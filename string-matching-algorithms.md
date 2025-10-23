## Welcome to the Algorithm Series: String Matching Algorithms

Imagine trying to find a single word in a thousand-page book — flipping through every page, scanning every line, and hoping your eyes catch the right sequence of letters.  
Now imagine a system that can do the same thing across millions of documents in milliseconds.

That’s the magic of **String Matching Algorithms**, the invisible engines making modern search possible.  
They’re the hidden force behind Google’s lightning-fast searches, code editors that highlight matches as you type, plagiarism detectors that scan billions of texts, and even bioinformatics tools that compare DNA sequences.

**String Matching Algorithms**,also known as **Pattern Matching Algorithms** is the process of finding one or more occurrences of a pattern (substring) inside a text (main string). these algorithms teach computers how to “read” and recognize patterns within text.  
From validating user input and parsing data to building full-scale search engines, string matching lies at the heart of how machines understand language.

In this article, we’ll peel back the curtain to understand how string matching truly works, explore the mechanics and intuition behind legendary algorithms like **Naïve Search**, **Knuth–Morris–Pratt (KMP)**, **Rabin–Karp**, and **Boyer–Moore**, and implement them step by step using **JavaScript** — revealing how a few lines of logic can transform raw text into intelligent, searchable data.



### Understanding String Matching

Example

Text: "the quick brown fox jumps over the lazy dog"

Pattern: "brown"

Output: The pattern starts at index 10


### Why String Matching Matters

String matching is used everywhere:

- Search engines to find keywords in web pages  
- Chat filters to detect banned words  
- Bioinformatics to find gene sequences  
- Compilers to tokenize source code  
- AI/ML preprocessing to clean and analyze text  

### Common Categories of String Matching Algorithms

- **Naïve String Matching Algorithm**  
- **Knuth–Morris–Pratt (KMP) Algorithm**  
- **Rabin–Karp Algorithm (Hash-Based Search)**  
- **Boyer–Moore Algorithm**


## Naïve String Matching Algorithm

The **Naïve approach** (also called the **Brute-Force String Matching Algorithm**) operates by sliding the pattern over the text one character at a time and checking, at each position, whether the pattern matches the substring of the text beginning at that point.  
This comparison continues character by character until a mismatch occurs or the entire pattern matches.

### How It Works

1. Start at index `0` of the text and compare each character of `P` with the corresponding character in `T`.  
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

## Knuth–Morris–Pratt (KMP) Algorithm

The **KMP algorithm** is a pattern searching algorithm designed to improve upon the inefficiencies of the Naïve String Matching Algorithm.  
It precomputes the **Longest Proper Prefix** of the pattern which is also a **Suffix**, allowing the search to skip redundant comparisons.

---

### How It Works

#### Step 1: Preprocessing Phase (Build the LPS Array)

Before searching, KMP preprocesses the pattern to build the **LPS (Longest Proper Prefix which is also a Suffix)** array.  
This array tells the algorithm how many characters can be skipped after a mismatch occurs.

- **Prefix** → A substring starting at the beginning of the pattern.  
- **Suffix** → A substring ending at the end of the pattern.  

The LPS value for each position indicates the length of the longest proper prefix that is also a suffix up to that point.

---

#### Step 2: Searching Phase

Using the LPS array:

1. Start comparing the pattern with the text from left to right.  
2. When characters match, move both pointers (text and pattern) forward.  
3. If a mismatch occurs:
   - Instead of restarting the pattern from index `0`, use the **LPS value** of the previous pattern index to skip ahead.  
4. Continue this process until the end of the text.

---

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
      i++;
      j++;
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
## Rabin–Karp Algorithm (Hash-Based Search)

The **Rabin–Karp Algorithm** is a string-searching method that uses **hashing** to find a pattern inside a text.  
Instead of checking each character, it converts substrings into **hash values** for faster comparison.


### How It Works
1. Compute the **hash of the pattern**.
2. Compute the **hash of the first window** of text (same length as the pattern).
3. **Slide the window** one character at a time and update the hash using a **rolling hash formula**:
    - If the hash of the window matches the pattern hash, check the actual substring to confirm.  
    -  Repeat until the end of the text.  

### JavaScript Implementation  

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

The **Boyer–Moore Algorithm** is one of the **fastest and most efficient** string matching algorithms in practice.  
It compares the **pattern from right to left**, and when a mismatch occurs, it uses two powerful heuristics to skip over large sections of text — rather than moving just one character at a time.

This makes it **especially effective** for long texts and complex patterns, often outperforming other algorithms in real-world applications.

### 🧠 How It Works

#### Start Matching from the Right
- The comparison starts from the **rightmost character** of the pattern and moves **leftward**.  
- If all characters match → ✅ **Pattern found**.  
- If a mismatch occurs → the algorithm decides **how far to shift** the pattern using two heuristics:
  1. **Bad Character Heuristic**
  2. **Good Suffix Heuristic**

### 1. Bad Character Heuristic

When a mismatch occurs at text character `c` while comparing pattern character `P[j]`:

- If `c` exists **to the left** in the pattern, shift the pattern so that the **rightmost occurrence** of `c` in the pattern aligns with the mismatched text character.  
- If `c` **does not exist** in the pattern, shift the pattern **beyond that character entirely**.

This allows Boyer–Moore to **skip text characters** that could never lead to a match.

**Example:**

When a mismatch occurs at **D**, and since **D** does not appear in `"EFG"`,  
the algorithm shifts the pattern **past D**, skipping unnecessary comparisons.

### 2. Good Suffix Heuristic

When a mismatch occurs **after part of the pattern has matched**,  
Boyer–Moore uses the **matched suffix** (called the *good suffix*) to determine the next shift.

- If a portion at the end of the pattern matched:
  - Shift the pattern so the **next occurrence** of that suffix aligns in the text.
- If the suffix does **not appear elsewhere**:
  - Shift so that the **longest prefix** matching the suffix aligns instead.

This heuristic lets Boyer–Moore **reuse previously matched information** efficiently and skip redundant checks.

### JavaScript Implementation

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

String matching algorithms may seem simple, but they’re the **invisible power** behind search engines, code editors, and even DNA analysis. 

The Naïve algorithm is easy to understand but slow for large data. KMP improves efficiency by avoiding redundant checks. Rabin–Karp shines when comparing multiple patterns using hashing, while Boyer–Moore excels in practical performance by skipping ahead intelligently.

Beyond theory, these algorithms teach a crucial engineering lesson: the right approach depends on your data and context. Whether you’re building a search feature, validating input, or analyzing text, knowing how these algorithms work gives you the power to make software faster and smarter.

In essence, string matching turns plain text into meaningful information — and understanding it turns a good developer into a great problem solver.