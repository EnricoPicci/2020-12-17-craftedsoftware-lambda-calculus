// run the example with the command
// node ./src/numbers/07.2-bolean-logic.js

let jsBool = BOOL => BOOL('CHURCH-TRUE')('CHRCH-FALSE')

let TRUE = x => y => x
let FALSE = x => y => y

let AND = p => q => p(q)(p);

console.log('TRUE AND TRUE', jsBool(AND(TRUE)(TRUE)));
console.log('TRUE AND FALSE', jsBool(AND(TRUE)(FALSE)));
console.log('FALSE AND TRUE', jsBool(AND(FALSE)(TRUE)));
console.log('FALSE AND FALSE', jsBool(AND(FALSE)(FALSE)));
