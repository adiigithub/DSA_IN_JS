function fibonachi(n){
    let fib=[0,1]
    for(let i=2;i<n;i++){
        fib[i]=fib[i-1]+fib[i-2];
    }
    return fib
}
console.log(fibonachi(5))
console.log(fibonachi(4))

// Big-O = O(n)