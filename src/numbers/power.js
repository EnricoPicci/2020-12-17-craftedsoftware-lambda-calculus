// run the example with the command
// node ./src/numbers/power.js

let zero = (f) => (x) => x; // in lambda calculus this is λf.λx.x
let one = (f) => (x) => f(x); // in lambda calculus this is λf.λx.fx
let two = (f) => (x) => f(f(x)); // in lambda calculus this is λf.λx.f(fx)
let three = (f) => (x) => f(f(f(x))); // in lambda calculus this is λf.λx.λx.f(f(fx))

let f = (x) => x + 1;
let x = 0;

let three_power_two = two(three)(f);

let three_power_three = three(three)(f);

// let transform_1 = one(f => x => f(x))

// let transform_2 = (f => x => f(x))

// let transform_3 = x => (f => x => f(x))(x)

// let transform_4 = f => x => f(x)

// transform_4(f)(x)

console.log('Show me two ** three', three_power_two(x));

console.log('Show me three ** three', three_power_three(x));
