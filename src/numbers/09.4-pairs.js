// run the example with the command
// node ./src/numbers/09.4-pairs.js

succ = n => f => x => f(n(f)(x))
let zero = (f) => (x) => x;
let one = (f) => (x) => f(x);
let f_js = x => x + 1
let x_js = 0

pair_struct = x => y => f => f(x)(y)

pair_0_0 = pair_struct(zero)(zero)

first = x => y => x
console.log(pair_0_0(first)(f_js)(x_js))

generateNextPair = x => y => pair_struct(y)(succ(y))

nextPair = pair => pair(generateNextPair)

pair_1_2 = nextPair(pair_0_0)

pair_5_6 = nextPair(nextPair(nextPair(nextPair(nextPair(nextPair(pair_0_0))))))

pair_5_6(x => y => console.log(x(f_js)(x_js), y(f_js)(x_js)))

pred = n => n(nextPair)(pair_0_0)(first)

six = f => x => f(f(f(f(f(f(x))))))
pred_of_6 = pred(six)

console.log(pred_of_6(f_js)(x_js))

