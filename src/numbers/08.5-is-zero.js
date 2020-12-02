// run the example with the command
// node ./src/numbers/08.5-is-zero.js


let jsBool = BOOL => BOOL('CHURCH-TRUE')('CHRCH-FALSE')

let TRUE = x => y => x
let FALSE = x => y => y

ZERO = f => x => x
ONE = f => x => f(x)

ALWAYS_FALSE = (y => x => y)(FALSE)

let __IS_ZERO = n => n(ALWAYS_FALSE)(TRUE);
let _IS_ZERO = n => n((y => x => y)(FALSE))(TRUE);

let IS_ZERO = n => n((y => x => y)(x => y => y))(x => y => x);

console.log('Is ZERO ZERO????   ====>>>>', jsBool(IS_ZERO(ZERO)));
console.log('Is ONE ZERO????   ====>>>>', jsBool(IS_ZERO(ONE)));