// run the example with the command
// node ./src/numbers/05.2-arithmetics. js

let TWO = f => x => f(f(x))  // in lambda calculus this is λf.λx.f(fx)
let THREE = f => x => f(f(f(x)))  // in lambda calculus this is λf.λx.λx.f(f(fx))

let f = x => x + 1
let x = 0

console.log("Show me TWO(THREE)(f)(x)", TWO(THREE)(f)(x))
console.log("Show me THREE(THREE)(f)(x)", THREE(THREE)(f)(x))
console.log("Show me THREE(TWO)(f)(x)", THREE(TWO)(f)(x))

