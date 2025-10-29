## Welcome to the Algorithm Series: Numerical Algorithms

Our journey through "Discovering JavaScript's Hidden Secrets" has reached its final destination. We're incredibly grateful to have shared this exploration with you. For our final series, we're looking at the algorithms that don't just solve problems but build the future.

Imagine a world where we can perfectly simulate the behavior of new medicines, design hyper-efficient energy grids, or create AI with a deep understanding of complex systems. This vision is rapidly becoming a reality, thanks to a specialized field of computation.

At the heart of this revolution are **Numerical Algorithms**. They are the quiet, mathematical engines that empower computers to tackle problems in physics, engineering, and finance that were once thought impossible. By translating the elegant language of continuous mathematics into practical, step-by-step digital processes, they unlock solutions that drive innovation.

In this article, we'll explore the core ideas that make these algorithms so powerful. Through clear explanations and practical pseudocode in JavaScript, you will learn how these computational techniques are applied. Join us one last time to discover how mathematics and code unite to engineer a better, smarter world.

By the end, you'll understand how mathematics and computation merge to solve real-world problems.

## What Are Numerical Algorithms?

Numerical algorithms are systematic, step-by-step computational methods designed to perform numerical calculations — things like solving equations, integrating functions, or approximating results that are too complex for direct calculation.

Unlike symbolic math (which gives exact answers), numerical algorithms focus on approximation, accuracy, and efficiency, especially for real-world problems where perfect solutions don't exist.

## Core Principles to Understand

### 1. Number Representation
Computers represent numbers using floating-point arithmetic, meaning real numbers are approximated, not exact. This leads to rounding and truncation errors. Understanding how these errors propagate is key to writing stable algorithms.

**Example:** The number 0.1 cannot be represented exactly in binary — tiny errors add up over millions of computations.

### 2. Error Analysis
In numerical computing, small mistakes can grow large:

- **Absolute Error:** `|x_true - x_approx|`
- **Relative Error:** `|x_true - x_approx| / |x_true|`
- **Error Propagation:** How early errors affect later results

A good numerical algorithm minimizes these errors and ensures results remain reliable even with imperfect inputs.

### 3. Efficiency and Complexity
Speed matters. Efficiency is measured by:

- **Time Complexity** → How fast the algorithm runs
- **Space Complexity** → How much memory it uses

**For instance:**
- Naive exponentiation: O(n)
- Fast Exponentiation (Exponentiation by Squaring): O(log n) — a huge improvement for cryptography and large computations.

## Essential Numerical Algorithms to Know

- **Euclidean Algorithm for GCD**
- **Fast Exponentiation (Modular Exponentiation)**
- **Root-Finding Algorithms**
- **Numerical Integration and Differentiation**
- **Optimization Algorithms**
- **Solving Linear Systems**

## Euclidean Algorithm (for GCD)

The Euclidean Algorithm is one of the oldest and most fundamental algorithms in mathematics, dating back over 2,000 years to ancient Greece. It provides an efficient way to compute the Greatest Common Divisor (GCD) — the largest positive integer that divides two numbers a and b without leaving a remainder.

The core idea behind the algorithm is simple yet powerful: The GCD of two numbers does not change if the larger number is replaced by its remainder when divided by the smaller number.

### JavaScript Implementation

```javascript
// Recursive implementation of the Euclidean Algorithm
function gcd(a, b) {
  if (b === 0) return a;
  return gcd(b, a % b);
}

// Example usage
console.log(gcd(48, 18)); // Output: 6
```

## Fast Exponentiation (Modular Exponentiation)

In computational mathematics, directly calculating aᵇ can be extremely inefficient, especially when b is large. Imagine trying to compute something like 7¹⁰⁰⁰⁰⁰⁰ — the number of multiplications would be enormous, and the result far too large to handle in memory.

To solve this, we use **Fast Exponentiation**, also known as **Exponentiation by Squaring**. When combined with modular arithmetic, it becomes **Modular Exponentiation**, which efficiently computes:

aᵇ mod m

This method dramatically reduces computation time by repeatedly squaring and taking remainders at each step, keeping numbers manageable and operations efficient.

### Mathematical Concept

The recursive logic behind the algorithm is based on the parity (evenness or oddness) of the exponent b:

