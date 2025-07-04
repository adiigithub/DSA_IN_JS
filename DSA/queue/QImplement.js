/**
 *  Queue Implementation--->
 *  enqueue(element)-> add an element to the queue
 *  dequeue()-> remove the oldest element from the queue
 *  peek()-> get the value of the element at the front of the queue without removing it
 *  isEmpty()-> check if queue is empty
 *  size()-> get the number of element in the queue
 *  print()-> visulize the element of queue
 *
 */

class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    return this.items.shift();
  }

  isEmpty() {
    return this.items.length === 0;
  }

  peek() {
    if (!this.isEmpty()) {
      return this.items[0];
    }
    return null;
  }

  size() {
    return this.items.length;
  }

  print() {
    console.log(this.items.toString());
  }
}

const queue = new Queue();
console.log(queue.isEmpty());

queue.enqueue(10);
queue.enqueue(30);
queue.enqueue(20);
console.log(queue.size());

queue.print();
console.log(queue.dequeue());
console.log(queue.peek());
