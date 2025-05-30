### Welcome to the Algorithm Series

Welcome back to another section of *Discovering JavaScript's Hidden Secrets*. Having dicusssed searching algorithms, we now begin our exploration of **sorting algorithms**—a core part of solving data-related problems in programming.

This part of the series dives into **searching algorithms**—what they are, why they matter, and how two fundamental types (Linear and Binary Search) work in practice.

---

### What Is a Sorting Algorithm?

 A **sorting algorithms** Sorting algorithms is a step-by-step procedure designed to arrange a collection of data (such as an array or list) in a specific order—most commonly in ascending or descending order. They are fundamental in computer science because sorted data enables faster searching, efficient data retrieval, and optimized operations in databases and real-world applications.


---

### Why Are Sorting Algorithms Important?

Sorting algorithms are essential in both everyday computing and advanced software systems. They play a major role in:

1. **Faster Search & Retrieval**: Binary Search: Requires sorted data to achieve O(log n) search time (vs. O(n) for linear search). Databases: Indexing (e.g., B-trees) relies on sorted keys for quick record retrieval. Sorted lists enable fast prefix matching (e.g., Google suggestions).
2. **Efficient Data Processing**: Sorting helps in aggregation, joining datasets (like SQL ORDER BY), and trend analysis.
3. **Improved User Experience**: In E-commerce Products sorted by price, rating, or popularity (Amazon, eBay). In Music/Video Streaming Recommendations sorted by user preference (Spotify, Netflix).

4. **Optimized Storage & Memory**: Database Optimization works efficiently with sorted data which allows for efficient compression (run-length encoding).

---

### Types of Sorting Algorithms

There are several searching algorithms used in computer science, including:

* **Bubble Sort**
* **Insertion Sort**
* **QuickSort**
* **Merge Sort**
* **Heap Sort** 
* **Radix Sort** 

---

### Bubble Sort

**Bubble Sort** Bubble Sort is a simple comparison-based sorting algorithm that repeatedly steps through the list to be sorted, compares adjacent elements, and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted. The algorithm gets its name from the way smaller elements "bubble" to the top of the list (beginning of the array) while larger elements "sink" to the bottom (end of the array) with each iteration.
* **Time Complexity**:  O(n²)
* **Design Technique**: Brute Force
* **Use Case**: Works on sorted data

**Example:**

function bubbleSort(arr) {
    let n = arr.length;
    let swapped;
    
    // Outer loop for passes
    for (let i = 0; i < n - 1; i++) {
        swapped = false;
        
        // Inner loop for comparisons
        // The last i elements are already in place
        for (let j = 0; j < n - i - 1; j++) {
            // Compare adjacent elements
            if (arr[j] > arr[j + 1]) {
                // Swap if they are in the wrong order
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
            }
        }
        
        // If no swaps occurred in the inner loop, the array is sorted
        if (!swapped) break;
    }
    
    return arr;
}

// Example usage
const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
console.log("Unsorted array:", unsortedArray);
const sortedArray = bubbleSort(unsortedArray);
console.log("Sorted array:", sortedArray);
---

### Insertion Sort

**Insertion Sort** Insertion Sort is a simple, comparison-based sorting algorithm that builds the final sorted array one element at a time. It works similarly to how you might sort a hand of playing cards:
tart with the second element (assuming the first is already "sorted").

Compare it with the previous elements and insert it into the correct position in the sorted part.

Repeat until the entire array is sorted.
* **Time Complexity**: O(n²)
* **Design Technique**: Brute Force
* **Use Case**: Requires unsorted data

**Example:**
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i]; // Current element to insert
        let j = i - 1; // Start comparing with the previous element
        
        // Shift elements greater than 'current' to the right
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j]; // Shift right
            j--;
        }
        
        // Insert 'current' in the correct position
        arr[j + 1] = current;
    }
    return arr;
}

// Example Usage
const unsortedArray = [12, 11, 13, 5, 6];
console.log("Unsorted Array:", unsortedArray);
const sortedArray = insertionSort(unsortedArray);
console.log("Sorted Array:", sortedArray);

---
### QuickSort

**QuickSort** QuickSort is a highly efficient divide-and-conquer sorting algorithm that works by: Selecting a "pivot" element from the array. Partitioning the array into two subarrays: Elements less than the pivot (left subarray). Elements greater than the pivot (right subarray). Recursively sorting the subarrays until the entire array is sorted.

* **Time Complexity**: O(n²)
* **Design Technique**: Divide and Conquer
* **Use Case**: Requires sorted data

**Example:**

function quickSort(arr, low = 0, high = arr.length - 1) {
    if (low < high) {
        // Partition the array and get the pivot index
        const pivotIndex = partition(arr, low, high);
        
        // Recursively sort the left and right subarrays
        quickSort(arr, low, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, high);
    }
    return arr;
}

function partition(arr, low, high) {
    const pivot = arr[high]; // Choose the last element as pivot
    let i = low; // Index of smaller element
    
    for (let j = low; j < high; j++) {
        // If current element is <= pivot, swap it with arr[i]
        if (arr[j] <= pivot) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i++;
        }
    }
    
    // Swap pivot (arr[high]) with arr[i] (correct position)
    [arr[i], arr[high]] = [arr[high], arr[i]];
    return i; // Return pivot index
}

