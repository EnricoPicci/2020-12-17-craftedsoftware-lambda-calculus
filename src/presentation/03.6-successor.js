// run the example with the command
// node ./src/presentation/03.6-successor.js

let three = f => x => f(f(f(x)))

let f = x => x + 1
let x = 0

succ = n => f => x => f(n(f)(x)) // equivalent to λn.λf.λx.f(nfx)

console.log("Show me succ of three", succ(three)(f)(x))
