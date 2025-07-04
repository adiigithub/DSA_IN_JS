function isPowerOfTwo(n){
    if(n<1){
        return false
    }
    while(n>1){
        if(n%2!==0){
            return false
        }
        n=n/2
    }
    return true

}
console.log(isPowerOfTwo(2))
console.log(isPowerOfTwo(6))
console.log(isPowerOfTwo(8))

//for rthis solution the time complexity is Big-O=O(logn)


//here the another solution 
/*
function isPowerofTwoBitwise(n){
if(n<1){
return false
}

return (n&(n-1))===0


}
 */

//Big-O = O(1)