function cartesian_Product(arr_A,arr_B){
    const result=[]
    for(let i=0;i<arr_A.length;i++){
        for(let j=0;j<arr_B.length;j++){
            result.push([arr_A[i],arr_B[j]])
        }
    }
   return result
}
 const arr_A=[1,2]
 const arr_B=[3,4,5]
 console.log(cartesian_Product(arr_A,arr_B));
 
 //O(mn)
 //because the array is not same length first is n, and second is m