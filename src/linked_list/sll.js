class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  push(data) {
    const node = new Node(data)

    if (!this.head) {
      this.head = node
      this.tail = node
    } else {
      this.tail.next = node
      this.tail = node
    }

    this.length++
  }

  pop() {
    if (!this.head) return null

    let current = this.head
    let newTail = current

    while (current.next) {
      newTail = current
      current = current.next
    }

    this.tail = newTail
    this.tail.next = null

    this.length--

    return current.data
  }

  shift() {
    if (!this.head) throw new Error('List is empty')
    this.head = this.head.next
    this.length--

    return this
  }

  unshift(data) {
    const node = new Node(data)

    if (!this.head) {
      this.head = node
      this.tail = node
    } else {
      node.next = this.head
      this.head = node
    }

    this.length++

    return this
  }

  isEmpty() {
    return this.length === 0
  }

  top() {
    if (!this.head) null

    return this.head.data
  }
}

module.exports = SinglyLinkedList
