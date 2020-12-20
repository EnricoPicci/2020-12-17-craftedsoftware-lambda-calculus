package lambdacalculus

// Flip flips the order in which parameters are passed to a function
var Flip = func(f interface{}) xxx {
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
