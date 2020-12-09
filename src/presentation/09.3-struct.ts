const two_tuple_untyped = (x: any) => (y: any) => (f: any) => f(x)(y);

type Two_Tuple_Handler<T, U, R> = (x: T) => (y: U) => R;
type Two_Tuple<T, U, R> = (x: T) => (y: U) => (f: Two_Tuple_Handler<T, U, R>) => R;

const error_tuple: Two_Tuple<string, number, string> = (message) => (severity) => (f) => f(message)(severity);

// the server does something
function doStuff() {
    // something goes wrong and I return a new error
    return error_tuple('I am a new severe Error')(99);
}

// a client calls doStuff and handles the error
const errorHandler: Two_Tuple_Handler<string, number, string> = (x) => (y) => `Error ${x} - Severity ${y}`;

const err = doStuff();
if (!!err) {
    const errorF = err(errorHandler);
    console.log(errorF);
}
