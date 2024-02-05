Welcome to the world of Data Structures and Algorithms using JavaScript! This comprehensive guide would equip you with the essential knowledge and skills to navigate the intricate landscape of data manipulation and algorithmic problem-solving using JavaScript.

Whether you're a seasoned developer seeking to enhance your proficiency or a beginner eager to dive into the realms of data structures and algorithms, this content is tailored to provide clarity and practical insights. Join us on a journey that combines theoretical foundations with hands-on coding examples, empowering you to build robust and efficient solutions in JavaScript.

##### Prerequisites

In solving data structures and algorithms using JavaScript, you must be knowledgeable about JavaScript fundamentals which include Basic syntaxes, Variables, Data types, Control flows, Functions, and scope.

Now, let's dive in. On this episode of Data sturctures and algorithm, I would be discussing Big O notation

#### Big O notation

Big O notation serves as a powerful tool for analyzing and articulating the efficiency or complexity of an algorithm. Notably, it provides insights into both time and space complexities. When addressing time complexity, Big O is represented as **O(f(n))**, where 'O' signifies the 'order of,' denoting the upper bound or worst-case scenario for the algorithm's growth rate. The 'f' corresponds to a function, much like those in mathematics, while 'n' signifies the size of inputs the function processes. This 'n' could represent elements in an array, string length, nodes in a graph, and more. Consequently, 'f(n)' becomes a function representing the algorithm's time complexity growth rate in relation to the input size 'n'. Similarly, Big O notation for space complexity adopts the form **O(g(n))**, following a parallel concept to that of time complexity.

In javascript, gauging the execution time of an algorithm is made possible through the use of the performance.now() method. Below is an illustrative example demonstrating the application of performance.now() to measure the efficiency of two functions solving the same problem. In this scenario, we'll explore the contrast between two functions, showcasing the variance in their efficiency levels.

```js
// 1st approach: which is less efficient
function findDivisor(number) {
  const startime = performance.now();
  const arrayOfDivisor = [];
  for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
      arrayOfDivisor.push(i);
    }
  }
  const endtime = performance.now();
  const elapsedTime = endtime - startime;
  console.log("elapsedTime", elapsedTime.toPrecision());
  return arrayOfDivisor;
}
console.log("findDivisor", findDivisor(10000000));
// result: elapsedTime 56.85770000517368
```

```js
// 2nd approach: which is more efficient
function findDivisor(number) {
  const startime = performance.now();
  const arrayOfDivisor = [];
  for (let i = 1; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      arrayOfDivisor.push(i);
      // If the divisor is not equal to the square root, add its pair
      if (i !== Math.sqrt(number)) {
        arrayOfDivisor.push(number / i);
      }
    }
  }
  //   sorts the array in ascending order
  const sortedArrayOfDivisor = arrayOfDivisor.sort((a, b) => a - b);
  const endtime = performance.now();
  const elapsedTime = endtime - startime;
  console.log("elapsedTime", elapsedTime.toPrecision());
  return sortedArrayOfDivisor;
}
console.log("findDivisor", findDivisor(10000000));
// result: elapsedTime 0.29659999907016754
```

###### Common Big O notation For Algorithm complexity Analysis:

- **O(1) Constant complexity:** Constant complexity denoted as **O(1)** is a measure of algorithmic efficiency. An algorithm is said to have constant complexity if the execution time and space of the algorithm remains constant, regardless of the size of the input data. In other words, an algorithm's execution, does not depend on the size of the input. An example of a constant complexity is acessing an element in an array by it's index as shown below.

```js
// function for retrieving an item from an array by index
function accessElementByIndex(arr, index) {
  if (
    !isNaN(index) &&
    Number.isInteger(index) &&
    index >= 0 &&
    index < arr.length
  ) {
    return arr[index];
  } else {
    return "Index is out of bounds";
  }
}
// Example usage:
const arrayOfNumbers = [1, 2, 4, 5, 6, 7, 8];
console.log(accessItemByIndex(arrayOfNumbers, "a"));
```

