function recursiveBinarySearch(arr, target) {
  return binarySearch(arr, target, 0, arr.length - 1);
}
function binarySearch(arr, target, leftIndex, rightIndex) {
  if (leftIndex > rightIndex) {
    return -1;
  }
  let midIndex = Math.floor((leftIndex + rightIndex) / 2);
  if (target === arr[midIndex]) {
    return midIndex;
  }
  if (target < arr[midIndex]) {
    return binarySearch(arr, target, leftIndex, midIndex - 1);
  } else {
    return binarySearch(arr, target, midIndex + 1, rightIndex);
  }
}
console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 6));
console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 2));

//O(logn)