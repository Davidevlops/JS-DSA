class CustomArray {
    constructor(...elements) {
      this.length = 0;
      this.data = {};
      elements.forEach((element, index) => {
        this.data[index] = element;
        this.length++;
      });
    }
  
    // Get element at index
    get(index) {
      return this.data[index];
    }
  
    // Push element to end of array
    push(...items) {
      items.forEach((item) => {
        this.data[this.length] = item;
        this.length++;
      });
      return this.length;
    }
  
    // Pop element from end of array
    pop() {
      if (this.length === 0) return undefined;
      const lastItem = this.data[this.length - 1];
      delete this.data[this.length - 1];
      this.length--;
      return lastItem;
    }
  
    // Delete element at index
    delete(index) {
      if (index < 0 || index >= this.length) return undefined;
      const deletedItem = this.data[index];
      this.shiftItems(index);
      return deletedItem;
    }
  
    // Helper function to shift items to the left after deletion
    shiftItems(index) {
      for (let i = index; i < this.length - 1; i++) {
        this.data[i] = this.data[i + 1];
      }
      delete this.data[this.length - 1];
      this.length--;
    }
  
    // Additional method to clear the array
    clear() {
      this.length = 0;
      this.data = {};
    }
  
    // Additional method to iterate over the array
    forEach(callback) {
      for (let i = 0; i < this.length; i++) {
        callback(this.data[i], i, this.data);
      }
    }
  
    // Additional method to map over the array
    map(callback) {
      const newArray = new CustomArray();
      for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this.data[i], i, this.data));
      }
      return newArray;
    }
  
    // Additional method to filter elements of the array
    filter(callback) {
      const filteredArray = new CustomArray();
      for (let i = 0; i < this.length; i++) {
        if (callback(this.data[i], i, this.data)) {
          filteredArray.push(this.data[i]);
        }
      }
      return filteredArray;
    }
  
    // Additional method to reduce the array to a single value
    reduce(callback, initialValue) {
      let accumulator = initialValue === undefined ? undefined : initialValue;
      for (let i = 0; i < this.length; i++) {
        if (accumulator !== undefined) {
          accumulator = callback(accumulator, this.data[i], i, this.data);
        } else {
          accumulator = this.data[i];
        }
      }
      return accumulator;
    }
  
    // Additional method to return the array as a string
    toString() {
      return Object.values(this.data).join(', ');
    }
  }
  
  
  // Example usage:
  const array = new CustomArray();
  array.push(1);
  array.push(2);
  array.push(3);
  array.get(3);
  array.pop();
  console.log(array);
  // resilt: Array { length: 2, data: { '0': 1, '1': 2 } }