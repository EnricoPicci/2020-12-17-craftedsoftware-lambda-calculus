// run the example with the command
// node ./src/numbers/test.js

let zero = (f) => (x) => x; // in lambda calculus this is λf.λx.x
let one = (f) => (x) => f(x); // in lambda calculus this is λf.λx.fx
let two = (f) => (x) => f(f(x)); // in lambda calculus this is λf.λx.f(fx)
let three = (f) => (x) => f(f(f(x))); // in lambda calculus this is λf.λx.λx.f(f(fx))

let f = (x) => x + 1;
let x = 0;

func_0 = f => x => f(x)
func_1 = n => f => x => n(f(x))
func_2 = n => m => f => x => n(m(f(x)))

console.log('Show me func_0(f)(x)', func_0(f)(x));
console.log('Show me func_1(two)(f)(x)', func_1(two)(f)(x)(x));