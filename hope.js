function getFactorials(array, n) {
  let result = [],
    i;

  for (i = 0; i < array.length; i++) {
    if (n === 0) {
      return "value of n should be higher than zero(0)";
    } //neglect zero value of n
    else if (array[i] % n !== 0) {
      return "value of every array elements should be exactly divisible by the value of n you provide";
    } //neglect fraction of the array of every elements
    else {
      result.push(
        getFactorial(Math.abs(array[i]) / Math.abs(n)) //using Math.abs for make all the elements of the array and value of n #positive
      );
    }
  }
  return Math.max(...result);
}

function getFactorial(x) {
  if (x === 0 || x === 1) return 1;
  else {
    return x * getFactorial(x - 1);
  }
}

const output = getFactorials([8, 12, 16], 4);
console.log(output);
