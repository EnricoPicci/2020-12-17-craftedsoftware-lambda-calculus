// run the example with the command
// node ./src/presentation/04.4-arithmetics.js

let two = f => x => f(f(x))  
let three = f => x => f(f(f(x)))  

let f = x => x + 1
let x = 0

succ = n => f => x => f(n(f)(x))
sum = n => m => n(succ)(m)

console.log("Show me sum(two)(three)", sum(two)(three)(f)(x))
console.log("Show me sum(three)(three)", sum(three)(three)(f)(x))

