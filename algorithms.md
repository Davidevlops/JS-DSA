Welcome back to another section of data structures and algorithms. since we have dicussued all the comon data structure. In this series, we'll explore algorithms, discussing the common types of algorithm and further justifying the difference between algorithms and coding patterns.

We'll emabk on what algorithms are really are.

- **Algorithm:** let's start by tracing the etymological meaning of how the world algorithm came to play. The word algorithm comes from the name of a 9th-century Persian mathematician, Muḥammad ibn Mūsā al-Khwārizmī. He wrote a book in Arabic on arithmetic and algebra, titled Kitāb al-ḥisāb al-hindī (Book on Calculation with Hindu Numerals) which introduced systematic methods for solving linear and quadratic equations. His name was Latinized as "Algoritmi" in European texts, and his computational methods became known as algorismus.

Algorithm referred to step-by-step procedures for arithmetic calculationsa. In the 20th century, it expanded to mean any systematic computational procedure, especially in computer science. Algorithms are written for specific purposes. We would explore the common algorithms available.

#### Why are algorithms crucial in computing?

1. Efficiency: Algorithms helps us to do more with less. it determiness how quickly and effectively a problem can be solved. A well-designed algorithm can drastically reduce the time and resources required.
2. Scalability: Good algorithms ensure systems can grow, making them essential for handling big data and real-world applications.
3. Automation: Algorithms enable machines to perform tasks without human intervention.
4. Foundation of Software: Every program, from simple calculators to complex AI systems, relies on algorithms for its logic and flow.
5. Economic and Societal Impact: Algorithms drive various industries and shape daily life.

examples of Real-world applications of algorithms include search engines, navigation, AI, cryptography e.t.c

There are some common algorithm design techniques in computing or they are better reffered to as problem solving patterns they are:

- Brute Force: Brute Force in computer science refers to an approach to solving problems by trying all possible solutions until the correct one is found. It doesn't use any shortcuts or optimization; instead, it relies on sheer computing power and time.
- Divide and Conquer: Divide and Conquer is a computer science strategy for solving complex problems by breaking them down into smaller, more manageable subproblems. Each subproblem is solved independently, and then the solutions are combined to solve the original problem.

This method typically follows three steps:
Divide the problem into smaller parts.
Conquer each part by solving it recursively.
Combine the results to form the final solution.
examples of algorithms that utilizes Divide and Conquer problem solving pattern is Merge Sort and Quick Sort.

- Dynamic Programming: Dynamic Programming (DP) is a technique used in computer science to solve problems by breaking them down into overlapping subproblems and storing the results of these subproblems to avoid redundant calculations.

Instead of solving the same problem multiple times (as in brute force), DP saves the answers in a table (often an array or a hash map) and reuses them when needed. This makes it much faster, especially for problems with a lot of repeated work—like calculating Fibonacci numbers or solving the knapsack problem.

- Greedy Algorithms Greedy Algorithms are a problem-solving approach where decisions are made step-by-step, choosing the option that seems best at each moment (the "greedy" choice), with the hope that these local optimizations lead to a globally optimal solution.

Greedy algorithms work well when a problem has the greedy-choice property and optimal substructure, meaning local best choices lead to the global best solution.

Examples include:Dijkstra’s, Huffman Coding

- Backtracking (N-Queens, Sudoku solver)
- Randomized Algorithms (QuickSort with random pivot)
