const obj = {
    name:'aditya',
    age:21
}
obj.hobby='cricket'
delete obj.age

console.log(obj.age);
console.log(obj);

//Object.keys() .values() .entries()

/*
Insert-O(1)
Remove-O(1)
Access-O(1)
Search-O(n)
Object.Keys()-O(n)
Object.Values()-O(n)
object.entries()-O(n)

*/