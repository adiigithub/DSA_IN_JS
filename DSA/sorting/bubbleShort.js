function bubbleShort(arr) {
  let swapped;

  do {
    swapped = false;

    for (let i = 0; i < arr.length ; i++) {
      if (arr[i] < arr[i + 1]) {
        swap(arr,i,i+1);
        swapped = true;
      }
    }
  } while (swapped);
 
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

const arr=[-6, 20, 8, -2, 4]
bubbleShort(arr);

console.log(arr);

// O(2^n)