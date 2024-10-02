class ListNode {
  constructor(data = null) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(node = null) {
    this.head = node;
    this.length = 1;
    this.tail = this.head;
  }

  push(val) {
    const newNode = new ListNode(val);
    this.tail.next = newNode;
    this.tail = this.tail.next;
    this.length++;
  }

  pop() {
    let current = this.head;
    let prev = null;

    while (current.next) {
      prev = current;
      current = current.next;
    }

    prev.next = null;
    this.tail = prev;
    this.length--;
  }

  insertAt(index, nodeToInsert) {
    if (index > this.length) {
      throw new Error('Index out of bound');
    }

    if (index === 0) {
      nodeToInsert.next = this.head;
      this.head = nodeToInsert;
      this.length++;
      return;
    }

    let current = this.head;
    let prev = null;
    let currentIndex = 0;

    while (currentIndex < index) {
      prev = current;
      current = current.next;
      currentIndex++;
    }

    prev.next = nodeToInsert;
    nodeToInsert.next = current;
    this.length++;
  }

  remove(val) {
    let current = this.head;
    let prev = null;

    while (current && current.data !== val) {
      prev = current;
      current = current.next;
    }

    if (!current) return;

    // if removing the last element, update the tail
    if (val === this.tail.data) {
      this.tail = prev;
    }

    prev.next = current.next;
    this.length--;
  }

  prepend(newNode) {
    if (newNode) {
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
      return this;
    }
  }

  getNode(index) {
    if (index > this.length) {
      return;
    }

    let idx = 1;
    let current = this.head;

    while (idx < index) {
      current = current.next;
      idx++;
    }

    return current.data;
  }

  getSize() {
    // return this.length;

    // OR

    let counter = 1;
    let current = this.head;

    while (current.next) {
      current = current.next;
      counter++;
    }

    return counter;
  }

  getLast() {
    // return this.tail.data;

    // OR

    return this.getNode(this.length);
  }

  clear() {
    this.head = null;
  }
}

const node = new ListNode(1);

const linkedList = new LinkedList(node);
// linkedList.push(2);
// linkedList.push(4);
// linkedList.insertAt(2, new ListNode(3));
// linkedList.prepend(new ListNode(0));
// console.log(linkedList.getLast());

console.log(linkedList);
