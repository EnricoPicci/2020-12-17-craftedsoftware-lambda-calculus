package lambdacalculus

// List is a Pair whose first value is the value of the current element and the second value is the next element of the list,
// which is again a Pair
type List Pair

// EmptyList is the empty list. The EmptyList responds true to all functions which are passed to it, being them "First", "Second"
// or the function that is passed to check whether it is the empty list
var EmptyList List = func(f xl) interface{} {
	return func(x interface{}) Lambda {
		return func(y interface{}) interface{} {
			return x
		}
	}
}

// InsertOnTop inserts a value on top of a list
var InsertOnTop = func(x interface{}) func(l List) List {
	return func(l List) List {
		return func(f xl) interface{} {
			return f(x)(l)
		}
	}
}

// IsEmpty returns true if the list is empty, false otherwise
var IsEmpty = func(l List) ChurchBoolean {
	var alwayFalseUnlessListIsEmpty xl = func(x interface{}) Lambda {
		return func(y interface{}) interface{} {
			return Second
		}
	}
	return l(alwayFalseUnlessListIsEmpty).(func(interface{}) Lambda)
}

// ListElementVal returns the value of a list element
var ListElementVal = func(element List) interface{} {
	return element(First)
}

// NextListElement returns the value of a list element
var NextListElement = func(element List) List {
	secondEl := element(Second)
	switch secondEl.(type) {
	case func(interface{}) Lambda:
		return EmptyList
	default:
		return secondEl.(List)
	}
}
