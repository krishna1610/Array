//Using temp array
function array_rotation1(arr, d) {
  if (d === 0) {
    return arr;
  }
  d = d % arr.length;

  let temp = [];
  for (let i = d; i < arr.length; i++) {
    temp.push(arr[i]);
  }
  for (let i = 0; i < d; i++) {
    temp.push(arr[i]);
  }
  arr = [...temp];
  return arr;
}
console.log(array_rotation1([1, 2, 3, 4, 5, 6, 7], 2));
console.log(array_rotation1([3, 4, 5, 6, 7, 1, 2], 2));
console.log(array_rotation1([3, 4, 5, 6, 7, 1, 2], 0));
console.log(array_rotation1([3, 4, 5, 6, 7, 1, 2], 8));
// Time complexity: O(N)
// Auxiliary Space: O(N)

//Reversal algorithm for Array rotation

function reverseArr(arr, start, end) {
  for (let i = start; i <= end; i++) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start = start + 1;
    end = end - 1;
  }
  return arr;
}
function array_rotation2(arr, d) {
  if (d === 0) {
    return arr;
  }
  d = d % arr.length;
  reverseArr(arr, 0, d - 1);
  reverseArr(arr, d, arr.length - 1);
  reverseArr(arr, 0, arr.length - 1);
  return arr;
}
console.log(array_rotation2([1, 2, 3, 4, 5, 6, 7], 2));
console.log(array_rotation2([3, 4, 5, 6, 7, 1, 2], 2));
console.log(array_rotation2([3, 4, 5, 6, 7, 1, 2], 0));
console.log(array_rotation2([3, 4, 5, 6, 7, 1, 2], 8));
// Time complexity: O(N)
// Auxiliary Space: O(1)
