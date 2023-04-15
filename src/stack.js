const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.head = null
    this.length = 0
  }

  push(value) {
    let current;
    if (this.length === 0) this.head = new ListNode(value)
    else {
      current = this.head

      while (current.next) {
        current = current.next
      }
      current.next = new ListNode(value)
    }
    this.length++
  }

  pop() {
    let current = this.head
    if (this.length === 0) this.head = current.next
    else {
      let prev = null
      while (current.next) {
        prev = current
        current = current.next
      }
      prev.next = current.next
    }

    return current.value
  }

  peek() {
    let current = this.head
    if (this.length === 0) return current.value
    else {
      while (current.next) {
        current = current.next
      }
    }

    return current.value
  }
}

module.exports = {
  Stack
};
