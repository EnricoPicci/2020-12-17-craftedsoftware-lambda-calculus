// run the example with the command
// node ./src/numbers/02-successor.js

let THREE = f => x => f(f(f(x)))

let f = x => x + 1
let x = 0

SUCC = n => f => x => f(n(f)(x)) // equivalent to λn.λf.λx.f(nfx)

console.log("Show me SUCC of THREE", SUCC(THREE)(f)(x))