- **If b is even:** aᵇ = (aᵇ/²)²
- **If b is odd:** aᵇ = a × (a⁽ᵇ⁻¹⁾/²)²

At each step, the exponent b is halved, reducing the number of multiplications from **O(b)** to **O(log b)** — a major performance improvement.

### JavaScript Implementation

```javascript
function modExp(a, b, m) {
  // Base case: anything to the power of 0 is 1
  if (b === 0) return 1;
  
  // If exponent is even
  if (b % 2 === 0) {
    const half = modExp(a, b / 2, m);
    return (half * half) % m;
  } 
  // If exponent is odd
  else {
    const half = modExp(a, Math.floor(b / 2), m);
    return (a * half * half) % m;
  }
}

// Example usage
console.log(modExp(3, 5, 13));  // Output: 9
console.log(modExp(7, 3, 11));  // Output: 2
console.log(modExp(2, 10, 100)); // Output: 24
```

## Root-Finding Algorithms

In many scientific, engineering, and financial problems, we often face equations that cannot be solved analytically (that is, using algebra alone). In such cases, we turn to **root-finding algorithms** — numerical methods used to approximate solutions for equations of the form:

$$f(x) = 0$$

A **root** (or **zero**) of a function is a value of $x$ for which the function equals zero. These algorithms iteratively refine guesses for $x$ until they converge to an acceptable approximation of the true root.

### Popular Root-Finding Methods

Below are three commonly used approaches — each with unique strengths and trade-offs.

#### 1. Bisection Method

#### Idea
The Bisection Method is one of the simplest and most reliable root-finding techniques. It works by repeatedly dividing an interval in half and selecting the subinterval in which the sign of $f(x)$ changes — meaning a root must lie within it (by the Intermediate Value Theorem).

##### Steps
1. Choose two initial points $a$ and $b$ such that $f(a)$ and $f(b)$ have opposite signs
2. Compute the midpoint $c = \frac{a + b}{2}$
3. Evaluate $f(c)$:
   - If $f(c) = 0$, you've found the root
   - If $f(a)$ and $f(c)$ have opposite signs, the root lies in $[a, c]$
   - Otherwise, it lies in $[c, b]$
4. Repeat until the result is within a desired tolerance

#### Pros & Cons
- **Pros**: Simple, stable, guaranteed to converge
- **Cons**: Converges slowly compared to other methods

### JavaScript Implementation
```javascript
function bisection(f, a, b, tolerance = 1e-6, maxIter = 1000) {
  if (f(a) * f(b) >= 0) throw new Error("f(a) and f(b) must have opposite signs");

  let c;
  for (let i = 0; i < maxIter; i++) {
    c = (a + b) / 2;
    if (Math.abs(f(c)) < tolerance) return c;

    if (f(a) * f(c) < 0) b = c;
    else a = c;
  }
  return c;
}

// Example: Solve f(x) = x^3 - x - 2 = 0
console.log(bisection(x => x ** 3 - x - 2, 1, 2)); // Output ≈ 1.521
```
#### 2. Newton–Raphson Method

#### Idea
This is one of the fastest root-finding methods, using calculus to refine guesses. It approximates the root by iteratively following the tangent line at the current point until it converges to zero.

#### Formula
$$x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)}$$

#### Pros & Cons
- **Pros**: Very fast convergence when the starting guess is close to the root
- **Cons**: Requires derivative $f'(x)$; can diverge if the initial guess is poor

### JavaScript Implementation
```javascript
function newtonRaphson(f, df, x0, tolerance = 1e-6, maxIter = 100) {
  let x = x0;

  for (let i = 0; i < maxIter; i++) {
    const fx = f(x);
    const dfx = df(x);
    if (Math.abs(fx) < tolerance) return x;
    if (dfx === 0) throw new Error("Derivative is zero — method fails.");

    x = x - fx / dfx;
  }
  return x;
}

// Example: f(x) = x^3 - x - 2
console.log(
  newtonRaphson(
    x => x ** 3 - x - 2,
    x => 3 * x ** 2 - 1,
    1.5
  )
); // Output ≈ 1.521
```
## 3. Secant Method

