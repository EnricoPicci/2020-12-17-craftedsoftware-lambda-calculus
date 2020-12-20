package lambdacalculus

// Lambda is a lambda function
type Lambda func(x interface{}) interface{}

type nm func(n ChurchNumber) ChurchNumber
type xl func(f interface{}) Lambda
type nxl func(n ChurchNumber) xl
type lx func(f Lambda) interface{}
type xlx func(x interface{}) lx
type xxx func(x interface{}) Lambda
type pq func(p ChurchBoolean) ChurchBoolean
