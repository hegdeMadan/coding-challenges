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
    this.tail.next = new ListNode(val);
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
    let idx = 0;
    let current = this.head;

    while (idx !== index - 1) {
      current = current.next;
      idx++;
    }
    nodeToInsert.next = current.next;
    current.next = nodeToInsert;
    this.length++;
  }
}

const node = new ListNode(1);

const linkedList = new LinkedList(node);
linkedList.push(2);
linkedList.push(4);
linkedList.insertAt(2, new ListNode(5));
// linkedList.pop();
console.log(linkedList);
