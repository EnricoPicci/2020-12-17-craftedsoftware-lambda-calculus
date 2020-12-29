package lambdacalculus

// Lambda is a lambda function
type Lambda func(x interface{}) interface{}

type xl func(x interface{}) Lambda
type lx func(f Lambda) interface{}
type xlx func(x interface{}) lx
type fxlx func(f xl) interface{}
type xfxlx func(x interface{}) fxlx

// types depending on specific types
type nm func(n ChurchNumber) ChurchNumber
type nxl func(n ChurchNumber) xl
type bb func(p ChurchBoolean) ChurchBoolean
type xb func(x interface{}) ChurchBoolean
type xp func(x interface{}) Pair

// types exploded
// type xl 		func(f interface{}) func(x interface{}) interface{}
// type lx 		func(f func(x interface{}) interface{}) interface{}
// type xlx 	func(x interface{}) func(f func(x interface{}) interface{}) interface{}
// type fxlx 	func(f func(x interface{}) func(x interface{}) interface{}) interface{}
// type xfxlx 	func(x interface{}) func(f func(x interface{}) func(x interface{}) interface{}) interface{}

// all these types related to numbers and boolean are basically the same, but we need to be specific since we have
// declered ChurchNumber and ChurchBoolean specific types
// type fxlfxl func(f func(x interface{}) func(x interface{}) interface{}) func(x interface{}) func(x interface{}) interface{}
// type nm 		func(n func(f interface{}) func(x interface{}) interface{}) func(f interface{}) func(x interface{}) interface{}
// type nxl 	func(n func(f interface{}) func(x interface{}) interface{}) func(f interface{}) func(x interface{}) interface{}
// type pq 		func(p func(f interface{}) func(x interface{}) interface{}) func(f interface{}) func(x interface{}) interface{}
