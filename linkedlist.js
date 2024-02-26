import { Node } from "./node.js";

class LinkedList {
  constructor(head) {
    this._head = new Node(head, null, null);
    this._tail = this._head;
  }

  append(value) {
    const newNode = new Node(value, this._tail, null);
    this._tail.next = newNode;
    this._tail = newNode;
  }

  prepend(value) {
    const newHead = new Node(value, null, this._head);
    this._head.prev = newHead;
    this._head = newHead;
  }

  size() {
    return getSize(this._head);
  }

  head() {
    return this._head;
  }

  tail() {
    return this._tail;
  }

  at(index) {
    return getDataAtIndex(this._head, index);
  }

  pop() {
    const poppedValue = this._tail;
    this._tail = this._tail.prev;
    this._tail.next = null;
    return poppedValue;
  }

  contains(value) {
    return isInsideList(this._head, value);
  }

  find(value) {
    return findValue(this._head, value, 0);
  }

  toString() {
    return linkedListString(this._head);
  }

  insertAt(value, index) {
    insertValueAt(this._head, value, index);
  }

  removeAt(index) {
    removeValueAt(this._head, index);
  }
}

const getSize = (node) => {
  if (node.next === null) {
    return 1;
  } else {
    return 1 + getSize(node.next);
  }
};

const getDataAtIndex = (node, count) => {
  if (node.next === null && count > 0) {
    throw console.error("index is out of list range");
  } else if (count === 0) {
    return node.value;
  } else {
    return getDataAtIndex(node.next, count - 1);
  }
};

const isInsideList = (node, value) => {
  if (value === node.value) {
    return true;
  } else if (value !== node.value && node.next === null) {
    return false;
  } else {
    return isInsideList(node.next, value);
  }
};

const findValue = (node, value, acc) => {
  if (node.value === value) {
    return acc;
  } else if (node.value !== value && node.next !== null) {
    return findValue(node.next, value, acc + 1);
  } else {
    return null;
  }
};

const linkedListString = (node) => {
  if (node.next !== null) {
    return `( ${node.value} ) --> ${linkedListString(node.next)}`;
  } else {
    return `( ${node.value} ) --> null`;
  }
};

const insertValueAt = (node, value, index) => {
  if (index === 0) {
    const newNode = new Node(value, node.prev, node);
    node.prev.next = newNode;
    node.prev = newNode;
  } else {
    insertValueAt(node.next, value, index - 1);
  }
};

const removeValueAt = (node, index) => {
  if (index === 0) {
    node.prev.next = node.next;
    if (node.next !== null) {
      node.next.prev = node.prev;
    }
  } else {
    removeValueAt(node.next, index - 1);
  }
};

export { LinkedList };
