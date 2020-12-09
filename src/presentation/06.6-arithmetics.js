// run the example with the command
// node ./src/numbers/06.6-arithmetics.js

let two = f => x => f(f(x))  
let three = f => x => f(f(f(x)))  

let f = x => x + 1
let x = 0

new_func = n => m => f => x => m(n)(f)(x)

console.log("Show me new_func(two)(three)", new_func(two)(three)(f)(x))
console.log("Show me new_func(three)(two)", new_func(three)(two)(f)(x))

