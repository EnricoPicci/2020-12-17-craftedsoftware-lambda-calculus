package lambdacalculus

// Flip flips the order in which parameters are passed to a function
var Flip = func(f interface{}) xl {
	return func(x interface{}) Lambda {
		return func(y interface{}) interface{} {
			switch f := f.(type) {
			case func(n ChurchNumber) nxl:
				xChurch := x.(ChurchNumber)
				yChurch := y.(ChurchNumber)
				return f(yChurch)(xChurch)
			case ChurchBoolean:
				return f(y)(x)
			default:
				return f.(Lambda)(x)
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

// Z implements the Z combinator
var Z = func(g Lambda) interface{} {
	fZ := func(x interface{}) interface{} {
		gArg := func(v interface{}) interface{} {
			return (x.(Lambda)(x)).(Lambda)(v)
		}
		return g(gArg)
	}
	return fZ(fZ)
}
