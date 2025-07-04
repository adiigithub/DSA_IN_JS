class Queue{
    constructor(){
        this.items={}
        this.rear=0;
        this.front=0
    }
    enqueue(element){
        this.items[this.rear]=element
        this.rear++
    }
    dequeue(){
        const item = this.items[this.front]
        delete this.items[this.front]
        this.front++
        return item
    }
    isEmpty(){ 
        return this.real-this.front===0
    }
    peek(){
        return this.items[this.front]
    }
    size(){
        return this.real-this.front
    }
    print(){
        console.log(this.items);
        
    }

}

const que=new Queue()
console.log(que.isEmpty())
que.enqueue(10)
que.enqueue(105)
que.enqueue(101)
que.enqueue(100)
que.print()