### Idea
The Secant Method is similar to Newton–Raphson but doesn't require the derivative of the function. Instead, it approximates the derivative using the slope of a secant line through two recent points.

### Formula
$$x_{n+1} = x_n - f(x_n) \times \frac{x_n - x_{n-1}}{f(x_n) - f(x_{n-1})}$$

### Pros & Cons
- **Pros**: Faster than Bisection and doesn't need $f'(x)$
- **Cons**: May fail to converge if guesses are poor

### JavaScript Implementation
```javascript
function secant(f, x0, x1, tolerance = 1e-6, maxIter = 100) {
  for (let i = 0; i < maxIter; i++) {
    const f0 = f(x0);
    const f1 = f(x1);
    if (Math.abs(f1) < tolerance) return x1;

    const x2 = x1 - f1 * ((x1 - x0) / (f1 - f0));
    x0 = x1;
    x1 = x2;
  }
  return x1;
}

// Example: f(x) = x^3 - x - 2
console.log(secant(x => x ** 3 - x - 2, 1, 2)); // Output ≈ 1.521
```
#### Root-Finding Algorithms

In many scientific, engineering, and financial problems, we often face equations that cannot be solved analytically (that is, using algebra alone). In such cases, we turn to root-finding algorithms — numerical methods used to approximate solutions for equations of the form:

𝑓
(
𝑥
)
=
0
f(x)=0

A root (or zero) of a function is a value of 
𝑥
x for which the function equals zero. These algorithms iteratively refine guesses for 
𝑥
x until they converge to an acceptable approximation of the true root.

⚙️ Popular Root-Finding Methods

Below are three commonly used approaches — each with unique strengths and trade-offs.

1. Bisection Method

Idea:
The Bisection Method is one of the simplest and most reliable root-finding techniques. It works by repeatedly dividing an interval in half and selecting the subinterval in which the sign of 
𝑓
(
𝑥
)
f(x) changes — meaning a root must lie within it (by the Intermediate Value Theorem).

Steps:

Choose two initial points a and b such that 
𝑓
(
𝑎
)
f(a) and 
𝑓
(
𝑏
)
f(b) have opposite signs.

Compute the midpoint 
𝑐
=
𝑎
+
𝑏
2
c=
2
a+b
	​

.

Evaluate 
𝑓
(
𝑐
)
f(c):

If 
𝑓
(
𝑐
)
=
0
f(c)=0, you’ve found the root.

If 
𝑓
(
𝑎
)
f(a) and 
𝑓
(
𝑐
)
f(c) have opposite signs, the root lies in 
[
𝑎
,
𝑐
]
[a,c].

Otherwise, it lies in 
[
𝑐
,
𝑏
]
[c,b].

Repeat until the result is within a desired tolerance.

Pros: Simple, stable, guaranteed to converge.
Cons: Converges slowly compared to other methods.

### JavaScript Implementation
```javascript
function bisection(f, a, b, tolerance = 1e-6, maxIter = 1000) {
  if (f(a) * f(b) >= 0) throw new Error("f(a) and f(b) must have opposite signs");

  let c;
  for (let i = 0; i < maxIter; i++) {
    c = (a + b) / 2;
    if (Math.abs(f(c)) < tolerance) return c;

    if (f(a) * f(c) < 0) b = c;
    else a = c;
  }
  return c;
}

// Example: Solve f(x) = x^3 - x - 2 = 0
console.log(bisection(x => x ** 3 - x - 2, 1, 2)); // Output ≈ 1.521
```
2. Newton–Raphson Method

Idea:
This is one of the fastest root-finding methods, using calculus to refine guesses. It approximates the root by iteratively following the tangent line at the current point until it converges to zero.

Formula:

𝑥
𝑛
+
1
=
𝑥
𝑛
−
𝑓
(
𝑥
𝑛
)
𝑓
′
(
𝑥
𝑛
)
x
n+1
	​

=x
n
	​

−
f
′
(x
n
	​

)
f(x
n
	​

)
	​


Pros: Very fast convergence when the starting guess is close to the root.
Cons: Requires derivative 
𝑓
′
(
𝑥
)
f
′
(x); can diverge if the initial guess is poor.

