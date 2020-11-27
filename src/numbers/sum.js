// run the example with the command
// node ./src/numbers/sum.js

THREE = f => x => f(f(f(x)))
FIVE = f => x => f(f(f(f(f(x)))))

SUCC = n => f => x => f(n(f)(x))

SUM = n => m => n(SUCC)(m)

let f = x => x + 1
let x = 0

console.log("Show me THREE + FIVE", SUM(THREE)(FIVE)(f)(x))
console.log("Show me FIVE + THREE", SUM(FIVE)(THREE)(f)(x))
