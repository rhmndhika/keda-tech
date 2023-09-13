//No.1
function manualSortDescending(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] < arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

const inputArray = [1, 2, 4, 3, 5, 3, 2, 1];
const sortedArray = manualSortDescending(inputArray);
console.log(sortedArray); 


//No.2
function maxSubarraySum(arr, num) {
  if (num > arr.length) {
    return null; 
  }

  let maxSum = 0;
  let tempSum = 0;

  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  tempSum = maxSum;

  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}

// Test cases
console.log(maxSubarraySum([100, 200, 300, 400], 2)); 
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); 
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)); 



//No.3
function sumEvenNumbers(obj) {
  let total = 0;

  for (let key in obj) {
    if (typeof obj[key] === 'object') {
      total += sumEvenNumbers(obj[key]); 
    } else if (typeof obj[key] === 'number' && obj[key] % 2 === 0) {
      total += obj[key]; 
    }
  }

  return total;
}

//Test
const input1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
};

const input2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
  d: 1,
  e: { e: { e: 4 }, ee: 'car' }
};

console.log(sumEvenNumbers(input1)); 
console.log(sumEvenNumbers(input2)); 
