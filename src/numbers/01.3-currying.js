const { setupMaster } = require("cluster");
// run the example with the command
// node ./src/numbers/01.3-currying.js

sum = (x, y) => x + y
console.log('Show me sum(1, 2)', sum(1,2))

sum = x => y => x + y
console.log('Show me sum(1)(2)', sum(1)(2))