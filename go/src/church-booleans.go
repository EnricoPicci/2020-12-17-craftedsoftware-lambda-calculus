package lambdacalculus

// ChurchBoolean are Church encoded booleans
type ChurchBoolean xxx

// T is boolean true
var T ChurchBoolean = func(x interface{}) xx {
	return func(y interface{}) interface{} {
		return x
	}
}

// F is boolean false
var F ChurchBoolean = func(x interface{}) xx {
	return func(y interface{}) interface{} {
		return y
	}
}

// Not is the boolean not
var Not = func(p ChurchBoolean) xxx {
	return Flip(p)
}