### JavaScript Implementation
```javascript
function newtonRaphson(f, df, x0, tolerance = 1e-6, maxIter = 100) {
  let x = x0;

  for (let i = 0; i < maxIter; i++) {
    const fx = f(x);
    const dfx = df(x);
    if (Math.abs(fx) < tolerance) return x;
    if (dfx === 0) throw new Error("Derivative is zero — method fails.");

    x = x - fx / dfx;
  }
  return x;
}

// Example: f(x) = x^3 - x - 2
console.log(
  newtonRaphson(
    x => x ** 3 - x - 2,
    x => 3 * x ** 2 - 1,
    1.5
  )
); // Output ≈ 1.521
```
3. Secant Method

Idea:
The Secant Method is similar to Newton–Raphson but doesn’t require the derivative of the function. Instead, it approximates the derivative using the slope of a secant line through two recent points.

Formula:

𝑥
𝑛
+
1
=
𝑥
𝑛
−
𝑓
(
𝑥
𝑛
)
×
𝑥
𝑛
−
𝑥
𝑛
−
1
𝑓
(
𝑥
𝑛
)
−
𝑓
(
𝑥
𝑛
−
1
)
x
n+1
	​

=x
n
	​

−f(x
n
	​

)×
f(x
n
	​

)−f(x
n−1
	​

)
x
n
	​

−x
n−1
	​

	​


Pros: Faster than Bisection and doesn’t need 
𝑓
′
(
𝑥
)
f
′
(x).
Cons: May fail to converge if guesses are poor.

### JavaScript Implementation
```javascript
function secant(f, x0, x1, tolerance = 1e-6, maxIter = 100) {
  for (let i = 0; i < maxIter; i++) {
    const f0 = f(x0);
    const f1 = f(x1);
    if (Math.abs(f1) < tolerance) return x1;

    const x2 = x1 - f1 * ((x1 - x0) / (f1 - f0));
    x0 = x1;
    x1 = x2;
  }
  return x1;
}

// Example: f(x) = x^3 - x - 2
console.log(secant(x => x ** 3 - x - 2, 1, 2)); // Output ≈ 1.521
```
🧩 Use Cases

Root-finding algorithms appear across numerous fields:

Engineering simulations: To find equilibrium points, stresses, and voltages.

Finance: Calculating interest rates (IRR), option pricing, or break-even points.

Scientific computing: Solving nonlinear equations in physics and chemistry models.

#### Numerical Integration (Approximation Methods)
In many real-world scenarios, finding the exact integral of a function analytically is impossible or extremely complex. This is where numerical integration methods — or approximation techniques — come in.
These methods estimate the area under a curve by breaking it into smaller, manageable parts that can be computed efficiently.

Below are three of the most popular and widely used numerical integration methods:

1. Trapezoidal Rule

The Trapezoidal Rule approximates the area under a curve by dividing it into trapezoids instead of rectangles. It then sums up the areas of these trapezoids to estimate the integral.

Mathematically:

∫
𝑎
𝑏
𝑓
(
𝑥
)
 
𝑑
𝑥
≈
ℎ
2
[
𝑓
(
𝑎
)
+
2
∑
𝑖
=
1
𝑛
−
1
𝑓
(
𝑥
𝑖
)
+
𝑓
(
𝑏
)
]
∫
a
b
	​

f(x)dx≈
2
h
	​

[f(a)+2
i=1
∑
n−1
	​

f(x
i
	​

)+f(b)]

where 
ℎ
=
𝑏
−
𝑎
𝑛
h=
n
b−a
	​

 is the width of each subinterval.

### JavaScript Implementation
```javascript
function trapezoidalRule(f, a, b, n) {
  const h = (b - a) / n;
  let sum = f(a) + f(b);

  for (let i = 1; i < n; i++) {
    sum += 2 * f(a + i * h);
  }

  return (h / 2) * sum;
}

// Example: integrate f(x) = x^2 from 0 to 3
const result = trapezoidalRule(x => x ** 2, 0, 3, 1000);
console.log("Trapezoidal Rule Result:", result.toFixed(4));
```
2. Simpson’s Rule

The Simpson’s Rule provides a more accurate approximation by fitting parabolas through sections of the curve rather than straight lines.
It requires that the number of intervals n be even.

