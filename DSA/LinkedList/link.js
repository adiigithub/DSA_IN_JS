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
    insert(value,index){
        if(index<0||index>this.size){
            return
        }
        if(index===0){
            this.perpend(value)
        }else{
            const node = new Node(value)
            let prev=this.head
            for(let i=0;i<index-1;i++){
                prev=prev.next
            }
            node.next=prev.next
            prev.next=node
            this.size++
        }

    }
    removeFrom(index){
        if(index<0||index>=this.size){
            return null
        }
        let removeNode
        if(index===0){
            removeNode=this.head
            this.head=this.head.next
        }else{
            let prev=this.head
            for(let i=0;i<index-1;i++){
                prev=prev.next
            }
            removeNode=prev.next
            prev.next=removeNode.next
        }
        this.size--
        return removeNode.value  
      }
    removeValue(value){
        if(this.isEmpty()){
            return null
        }
        if(this.head.value===value){
        this.head=this.head.next
        this.size--
        return value
        }else{
            let prev = this.head
            while(prev.next && prev.next.value !== value){
                prev = prev.next
            }
            if(prev.next){
               let removeNode=prev.next
                prev.next = removeNode.next
                this.size--
                return value
            }
            return null
        }
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
// list.print()
// list.perpend(10)
// list.print()
// list.perpend(20)
// list.perpend(30)
list.print()
list.insert(20,0)
list.insert(30,1)
list.print()
console.log(list.removeFrom(0));
list.print()
console.log(list.getSize());