// Example Usage
const unsortedArray = [10, 7, 8, 9, 1, 5];
console.log("Unsorted Array:", unsortedArray);
const sortedArray = quickSort([...unsortedArray]); // Avoid modifying original
console.log("Sorted Array:", sortedArray);

---

### Merge Sort

**Merge Sort** Merge Sort is a divide-and-conquer sorting algorithm that works by: Dividing the unsorted array into two halves. Recursively sorting each half. Merging the two sorted halves into a single sorted array.

* **Time Complexity**: O(n log n)
* **Design Technique**: Divide and Conquer
* **Use Case**: unsorted array

**Example:**

function mergeSort(arr) {
    if (arr.length <= 1) return arr; // Base case
    
    // Split the array into two halves
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
    
    // Recursively sort and merge
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    
    // Compare and merge
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }
    
    // Concatenate remaining elements
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// Example Usage
const unsortedArray = [38, 27, 43, 3, 9, 82, 10];
console.log("Unsorted Array:", unsortedArray);
const sortedArray = mergeSort([...unsortedArray]); // Avoid modifying original
console.log("Sorted Array:", sortedArray);

### Heap Sort

**Heap Sort** Heap Sort is a comparison-based sorting algorithm that uses a binary heap data structure to sort elements. It works in two main phases: Heap Construction: Convert the input array into a max-heap (or min-heap). Sorting: Repeatedly extract the largest element (for max-heap) and place it at the end of the array.

* **Time Complexity**: 	O(n log n)
* **Design Technique**: Divide and Conquer
* **Use Case**: Requires sorted data

**Example:**

function heapSort(arr) {
    const n = arr.length;

    // Build max-heap (start from last non-leaf node)
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }

    // Extract elements one by one
    for (let i = n - 1; i > 0; i--) {
        // Move root (max) to end
        [arr[0], arr[i]] = [arr[i], arr[0]];
        // Heapify reduced heap
        heapify(arr, i, 0);
    }
    return arr;
}

function heapify(arr, heapSize, rootIdx) {
    let largest = rootIdx;
    const left = 2 * rootIdx + 1;
    const right = 2 * rootIdx + 2;

    // Find largest among root, left, and right
    if (left < heapSize && arr[left] > arr[largest]) {
        largest = left;
    }
    if (right < heapSize && arr[right] > arr[largest]) {
        largest = right;
    }

    // Swap and continue heapifying if needed
    if (largest !== rootIdx) {
        [arr[rootIdx], arr[largest]] = [arr[largest], arr[rootIdx]];
        heapify(arr, heapSize, largest);
    }
}

// Example Usage
const unsortedArray = [12, 11, 13, 5, 6, 7];
console.log("Unsorted Array:", unsortedArray);
const sortedArray = heapSort([...unsortedArray]); // Avoid modifying original
console.log("Sorted Array:", sortedArray);

### Radix Sort

**Radix Sort** Radix Sort is a non-comparative integer sorting algorithm that processes digits from the least significant digit (LSD) to the most significant digit (MSD) (or vice versa). It groups numbers by each digit and repeatedly sorts them, resulting in a fully sorted array.

* **Time Complexity**: O(d·(n + k))
* **Design Technique**: Digit-wise Processing
* **Use Case**: Requires sorted data

**Example:**

function radixSort(arr) {
    const maxNum = Math.max(...arr);
    let maxDigits = maxNum.toString().length;

    for (let digitPlace = 0; digitPlace < maxDigits; digitPlace++) {
        arr = countingSortByDigit(arr, digitPlace);
    }
    return arr;
}

function countingSortByDigit(arr, digitPlace) {
    const count = Array(10).fill(0);
    const output = Array(arr.length).fill(0);

    // Count occurrences of each digit
    for (let num of arr) {
        const digit = getDigit(num, digitPlace);
        count[digit]++;
    }

    // Compute cumulative counts
    for (let i = 1; i < 10; i++) {
        count[i] += count[i - 1];
    }

    // Place numbers in output array (stable sort)
    for (let i = arr.length - 1; i >= 0; i--) {
        const digit = getDigit(arr[i], digitPlace);
        output[count[digit] - 1] = arr[i];
        count[digit]--;
    }

    return output;
}

function getDigit(num, place) {
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

// Example Usage
const unsortedArray = [170, 45, 75, 90, 802, 24, 2, 66];
console.log("Unsorted Array:", unsortedArray);
const sortedArray = radixSort([...unsortedArray]);
console.log("Sorted Array:", sortedArray);
---
### Conclusion

Searching algorithms are at the heart of data processing, enabling computers to quickly and accurately locate information. Whether you're working with unsorted or sorted data, understanding how to apply linear and binary search is fundamental to writing efficient and responsive code.

In the next section of *Discovering JavaScript’s Hidden Secrets*, we’ll explore **sorting algorithms**, diving into their logic, performance, and real-world uses. By mastering these foundational concepts, you'll be better equipped to build high-performance applications and solve complex problems with confidence.

---
