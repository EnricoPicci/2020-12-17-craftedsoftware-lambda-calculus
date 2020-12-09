import { expect } from 'chai';
import { church_1, church_2, church_3, mult, numberJs, power, sum } from './church-numbers';

describe(`Test arithmetic functions on Church encoded natural numbers`, () => {
    it(`1 + 3 should be 4`, () => {
        const result = sum(church_1)(church_3);
        const resJs = numberJs(result);
        expect(resJs).eq(4);
    });
    it(`2 * 3 should be 6`, () => {
        const result = mult(church_2)(church_3);
        const resJs = numberJs(result);
        expect(resJs).eq(6);
    });
    it(`2 ** 3 should be 8`, () => {
        const result = power(church_3)(church_2);
        const resJs = numberJs(result);
        expect(resJs).eq(8);
    });
});
