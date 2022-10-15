const linear_Search = (arr, element) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      return i;
    }
  }
};
console.log(linear_Search([6, 89, 86, 76, 30, 24, 56, 78], 76));
