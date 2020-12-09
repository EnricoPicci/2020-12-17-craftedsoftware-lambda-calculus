// Church encoded natural number type definition
export type ChurchNumber = (f: (x: any) => any) => (x: any) => any;

// Arithmetic operations on Church encoded natural numbers
export const succ = (n: ChurchNumber) => (f: (x: any) => any) => (x: any) => f(n(f)(x)) as ChurchNumber;
export const sum = (n: ChurchNumber) => (m: ChurchNumber) => (f: (x: any) => any) => (x: any) =>
    n(succ(m))(f)(x) as ChurchNumber;
export const mult = (n: ChurchNumber) => (m: ChurchNumber) => (f: (x: any) => any) => (x: any) =>
    n(m(f))(x) as ChurchNumber;
export const power = (n: ChurchNumber) => (m: ChurchNumber) => (f: (x: any) => any) => (x: any) =>
    n(m)(f)(x) as ChurchNumber;

// first 10 natural numbers
export const church_0: ChurchNumber = (_f) => (x) => x;
export const church_1 = succ(church_0);
export const church_2 = succ(church_1);
export const church_3 = succ(church_2);
export const church_4 = succ(church_3);
export const church_5 = succ(church_4);
export const church_6 = succ(church_5);
export const church_7 = succ(church_6);
export const church_8 = succ(church_7);
export const church_9 = succ(church_8);

// numberJs converts a church encoded number to a javascript number
export const numberJs = (n: ChurchNumber) => n((x) => x + 1)(0);
