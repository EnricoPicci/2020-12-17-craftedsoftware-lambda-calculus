package lambdacalculus

// Pair is a 2-tuple
var Pair = func(x interface{}) xlx {
	return func(y interface{}) lx {
		return func(f Lambda) interface{} {
			return f(x).(Lambda)(y)
		}
	}
}
