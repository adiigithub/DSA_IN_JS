const map=new Map([['a',1],['b',2]])
map.set('c',5)
for (const [key,value] of map){
 console.log(`${key}:${value}`)   
}