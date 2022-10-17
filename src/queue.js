const { NotImplementedError } = require('../extensions/index.js');

 const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  constructor(){
    this.firstEl = null;
    this.node = new ListNode()
  }

  getUnderlyingList() {
    return this.firstEl
  }

  enqueue(value) {

    if(this.firstEl === null){
      this.firstEl = new ListNode(value)
    } else{
      let current = this.firstEl;

      while(current.next){
        current = current.next
      }

      current.next = new ListNode(value)
    }
  }

  dequeue() {
    let current = this.firstEl; // FIFO
    this.firstEl = this.firstEl.next;
    return current.value;
  }
}

module.exports = {
  Queue
};
