// run the example with the command
// node ./src/numbers/list.js
const xJs = [];
const fJs = (val) => (arr) => [val, ...arr];

type ChurchBoolean = (x: any) => (_y: any) => any;
const lTrue: ChurchBoolean = (x: any) => (_y: any) => x;
const first = lTrue;
const lFalse: ChurchBoolean = (_x: any) => (y: any) => y;
const second = lFalse;
const boolJs = (f: ChurchBoolean) => f(true)(false);

type ChurchNumber = (f: (x: any) => any) => (x: any) => any;
const church_0: ChurchNumber = (_f) => (x) => x;
const succ: (n: ChurchNumber) => ChurchNumber = (n: ChurchNumber) => (f: (x: any) => any) => (x: any) => f(n(f)(x));
const church_1 = succ(church_0);
const church_2 = succ(church_1);
const church_3 = succ(church_2);
const church_4 = succ(church_3);
const church_5 = succ(church_4);
const church_6 = succ(church_5);
const church_7 = succ(church_6);
const church_8 = succ(church_7);
const church_9 = succ(church_8);

type Pair<T, U> = (f: (x: T) => (y: U) => any) => any;
type PairConst<T, U> = (x: T) => (y: U) => Pair<T, U>;

type Selector<T> = (h: T) => (t: List<T>) => T | List<T>; // head or tail
type List<T> = (f: Selector<T>) => T | List<T>;
type ListConst<T> = (x: T) => (y: List<T>) => List<T>;

const emptyList: List<any> = (_f) => lTrue;
const isEmpty = (l: List<any>) => l((_h) => (_t) => lFalse);
console.log('Is an empty list empty? ===>>>:', boolJs(isEmpty(emptyList)));

const insertOnTop: ListConst<number> = (n) => (l) => (f) => f(n)(l);
let aList: List<number> = insertOnTop(0)(emptyList);
console.log('Is a NOT empty list empty? ===>>>:', boolJs(isEmpty(aList)));

type Value<T> = (l: List<T>) => T;
const value: Value<number> = (l) => l(first) as number;
type ValueJs<T> = (l: List<T>) => T;
const valueJs: ValueJs<number> = (l) => isEmpty(l)(undefined)(value(l));
let el_0 = aList;
let val_0 = value(el_0);
console.log('Which is the value of the first element of aList? ===>>>:', val_0);

aList = insertOnTop(1)(aList);
type Next<T> = (l: List<T>) => List<T>;
const next: Next<number> = (l) => isEmpty(l)(emptyList)(l(second)) as List<number>;
el_0 = aList;
val_0 = value(el_0);
let el_1 = next(el_0);
let val_1 = value(el_1);
console.log('Which are the elements of aList? ===>>>:', val_0, val_1);
let el_xx = next(el_1);
let val_xx = value(el_xx);
console.log('Is el_xx the empty list? ===>>>:', boolJs(isEmpty(el_xx)), val_xx);
let el_yy = next(el_xx);
let val_yy = value(el_yy);
console.log('Is el_yy the empty list? ===>>>:', boolJs(isEmpty(el_yy)), val_yy);

aList = insertOnTop(2)(aList);
aList = insertOnTop(3)(aList);
el_0 = aList;
el_1 = next(el_0);
let el_2 = next(next(el_0));
let el_3 = next(next(next(el_0)));
let val_3 = value(el_3);
console.log('Which is the value of the THIRD element of aList? ===>>>:', val_3);

type ElementAt<T> = (n: ChurchNumber) => (l: List<T>) => List<T>;
const elementAt: ElementAt<number> = (n) => (l) => n(next)(l);
el_0 = elementAt(church_0)(aList);
el_1 = elementAt(church_1)(aList);
el_2 = elementAt(church_2)(aList);
el_3 = elementAt(church_3)(aList);
console.log('Elements of aList? ===>>>:', valueJs(el_0), valueJs(el_1), valueJs(el_2), valueJs(el_3));
let el_4 = elementAt(church_4)(aList);
let el_5 = elementAt(church_5)(aList);
let el_6 = elementAt(church_6)(aList);
let el_7 = elementAt(church_7)(aList);
let el_8 = elementAt(church_8)(aList);
let el_9 = elementAt(church_9)(aList);
console.log('value of el_4? ===>>>:', valueJs(el_4));
console.log('value of el_5? ===>>>:', valueJs(el_5));
console.log('value of el_6? ===>>>:', valueJs(el_6));
console.log('value of el_7? ===>>>:', valueJs(el_7));
console.log('value of el_8? ===>>>:', valueJs(el_8));
console.log('value of el_9? ===>>>:', valueJs(el_9));
console.log('value of el_5? ===>>>:', valueJs(el_5));

const Y = (g) => ((x) => g(x(x)))((x) => g(x(x)));
const Z = (g) => ((x) => g((v) => x(x)(v)))((x) => g((v) => x(x)(v)));

// const F = (f) => {
//     return (l) => {
//         return (n) => {
//             const isE = isEmpty(l)(true)(false);
//             console.log('isE', isE);
//             if (isE) {
//                 return n;
//             } else {
//                 return f(next(l))(n + 1);
//             }
//         };
//     };
// };
// const F = (f) => {
//     return (l) => {
//         return (n) => {
//             return isEmpty(l)((n) => n)((n) => f(next(l))(n + 1))(n);
//         };
//     };
// };

const F = (f) => (l) => (n) => isEmpty(l)((n) => n)((n) => f(next(l))(n + 1))(n);
const listSize_ = Z(F);
const sizeOf_aList = listSize_(aList)(0);

console.log(sizeOf_aList);
console.log(listSize_(emptyList)(0));
console.log(sizeOf_aList);
