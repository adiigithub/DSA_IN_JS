function linearSearch() {
  let arr = [-5, 2, 10, 4, 6];
  let element = 6;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]===element) {
      return [i];
    }
  }
  return -1;
}

console.log(linearSearch());
//O(n)

 let arr = [-5, 2, 10, 4, 6];
 console.log(arr.sort((a,b)=>a-b));
 