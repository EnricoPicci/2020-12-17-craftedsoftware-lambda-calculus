// run the example with the command
// node ./src/numbers/08.2-conditional.js

TRUE = x => y => x
FALSE = x => y => y

always_false = (x => y => x)(FALSE)
is_zero = n => n(always_false)(TRUE)

zero = f => x => x
one = f => x => f(x)
two = f => x => f(f(x))

console.log("Show is_zero(zero)", is_zero(zero)(true)(false))
console.log("Show is_zero(one)", is_zero(one)(true)(false))
console.log("Show is_zero(two)", is_zero(two)(true)(false))
