package lambdacalculus

// Flip flips the order in which parameters are passed to a function
var Flip = func(f interface{}) xl {
	return func(x interface{}) Lambda {
		return func(y interface{}) interface{} {
			switch f.(type) {
			case func(n ChurchNumber) nxl:
				fxy := f.(func(n ChurchNumber) nxl)
				xChurch := x.(ChurchNumber)
				yChurch := y.(ChurchNumber)
				return fxy(yChurch)(xChurch)
			case ChurchBoolean:
				fChurch := f.(ChurchBoolean)
				return fChurch(y)(x)
			default:
				return f.(Lambda)(y).(Lambda)(x)
			}
		}
	}
}

// Constant is passed a value and returns a function which retur that value at every invocation
var Constant = func(x interface{}) Lambda {
	return func(y interface{}) interface{} {
		return x
	}
}

// First is a function which returns always the first parameter
var First = Constant

// Second is a function which returns always the second parameter
var Second = func(x interface{}) Lambda {
	return func(y interface{}) interface{} {
		return y
	}
}

// (x) => g((v) => x(x)(v))
// var gArg := func(v interface{}) {
// 	return x(x)(v)
// }
// Z combinator
// export const Z = (g: LambdaFunction) => ((x) => g((v) => x(x)(v))) ((x) => g((v) => x(x)(v)));
// export const Z = (g: LambdaFunction) =>
//                    ((x) => g((v: any) => x(x)(v)))
//                    ((x: (arg0: any) => { (arg0: any): any; new(): any; }) => g((v: any) => x(x)(v)));

// var Z = func (g Lambda) {
// 	fZ := func(x interface{}) {
// 		gArg := func(v interface{}) {
// 			return x(x)(v)
// 		}
// 		return g(gArg)
// 	}
// 	return fZ(fZ)
// }
