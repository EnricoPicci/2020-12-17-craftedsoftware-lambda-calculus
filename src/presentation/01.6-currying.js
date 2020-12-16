const { setupMaster } = require("cluster");
// run the example with the command
// node ./src/presentation/01.6-currying.js

sum_1 = x => y => x + y
console.log('Show me sum(1)(2)', sum_1(1)(2))


function f(x) {
    return function g(y) {
        return x + y
    }
}
console.log('Show me f(1)(2)', f(1)(2))