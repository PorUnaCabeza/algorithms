const { Stack } = require('./Stack')

const operatorStack = new Stack()
const optStack = new Stack()
const value = '(1+((2+3)*(4*5)))'
const array = value.split('')
array.forEach(str => {
  if (/\d+/.test(str)) {
    operatorStack.push(parseInt(str))
  } else if (/\+|-|\*|\\/.test(str)) {
    optStack.push(str)
  } else if (str === ')') {
    const op = optStack.pop()
    let v = operatorStack.pop()
    if (op === '+') v += operatorStack.pop()
    else if (op === '-') v -= operatorStack.pop()
    else if (op === '*') v *= operatorStack.pop()
    else if (op === '/') v /= operatorStack.pop()
    operatorStack.push(v)
  }
})

console.log(optStack)
console.log(operatorStack)
