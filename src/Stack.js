class Stack {
  constructor() {
    this.list = []
  }

  push(item) {
    this.list.push(item)
  }

  pop() {
    if (this.isEmpty()) {
      return null
    }
    return this.list.pop()
  }
  isEmpty() {
    return this.size() <= 0
  }
  size() {
    return this.list.length
  }
}

module.exports = {
  Stack
}
