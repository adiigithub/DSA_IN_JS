class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}
class LinkedList{
    constructor(){
        this.head=null;
        this.size=0;
    }
    isEmpty(){
        return this.size===0;
    }
    getSize(){
        return this.size
    }
    perpend(value){
        const node=new Node(value)
        if(this.isEmpty()){
            this.head=node
        }
        else{
            node.next=this.head
            this.head=node
        }
        this.size++
    }
    append(){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head=node
        }else{
        let prev=this.head
        while(prev.next){
            prev=prev.next
        }
        prev.next=node
        }
        this.size++
    }
    print(){
        if(this.isEmpty){
            console.log('list is empty')
        }
        let curr = this.head
        let listvalue=''
        while(curr){
            listvalue +=`${curr.value}  `
            curr=curr.next
        }
        console.log(listvalue);
        
    }
}
const list = new LinkedList()
console.log(list.isEmpty())
console.log(list.getSize())
list.print()
list.perpend(10)
list.print()
list.perpend(20)
list.perpend(30)
list.print()