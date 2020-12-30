package lambdacalculus

// Lambda is a lambda function
type Lambda = func(x interface{}) interface{}

// type alias names are built using the following convetion - consider that we are typing "unary functions" since
// this is what lambda functions are
//
// x denotes a generic interface
// l denotes a Lambda as defined above (a unary function that accepts a generic input and retruns a generic output)
// f is used to denote a parameter as a function in case this is required to disambiguate, e.g. with xlx and fxlx
// Aliases can be used to compose other aliases, so xlx denotes a function that takes an x and returns an lx
type xl = func(x interface{}) Lambda
type lx = func(f Lambda) interface{}
type xlx = func(x interface{}) lx
type fxlx = func(f xl) interface{}
type xfxlx = func(x interface{}) fxlx

// type aliases depending on specific types defined in Lambda calculus (apart Lambda)
type nm = func(n ChurchNumber) ChurchNumber
type nxl = func(n ChurchNumber) xl
type bb = func(p ChurchBoolean) ChurchBoolean
type xb = func(x interface{}) ChurchBoolean
type xp = func(x interface{}) Pair
