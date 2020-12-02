// run the example with the command
// node ./src/numbers/08.7-is-zero.js


let jsBool = BOOL => BOOL('CHURCH-TRUE')('CHRCH-FALSE')
let f = x => x + 1
let x = 0

let TRUE = x => y => x
let FALSE = x => y => y

ZERO = f => x => x
ONE = f => x => f(x)

ALWAYS_FALSE = (y => x => y)(FALSE)
let IS_ZERO = n => n(ALWAYS_FALSE)(TRUE);

A_STUPID_FUNC = n => IS_ZERO(n)(ONE)(ZERO)

console.log('What does A_STUPID_FUNC return if called with ZERO????   ====>>>>', A_STUPID_FUNC(ZERO)(f)(x));
console.log('What does A_STUPID_FUNC return if called with ONE????   ====>>>>', A_STUPID_FUNC(ONE)(f)(x));