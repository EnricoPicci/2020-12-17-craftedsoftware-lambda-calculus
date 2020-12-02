// run the example with the command
// node ./src/numbers/01.1-numbers-intuition.js

let ZERO = f => x => x        // in lambda calculus this is λf.λx.x
let ONE = f => x => f(x)      // in lambda calculus this is λf.λx.fx
let TWO = f => x => f(f(x))  // in lambda calculus this is λf.λx.f(fx)

let f = x => x + 1
let x = 0

console.log("Show me ZERO", ZERO(f)(x))
console.log("Show me ONE", ONE(f)(x))
console.log("Show me TWO", TWO(f)(x))

