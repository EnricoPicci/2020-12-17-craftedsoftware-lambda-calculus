package lambdacalculus

// ChurchBoolean are Church encoded booleans
type ChurchBoolean xxx

// T is boolean true
var T ChurchBoolean = func(x interface{}) Lambda {
	return func(y interface{}) interface{} {
		return x
	}
}

// F is boolean false
var F ChurchBoolean = func(x interface{}) Lambda {
	return func(y interface{}) interface{} {
		return y
	}
}

// Not is the boolean not
var Not = func(p ChurchBoolean) xxx {
	return Flip(p)
}

// And is the boolean and
var And = func(p ChurchBoolean) pq {
	return func(q ChurchBoolean) ChurchBoolean {
		return p(q)(p).(ChurchBoolean)
	}
}

// Or is the boolean and
var Or = func(p ChurchBoolean) pq {
	return func(q ChurchBoolean) ChurchBoolean {
		return p(p)(q).(ChurchBoolean)
	}
}
