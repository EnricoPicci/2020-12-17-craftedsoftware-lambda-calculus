// run the example with the command
// node ./src/presentation/08.5-conditional.js

f = x => x + 1
x = 0

TRUE = x => y => x
FALSE = x => y => y

always_false = (x => y => x)(FALSE)
is_zero = n => n(always_false)(TRUE)

zero = f => x => x
one = f => x => f(x)
two = f => x => f(f(x))

a_stupid_function = n => is_zero(n)(one)(zero)

console.log("Show a_stupid_function(zero)", a_stupid_function(zero)(f)(x))
console.log("Show a_stupid_function(one)", a_stupid_function(one)(f)(x))
console.log("Show a_stupid_function(two)", a_stupid_function(two)(f)(x))
