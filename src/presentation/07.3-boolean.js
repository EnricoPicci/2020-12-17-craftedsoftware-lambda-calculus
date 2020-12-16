// run the example with the command
// node ./src/presentation/07.1-boolean.js

let ifThenElse = cond => then => else_ => cond ? then : else_

t = ifThenElse(true)
f = ifThenElse(false)

then = 'then'
else_ = 'else'
anyValue = 'any value'

console.log("Show me t(then)(else)", t(then)(else_))
console.log("Show me t(then)(else)", t(then)(anyValue))
console.log("Show me f(then)(else)", f(then)(else_))
console.log("Show me f(then)(else)", f(anyValue)(else_))

