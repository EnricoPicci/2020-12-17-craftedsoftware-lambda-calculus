// we print Church encoded booleans with js
//
// run the example with the command
// node ./src/numbers/06.5-boleans-intuition.js

let TRUE = x => y => x
let FALSE = x => y => y

let jsBool = BOOL => BOOL('CHURCH-TRUE')('CHRCH-FALSE')









console.log("How do I see TRUE with js???", jsBool(TRUE))

console.log("How do I see FALSE with js???", jsBool(FALSE))
