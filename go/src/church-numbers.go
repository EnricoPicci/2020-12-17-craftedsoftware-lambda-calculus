package lambdacalculus

var f Lambda = func(x interface{}) interface{} {
	return x.(int) + 1
}
var x = 0

// ChurchNumber are Church encoded numbers
type ChurchNumber func(f interface{}) Lambda

// Zero is 0
var Zero ChurchNumber = func(f interface{}) Lambda {
	return func(x interface{}) interface{} {
		return x
	}
}

// Succ is the successor function
var Succ = func(n ChurchNumber) ChurchNumber {
	return func(f interface{}) Lambda {
		return func(x interface{}) interface{} {
			switch f.(type) {
			case func(ChurchNumber) ChurchNumber:
				fChurch := f.(func(ChurchNumber) ChurchNumber)
				xChurch := x.(ChurchNumber)
				return fChurch(n(fChurch)(xChurch).(ChurchNumber))
			case ChurchNumber:
				l := x.(Lambda)
				return f.(ChurchNumber)(n(f)(l))
			default:
				return f.(Lambda)(n(f)(x))
			}
		}
	}
}

// Sum is the sum function
var Sum = func(n ChurchNumber) nm {
	return func(m ChurchNumber) ChurchNumber {
		return m(Succ)(n).(ChurchNumber)
	}
}

// Mult is the multiplication function
var Mult = func(n ChurchNumber) nm {
	return func(m ChurchNumber) ChurchNumber {
		return func(f interface{}) Lambda {
			return n(m(f))
		}
	}
}

// Pow is the power function
var Pow = func(n ChurchNumber) nxl {
	return func(m ChurchNumber) xl {
		return func(f interface{}) Lambda {
			return n(m)(f).(Lambda)
		}
	}
}
