// run the example with the command
// node ./src/numbers/sum.js

three = f => x => f(f(f(x)))
five = f => x => f(f(f(f(f(x)))))

succ = n => f => x => f(n(f)(x))

SUM = n => m => n(succ)(m)

let f = x => x + 1
let x = 0

console.log("Show me three + five", SUM(three)(five)(f)(x))
console.log("Show me five + three", SUM(five)(three)(f)(x))