∫
𝑎
𝑏
𝑓
(
𝑥
)
 
𝑑
𝑥
≈
ℎ
3
[
𝑓
(
𝑎
)
+
4
∑
odd 
𝑖
𝑓
(
𝑥
𝑖
)
+
2
∑
even 
𝑖
𝑓
(
𝑥
𝑖
)
+
𝑓
(
𝑏
)
]
∫
a
b
	​

f(x)dx≈
3
h
	​

[f(a)+4
odd i
∑
	​

f(x
i
	​

)+2
even i
∑
	​

f(x
i
	​

)+f(b)]

### JavaScript Implementation
```javascript
function simpsonsRule(f, a, b, n) {
  if (n % 2 !== 0) throw new Error("n must be even for Simpson's Rule");
  const h = (b - a) / n;
  let sum = f(a) + f(b);

  for (let i = 1; i < n; i++) {
    sum += f(a + i * h) * (i % 2 === 0 ? 2 : 4);
  }

  return (h / 3) * sum;
}

// Example: integrate f(x) = Math.sin(x) from 0 to π
const resultSimpson = simpsonsRule(Math.sin, 0, Math.PI, 100);
console.log("Simpson’s Rule Result:", resultSimpson.toFixed(4));
```
3. Monte Carlo Integration

The Monte Carlo Method uses random sampling to estimate the area under a curve.
It’s particularly useful for high-dimensional integrals or cases where the function is too complex for analytical or deterministic numerical methods.

∫
𝑎
𝑏
𝑓
(
𝑥
)
 
𝑑
𝑥
≈
(
𝑏
−
𝑎
)
×
1
𝑁
∑
𝑖
=
1
𝑁
𝑓
(
𝑥
𝑖
)
∫
a
b
	​

f(x)dx≈(b−a)×
N
1
	​

i=1
∑
N
	​

f(x
i
	​

)

where 
𝑥
𝑖
x
i
	​

 are random points between 
𝑎
a and 
𝑏
b.

### JavaScript Implementation
```javascript
function monteCarloIntegration(f, a, b, n) {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    const x = a + Math.random() * (b - a);
    sum += f(x);
  }
  return ((b - a) / n) * sum;
}

// Example: integrate f(x) = Math.exp(-x*x) from -2 to 2
const resultMonteCarlo = monteCarloIntegration(x => Math.exp(-x * x), -2, 2, 100000);
console.log("Monte Carlo Result:", resultMonteCarlo.toFixed(4));
```
✅ Use Cases

Estimating areas under complex curves

Solving physics or engineering equations

Data-driven analytics and machine learning

Financial modeling (option pricing, risk estimation)

When exact calculus is impossible, approximation methods step in:

* **Trapezoidal Rule**
* **Simpson’s Rule**
* **Monte Carlo Integration**

✅ **Use Case:** Estimating areas, solving physics equations, data-driven analytics


#### Solving Linear Systems
In mathematics and computational science, many real-world problems boil down to solving a system of linear equations, often written as:

𝐴
𝑥
=
𝑏
Ax=b

where

𝐴
A is a matrix of coefficients,

𝑥
x is a vector of unknowns, and

𝑏
b is a vector of constants.

Linear systems appear everywhere — from machine learning (solving for model parameters) to engineering simulations, computer graphics, and optimization problems.

1. Gaussian Elimination (Direct Method)

The Gaussian Elimination method systematically transforms the matrix 
𝐴
A into an upper triangular form, then uses back-substitution to find the values of the unknowns.
It’s a foundational algorithm used in almost all linear algebra libraries.

