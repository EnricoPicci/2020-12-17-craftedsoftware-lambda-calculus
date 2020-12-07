// run the example with the command
// node ./src/numbers/list.js
{
    const xJs = [];
    const fJs = (val) => (arr) => [val, ...arr];

    const lTrue = (x: any) => (_y: any) => x;
    const lFalse = (_x: any) => (y: any) => y;

    type ChurchNumber = (f: (x: any) => any) => (x: any) => any;

    type List<T> = (f: ListHandler<T>) => (x: any) => any;
    type ListHandler<T> = (a: T) => (l: List<T>) => any;
    type ListConstructor<T> = (a: T) => (l: List<T>) => (f: ListHandler<T>) => (x: any) => List<T>;

    // type Unwrap<T> = (x: T) => (y: List<T>) => List<T>;
    type Value<T> = (l: List<T>) => T;
    type Next<T> = (l: List<T>) => List<T>;

    const first = (x: any) => (_y: any) => x;
    const second = (_x: any) => (y: any) => y;

    const emptyList: List<string> = (_f) => (x) => x;
    // const append = (a) => (l) => (f) => (x) => f(a)(l(f)(x));
    const append: ListConstructor<string> = (a) => (l) => (f) => (x) => f(a)(l(f)(x));
    const value: Value<string> = (l) => l(first)('any lambda term'); // head
    const next: Next<string> = (l) => l(second)(emptyList); // tail

    // const newList = append('d')(append('c')(append('b')(append('a')(emptyList))));
    const newList: List<string> = append('a')(append('b')(append('c')(append('d')(emptyList))));
    const newL4: List<string> = append('4')(emptyList);
    const newL3 = append('3')(newL4);
    const newL2 = append('2')(newL3);
    const newL1 = append('1')(newL2);

    console.log(newList(fJs)(xJs));
    console.log(newList(first)('sss'));
    console.log(newList(second)('dddd'));

    // const identity = (x: any) => x;
    // const unwrap: Unwrap<string> = (_x) => (y) => y;
    // const value: Value<string> = (element) => element(first);
    // const next: Next<string> = (element) => element(second);

    const el_0 = newList;
    const val_0 = value(el_0);
    console.log('val_0', val_0);

    const rr = el_0(second)(first);
    const el_1 = next(el_0);
    const val_1 = value(el_1);
    console.log('val_1', val_1);
    const el_2 = value(next(next(newList)));
    const el_3 = value(next(next(next(newList))));
    console.log(el_0, el_1, el_2, el_3);

    // const secondElement = head(unwrap);
    // const valOfElementB = value(secondElement);
    // console.log('valOfElementB', valOfElementB);

    // const el_0 = value(head);
    // const el_1 = value(next(head));
    // const el_2 = value(next(next(head)));
    // console.log('Elements', el_0, el_1, el_2);

    // const elementAt = (n: ChurchNumber) => (head: List<string>) => n(next)(head);
    // const three: ChurchNumber = (f) => (x) => f(f(f(x)));
    // const el_3 = value(elementAt(three)(head));
    // console.log('el_3', el_3);
    // const four: ChurchNumber = (f) => (x) => f(f(f(f(x))));
    // const el_4 = value(elementAt(four)(head));
    // console.log('el_4', el_4);

    // const five: ChurchNumber = (f) => (x) => f(f(f(f(f(x)))));
    // const six: ChurchNumber = (f) => (x) => f(f(f(f(f(f(x))))));
    // // const dd = elementAt(five)(head);

    // // const ee = elementAt(six);
    // // const ff = ee(head);
    // // const el_6 = value(elementAt(six)(head));
    // // console.log('el_6', el_6);

    // // http://code.iamkate.com/lambda-calculus/tuples-and-lists/
    // const pair_ = (x) => (y) => (f) => f(x)(y);
    // const empty = (_f) => (x) => x; //  λfx.x
    // // const append = (a) => (l) => (f) => (x) => f(a)(l(f)(x)); // λalfx.fa(lfx)
    // const head_ = (l) => l(first)('any expression'); // λl.l(λab.a)(any expression)
    // const isempty = (l) => l((_a) => (_b) => lFalse)(lTrue); // λl.l(λab.false)true
    // // const tail = (l) => first(l((a) => (b) => pair_(second(b))(append(a)(second(b))))(pair_(empty)(empty)));
    // // tail=
    // //  λl.first(
    // //    l(
    // //      λab.pair(second b)(append a (second b))
    // //    )(
    // //      pair empty empty
    // //    )
    // //  )

    // const emtpyJs = empty(fJs)(xJs);
    // console.log('emtpyJs', emtpyJs);
    // console.log('isEmpty', isempty(empty)(true)(false));

    // // (λalfx.fa(lfx)) (λfx.x)    (1)
    // // (λlfx.f(λfx.x)(lfx))     (1)
    // let myList = append('1')(empty);
    // const oneJs = myList(fJs)(xJs);
    // console.log('oneJs', oneJs);
    // console.log('isEmpty_1', isempty(myList)(true)(false));

    // myList = append('2')(myList);
    // const twoJs = myList(fJs)(xJs);
    // console.log('twoJs', twoJs);
    // console.log('isEmpty_2', isempty(myList)(true)(false));

    // myList = append('3')(myList);
    // const nextJs = myList(fJs)(xJs);
    // console.log('nextJs', nextJs);

    // const myHead = head_(myList);
    // console.log(myHead);
    // const myTail = tail(myList);
    // const myTailHead = head(myTail);
    // // console.log(myTailHead);
}
