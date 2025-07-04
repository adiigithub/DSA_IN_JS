function recursiveFibonachi(n)
{
    if(n<2){
        return n
    }
return recursiveFibonachi(n-1) + recursiveFibonachi(n-2)
}

console.log(recursiveFibonachi(5));
console.log(recursiveFibonachi(6));
console.log(recursiveFibonachi(2));
console.log(recursiveFibonachi(7));

// O(2^n)