function findDivisor(number) {
  const startime = performance.now();
  const arrayOfDivisor = [];
  for (let i = 0; i <= number; i++) {
    if (number % i === 0) {
      arrayOfDivisor.push(i);
    }
  }
  const endtime = performance.now();
  const elapsedTime = endtime - startime;
  console.log("elapsedTime", elapsedTime.toPrecision());
  return arrayOfDivisor;
}
console.log("findDivisor", findDivisor(0));
// 10000000

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
  const sortedArrayOfDivisor = arrayOfDivisor.sort((a, b) => a - b);
  const endtime = performance.now();
  const elapsedTime = endtime - startime;
  console.log("elapsedTime", elapsedTime.toPrecision());
  return sortedArrayOfDivisor;
}

console.log("findDivisor", findDivisor(0));
