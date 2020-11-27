// run the example with the command
// node ./src/numbers/03-arithmetics. js

THREE = f => x => f(f(f(x)))
FIVE = f => x => f(f(f(f(f(x)))))

SUCC = n => f => x => f(n(f)(x))

N_of_SUCC_of_M = n => m => n(SUCC)(m)

let f = x => x + 1
let x = 0

console.log("Show me N_of_SUCC_of_M(THREE)(FIVE)", N_of_SUCC_of_M(THREE)(FIVE)(f)(x))
console.log("Show me N_of_SUCC_of_M(FIVE)(THREE)", N_of_SUCC_of_M(FIVE)(THREE)(f)(x))
console.log("Show me N_of_SUCC_of_M(FIVE)(FIVE)", N_of_SUCC_of_M(FIVE)(FIVE)(f)(x))