- **O(log n) Logarithmic complexity:** Logarithmic complexity, denoted as **O(log n)**, is a measure of algorithmic efficiency where the execution of an algorithm grows logarithmically with the size of the input data Logarithmic complexity. it means that the time and space complexity of the algorithm increases in proportion to the logarithm of the input size. An example of a logarithmic complexity is shown below.

```js
// A binary search function for find the index of a target element in a sorted array.
function binarySearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1; // Target not found
}
// Example usage:
const arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7];
console.log(binarySearch(arr, 5));
```

- **O(n) Linear complexity:** Linear complexity, denoted as **O(n)**, is a measure of algorithmic efficiency where the execution time and space of an algorithm grows linearly with the size of the input data. In other words, as the input size increases, the time and space required to complete the algorithm increases proportionally. An example of a linear complexity is shown below.

```js
// A function for finding the maximum element in an array
function findMaxElement(arr) {
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max; // Return the maximum element in the array
}

// Example usage:
const arrayOfNumbers = [5, 2, 8, 1, 9, 4];
console.log(findMaxElement(arrayOfNumbers));
```

- **O(n^2) Quadratic complexity:** Quadratic complexity, denoted as **O(n^2)**, is a measure of algorithmic efficiency where the execution time and space of an algorithm grows quadratically with the size of the input data. In other words, as the input size increases, the time and space required to complete the algorithm increases proportionally to the square of the input size. An example of a quadratic time complexity is shown below.

```js
// A bubble sort function for sorting numbers in an array
function bubbleSort(arr) {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap them if they are in the wrong order
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

// Example usage:
const unsortedArrayOfNumbers = [64, 25, 12, 22, 11];
console.log(bubbleSort(unsortedArray));
```

- **O(n^3) Cubic complexity:** Cubic complexity, denoted as **O(n^3)**, is a measure of algorithmic efficiency where the execution time and space of an algorithm grows cubically with the size of the input data. In simpler terms, as the input size increases, the time and space required to complete the algorithm increases proportionally to the cube of the input size. An example of a cubic time complexity is shown below.

```js
function sumOfMatrix(matrix) {
  const n = matrix.length;
  let totalSum = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < n; k++) {
        // Accumulate the sum of all elements
        totalSum += matrix[i][j][k];
      }
    }
  }

  return totalSum;
}

// Example usage:
const threeDMatrix = [
  [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ],
  [
    [10, 11, 12],
    [13, 14, 15],
    [16, 17, 18],
  ],
  [
    [19, 20, 21],
    [22, 23, 24],
    [25, 26, 27],
  ],
];

console.log(sumOfMatrix(threeDMatrix));
```

- **O(2^n) Exponential complexity:** Exponentia complexity, denoted as **O(2^n**) or sometimes
  **O(k^n)**, is a measure of algorithmic efficiency where the execution time and space of an algorithm grows exponentially with the size of the input data. In simple terms, as the input size increases, the time and space required to complete the algorithm increases exponentially, typically doubling with each additional element in the input. An example of a exponential time complexity is shown below.

```js
function fibonacci(n) {
  if (n <= 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

// Example usage:
console.log(fibonacci(5));
```

The goal of algorithm analysis is to understand the algorithm’s efficiency by calculating f(n). However, it can be challenging to calculate f(n). Big-O notation provides some fundamental ways to simplify any algorithm to help developers compute.

###### Simplifying Big O expressions

- O(2n) can be simplified to O(n)
- O(500) can be simplified to O(1)
- O(13n^2) can be simplified to O(n^2)
- O(n+10) can be simplified to O(n)
- O(1000n+50) can be simplified to O(n)
- O(n^2+5n+8) can be simplified to O(n^2)

###### Important things to take note of in Big O notation

- Arithmetic operations are constant time
- Variable assignment has a constant time
- Accessing element in an array by index or in an object by keys has a constant time
- In a loop, the complexity of an algorithm is the length of the loop multiplied by the complexity of whatever happens in the loop
