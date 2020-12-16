// run the example with the command
// node ./src/presentation/02.3-numbers-intuition.js

let zero = (f) => (x) => x; // in lambda calculus this is λf.λx.x
let one = (f) => (x) => f(x); // in lambda calculus this is λf.λx.fx
let two = (f) => (x) => f(f(x)); // in lambda calculus this is λf.λx.f(fx)

let f = (x) => x + 1;
let x = 0;

console.log('Show me zero', zero(f)(x));
console.log('Show me one', one(f)(x));
console.log('Show me two', two(f)(x));
