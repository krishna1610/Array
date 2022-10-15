// given array should be sorted  then only binary search will work

// without left and right gived
const binary_search = (sortedArr, num) => {
  let left = 0;
  let right = sortedArr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (sortedArr[mid] === num) {
      return mid;
    } else if (num < sortedArr[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
};
console.log(binary_search([1, 2, 3, 4, 5, 6], 2));

// with left and right given
// it will be recursive call
const binary_search1 = (sortedArr, num, left, right) => {
  if (left > right) {
    return -1;
  }
  let mid = Math.floor((left + right) / 2);
  if (sortedArr[mid] === num) {
    return mid;
  } else if (sortedArr[mid] > num) {
    return binary_search1(sortedArr, num, left, mid - 1);
  } else {
    return binary_search1(sortedArr, num, mid + 1, right);
  }
};
console.log("1st ans", binary_search1([1, 2, 3, 4, 5, 6], 3, 0, 5));
console.log("2nd ans", binary_search1([1, 2, 3, 4, 5, 6], 2, 0, 5));

function binarySearchLeftLimit(arr, x) {
  let index = binary_search(arr, x);
  if (index < 0) {
    return index;
  }
  for (let i = index; i >= 0; i--) {
    if (arr[i] < x) {
      return i + 1;
    }
  }
  return 0;
}
console.log(binarySearchLeftLimit([1, 2, 3, 4, 5, 6], 5));