### JavaScript Implementation
```javascript
function gaussianElimination(A, b) {
  const n = A.length;

  // Forward elimination
  for (let i = 0; i < n; i++) {
    // Pivot for numerical stability
    let maxRow = i;
    for (let k = i + 1; k < n; k++) {
      if (Math.abs(A[k][i]) > Math.abs(A[maxRow][i])) maxRow = k;
    }
    [A[i], A[maxRow]] = [A[maxRow], A[i]];
    [b[i], b[maxRow]] = [b[maxRow], b[i]];

    // Eliminate below
    for (let k = i + 1; k < n; k++) {
      const factor = A[k][i] / A[i][i];
      for (let j = i; j < n; j++) {
        A[k][j] -= factor * A[i][j];
      }
      b[k] -= factor * b[i];
    }
  }

  // Back substitution
  const x = new Array(n).fill(0);
  for (let i = n - 1; i >= 0; i--) {
    let sum = b[i];
    for (let j = i + 1; j < n; j++) {
      sum -= A[i][j] * x[j];
    }
    x[i] = sum / A[i][i];
  }

  return x;
}

// Example: Solve A·x = b
const A = [
  [2, 1, -1],
  [-3, -1, 2],
  [-2, 1, 2]
];
const b = [8, -11, -3];

console.log("Solution (Gaussian Elimination):", gaussianElimination(A, b));
```

2. LU Decomposition

Instead of transforming the matrix multiple times, LU Decomposition splits 
𝐴
A into two simpler matrices:

𝐴
=
𝐿
×
𝑈
A=L×U

where

𝐿
L is a lower triangular matrix,

𝑈
U is an upper triangular matrix.

This makes solving for multiple 
𝑏
b vectors efficient — useful in machine learning and simulations.

### JavaScript Implementation
```javascript
function luDecomposition(A) {
  const n = A.length;
  const L = Array.from({ length: n }, () => Array(n).fill(0));
  const U = Array.from({ length: n }, () => Array(n).fill(0));

  for (let i = 0; i < n; i++) {
    for (let k = i; k < n; k++) {
      let sum = 0;
      for (let j = 0; j < i; j++) sum += L[i][j] * U[j][k];
      U[i][k] = A[i][k] - sum;
    }

    for (let k = i; k < n; k++) {
      if (i === k) L[i][i] = 1;
      else {
        let sum = 0;
        for (let j = 0; j < i; j++) sum += L[k][j] * U[j][i];
        L[k][i] = (A[k][i] - sum) / U[i][i];
      }
    }
  }

  return { L, U };
}

// Example
const A2 = [
  [4, 3],
  [6, 3]
];
const { L, U } = luDecomposition(A2);
console.log("L =", L);
console.log("U =", U);
```
3. Jacobi and Gauss–Seidel Methods (Iterative Methods)

When the system is large or sparse, direct methods become computationally expensive.
Iterative methods like Jacobi and Gauss–Seidel approximate solutions by refining guesses over multiple iterations.

Jacobi Method (Example):
### JavaScript Implementation
```javascript
function jacobiMethod(A, b, tolerance = 1e-6, maxIterations = 1000) {
  const n = A.length;
  let x = new Array(n).fill(0);
  let xNew = new Array(n).fill(0);

  for (let iter = 0; iter < maxIterations; iter++) {
    for (let i = 0; i < n; i++) {
      let sum = 0;
      for (let j = 0; j < n; j++) {
        if (i !== j) sum += A[i][j] * x[j];
      }
      xNew[i] = (b[i] - sum) / A[i][i];
    }

    // Check for convergence
    if (xNew.every((val, i) => Math.abs(val - x[i]) < tolerance)) break;
    x = [...xNew];
  }

  return x;
}

// Example
const A3 = [
  [10, -1, 2, 0],
  [-1, 11, -1, 3],
  [2, -1, 10, -1],
  [0, 3, -1, 8]
];
const b3 = [6, 25, -11, 15];
console.log("Jacobi Method Result:", jacobiMethod(A3, b3));
```
4. Conjugate Gradient Method

The Conjugate Gradient (CG) method is a powerful iterative algorithm optimized for large, sparse, symmetric, and positive-definite systems — common in scientific computing and machine learning.

It converges faster than basic iterative methods for well-conditioned systems.

