package lambdacalculus

var f Lambda = func(x interface{}) interface{} {
	return x.(int) + 1
}
var x = 0

// Lambda is a lambda function
type Lambda func(x interface{}) interface{}

// ChurchNumber are Church encoded numbers
type ChurchNumber func(f interface{}) Lambda

type nm func(n ChurchNumber) ChurchNumber
type fl func(f Lambda) Lambda

// Zero is 0
var Zero ChurchNumber = func(f interface{}) Lambda {
	return func(x interface{}) interface{} {
		return x
	}
}

var one = func(f interface{}) Lambda {
	return func(x interface{}) interface{} {
		return f.(Lambda)(Zero(f)(x))
	}
}
var two = func(f interface{}) Lambda {
	return func(x interface{}) interface{} {
		_f := f.(Lambda)
		return _f(_f(Zero(f)(x)))
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
