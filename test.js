function accessItemByIndex(arr, index) {
    if (!isNaN(index) && Number.isInteger(index) && index >= 0 && index < arr.length) {
      return arr[index];
    } else {
      return 'Index is out of bounds';
    }
  }
  
  const arrayOfNumbers = [1, 2, 4, 5, 6, 7, 8];
  console.log(accessItemByIndex(arrayOfNumbers, "a"));
  
