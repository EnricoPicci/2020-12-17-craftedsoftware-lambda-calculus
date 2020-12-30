package lambdacalculus

var f Lambda = func(x interface{}) interface{} {
	return x.(int) + 1
}
var x = 0

// ChurchNumber are Church encoded numbers
type ChurchNumber = func(f interface{}) Lambda

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
			case func(Pair) Pair:
				fp := f.(func(Pair) Pair)
				xp := x.(Pair)
				return fp(n(fp)(xp).(Pair))
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

// IsZero returns true if the number is zero, false otherwise
var IsZero = func(n ChurchNumber) ChurchBoolean {
	return n(Constant(F))(T).(ChurchBoolean)
}

// nextPair returns a new pair where the first parameter is the second parameter of the original pair
// and the second parameter is the successor of the second parameter of the original pair
var nextPair = func(p Pair) Pair {
	return Tuple2Struct(p(Second))(Succ(p(Second).(ChurchNumber)))
}

// Prev is the previous number
var Prev = func(n ChurchNumber) ChurchNumber {
	p00 := Tuple2Struct(Zero)(Zero)
	return n(nextPair)(p00).(Pair)(First).(ChurchNumber)
}
