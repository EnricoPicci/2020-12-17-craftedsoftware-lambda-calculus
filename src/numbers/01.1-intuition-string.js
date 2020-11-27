// We define a less obvious f and less obvious x to see that Curch Lambda enconding can be "materialized"
// with strings of variable length
//
// run the example with the command
// node ./src/numbers/01.1-intuition-string.js

let ZERO = f => x => x        // in lambda calculus this is λf.λx.x
let ONE = f => x => f(x)      // in lambda calculus this is λf.λx.fx
let TWO = f => x => f(f(x))  // in lambda calculus this is λf.λx.f(fx)

let f = x => x + "*"
let x = "*"

console.log("Show me ZERO", ZERO(f)(x))
console.log("Show me ONE", ONE(f)(x))
console.log("Show me TWO", TWO(f)(x))

