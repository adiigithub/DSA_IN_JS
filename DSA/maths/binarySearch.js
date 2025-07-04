function binarySearch(arr,target){

    let rightIndex=arr.length-1;
    let leftIndex=0;

    while(leftIndex <= rightIndex)
    {
        let midIndex=Math.floor((leftIndex+rightIndex)/2)
        if(target===arr[midIndex]){
            return midIndex
        }
        if(target<arr[midIndex]){
            rightIndex=midIndex-1
        }else{
            leftIndex=midIndex+1
        }
    }
return -1
}
console.log(binarySearch([ -5, 2, 4, 6, 10 ],4));

//O(logn) because it is half unde loop