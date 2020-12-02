// run the example with the command
// node ./src/numbers/08.4-is-zero.js


let jsBool = BOOL => BOOL('CHURCH-TRUE')('CHRCH-FALSE')

let TRUE = x => y => x
let FALSE = x => y => y

ZERO = f => x => x
ONE = f => x => f(x)

ALWAYS_FALSE = (y => x => y)(FALSE)

let IS_ZERO = n => n(ALWAYS_FALSE)(TRUE);

console.log('Is ZERO ZERO????   ====>>>>', jsBool(IS_ZERO(ZERO)));
console.log('Is ONE ZERO????   ====>>>>', jsBool(IS_ZERO(ONE)));