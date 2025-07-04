const arr = [1, 2, 3, "Aditya"];
arr.push(4);
arr.unshift(0);
arr.pop(); //it can used for remove the last aliment
arr.shift(); //  remove first elemant
console.log(arr);
for (const item of arr) {
  console.log(item);
}
//some important thing known is map, filter ,reducer, concat, slice and splice

// Arrays - Big-O Time Complexity

/*
insert/remove from end -O(1)
inser/remove from beginning-O(n)
Access-O(1)
search-O(n)
push/pop-O(1)
shift/unshift/concat/slice/splice-O(n)
forEach/map/filter/reduce-O(n)
*/