### JavaScript Implementation
```javascript (Simplified Implementation):

function conjugateGradient(A, b, tolerance = 1e-6, maxIterations = 1000) {
  const n = b.length;
  let x = new Array(n).fill(0);
  let r = b.map((val, i) => val - A[i].reduce((sum, aij, j) => sum + aij * x[j], 0));
  let p = [...r];
  let rsOld = r.reduce((sum, val) => sum + val * val, 0);

  for (let i = 0; i < maxIterations; i++) {
    const Ap = A.map(row => row.reduce((sum, val, j) => sum + val * p[j], 0));
    const alpha = rsOld / p.reduce((sum, val, j) => sum + val * Ap[j], 0);
    x = x.map((xi, j) => xi + alpha * p[j]);
    r = r.map((ri, j) => ri - alpha * Ap[j]);

    const rsNew = r.reduce((sum, val) => sum + val * val, 0);
    if (Math.sqrt(rsNew) < tolerance) break;

    p = r.map((ri, j) => ri + (rsNew / rsOld) * p[j]);
    rsOld = rsNew;
  }

  return x;
}

// Example
const A4 = [
  [4, 1],
  [1, 3]
];
const b4 = [1, 2];
console.log("Conjugate Gradient Result:", conjugateGradient(A4, b4));
```
✅ Use Cases

Machine Learning: Solving systems in linear regression, SVMs, and optimization problems

Physics Simulations: Modeling motion, energy, or stress systems

Computer Graphics: Solving transformation and rendering equations

Optimization & Control Systems: Computing constraints or equilibrium states


#### Optimization Algorithms

Optimization lies at the heart of machine learning, engineering design, finance, and scientific research.
In simple terms, optimization algorithms are methods used to find the minimum or maximum of a function — for example, minimizing loss in a machine learning model or maximizing profit in an investment portfolio.

Mathematically, the problem is often expressed as:

min
⁡
𝑥
𝑓
(
𝑥
)
or
max
⁡
𝑥
𝑓
(
𝑥
)
x
min
	​

f(x)or
x
max
	​

f(x)

where 
𝑓
(
𝑥
)
f(x) is the objective function we want to optimize.

Because many real-world problems are too complex for exact calculus-based solutions, these algorithms iteratively improve guesses for 
𝑥
x to move closer to the optimal point.

1. Gradient Descent

Idea:
Gradient Descent is one of the most widely used optimization algorithms, especially in machine learning.
It works by iteratively moving in the direction of steepest descent — the negative gradient — to minimize the objective function.

Mathematically:

𝑥
𝑛
+
1
=
𝑥
𝑛
−
𝜂
⋅
𝑓
′
(
𝑥
𝑛
)
x
n+1
	​

=x
n
	​

−η⋅f
′
(x
n
	​

)

where 
𝜂
η (eta) is the learning rate, controlling the step size.

JavaScript Implementation:

function gradientDescent(f, df, x0, learningRate = 0.1, tolerance = 1e-6, maxIter = 1000) {
  let x = x0;

  for (let i = 0; i < maxIter; i++) {
    const grad = df(x);
    const nextX = x - learningRate * grad;

    if (Math.abs(nextX - x) < tolerance) break;
    x = nextX;
  }

  return x;
}

// Example: Minimize f(x) = (x - 3)^2
const f = x => (x - 3) ** 2;
const df = x => 2 * (x - 3);

console.log("Minimum at x ≈", gradientDescent(f, df, 10));


✅ Pros: Simple, efficient, and widely applicable
⚠️ Cons: May get stuck in local minima; choice of learning rate affects performance

2. Newton’s Method (for Optimization)

Idea:
While Gradient Descent uses only the first derivative, Newton’s Method also considers the second derivative (curvature) of the function for faster convergence.
It adjusts the step size adaptively based on how steep or flat the function is.

Formula:

𝑥
𝑛
+
1
=
𝑥
𝑛
−
𝑓
′
(
𝑥
𝑛
)
𝑓
′
′
(
𝑥
𝑛
)
x
n+1
	​

=x
n
	​

−
f
′′
(x
n
	​

)
f
′
(x
n
	​

)
	​


JavaScript Implementation:

function newtonsMethod(f1, f2, x0, tolerance = 1e-6, maxIter = 100) {
  let x = x0;

  for (let i = 0; i < maxIter; i++) {
    const grad = f1(x);
    const hess = f2(x);

    if (Math.abs(grad) < tolerance) break;
    if (hess === 0) throw new Error("Zero curvature — Newton’s Method fails.");

    x = x - grad / hess;
  }

  return x;
}

// Example: Minimize f(x) = (x - 2)^2 + 1
const f1 = x => 2 * (x - 2);   // First derivative
const f2 = x => 2;             // Second derivative

