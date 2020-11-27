// run the example with the command
// node ./src/numbers/03-power.js

let ZERO = f => x => x        // in lambda calculus this is λf.λx.x
let ONE = f => x => f(x)      // in lambda calculus this is λf.λx.fx
let TWO = f => x => f(f(x))  // in lambda calculus this is λf.λx.f(fx)
let THREE = f => x => f(f(f(x)))  // in lambda calculus this is λf.λx.λx.f(f(fx))

let f = x => x + 1
let x = 0

let THREE_power_TWO = TWO(THREE)(f)

let THREE_power_THREE = THREE(THREE)(f)

// let transform_1 = ONE(f => x => f(x))

// let transform_2 = (f => x => f(x))


// let transform_3 = x => (f => x => f(x))(x)

// let transform_4 = f => x => f(x)

// transform_4(f)(x)

console.log("Show me TWO ** THREE", THREE_power_TWO(x))

console.log("Show me THREE ** THREE", THREE_power_THREE(x))