console.log("Minimum at x ≈", newtonsMethod(f1, f2, 5));


✅ Pros: Fast convergence near the minimum
⚠️ Cons: Requires computing second derivatives; can diverge with poor initial guesses

3. Simulated Annealing

Idea:
Inspired by metallurgical annealing, this method explores the search space randomly, accepting worse solutions with a certain probability that decreases over time (the “cooling schedule”).
This helps the algorithm escape local minima — something gradient-based methods struggle with.

It’s particularly useful for non-convex, discrete, or combinatorial problems (like traveling salesman or scheduling).

JavaScript Implementation (Simplified):

function simulatedAnnealing(f, x0, temp = 100, coolingRate = 0.95, tolerance = 1e-6) {
  let x = x0;
  let best = x;
  let bestVal = f(x);

  while (temp > tolerance) {
    const newX = x + (Math.random() - 0.5) * temp;
    const newVal = f(newX);
    const delta = newVal - bestVal;

    if (delta < 0 || Math.exp(-delta / temp) > Math.random()) {
      x = newX;
      if (newVal < bestVal) {
        best = newX;
        bestVal = newVal;
      }
    }

    temp *= coolingRate; // Gradual cooling
  }

  return best;
}

// Example: Minimize f(x) = (x - 5)^2 + Math.sin(5x)
const f2 = x => (x - 5) ** 2 + Math.sin(5 * x);
console.log("Best solution ≈", simulatedAnnealing(f2, 0));


✅ Pros: Can escape local minima; works for complex landscapes
⚠️ Cons: Computationally slower; requires tuning cooling parameters

4. Genetic Algorithms

Idea:
Genetic Algorithms (GAs) mimic biological evolution — using operations like selection, crossover, and mutation to evolve a population of candidate solutions toward optimal results.

These algorithms are especially effective for multi-variable, non-differentiable, or discrete optimization problems.

JavaScript Implementation (Simplified):

function geneticAlgorithm(f, popSize = 20, generations = 100, mutationRate = 0.1) {
  let population = Array.from({ length: popSize }, () => Math.random() * 10 - 5);

  for (let gen = 0; gen < generations; gen++) {
    // Evaluate fitness (lower is better)
    const fitness = population.map(x => f(x));
    const sorted = population
      .map((x, i) => [x, fitness[i]])
      .sort((a, b) => a[1] - b[1]);

    // Select top half
    const survivors = sorted.slice(0, popSize / 2).map(([x]) => x);

    // Crossover and mutation
    const newPop = [...survivors];
    while (newPop.length < popSize) {
      const [p1, p2] = [
        survivors[Math.floor(Math.random() * survivors.length)],
        survivors[Math.floor(Math.random() * survivors.length)]
      ];
      let child = (p1 + p2) / 2;
      if (Math.random() < mutationRate) child += (Math.random() - 0.5);
      newPop.push(child);
    }

    population = newPop;
  }

  const best = population.reduce((a, b) => (f(a) < f(b) ? a : b));
  return best;
}

// Example: Minimize f(x) = x^2 + sin(3x)
const f3 = x => x ** 2 + Math.sin(3 * x);
console.log("Optimal x ≈", geneticAlgorithm(f3));


✅ Pros: Works on complex, non-differentiable problems
⚠️ Cons: Slow; requires parameter tuning (population size, mutation rate, etc.)

✅ Use Cases

Optimization algorithms power a vast range of modern applications:

Machine Learning: Minimizing cost or loss functions

Control Systems: Tuning system parameters for stability and performance

Finance: Portfolio optimization, risk minimization

Engineering Design: Reducing material usage or maximizing efficiency

Operations Research: Scheduling, routing, and resource allocation


##  Conclusion

Numerical algorithms are the mathematical muscle of computation — quietly powering simulations, predictions, and optimizations behind the world’s most advanced technologies.

From finding roots and solving equations to integrating curves and optimizing systems, each algorithm transforms abstract math into real, usable insights.
They teach an essential engineering lesson: in computation, perfection is rare — but good approximations, done efficiently, change the world.

Understanding numerical algorithms not only sharpens your mathematical thinking but also equips you with the tools to design systems that calculate, predict, and evolve — from rockets and robots to neural networks and beyond.