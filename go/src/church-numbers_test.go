package lambdacalculus

import (
	"testing"
)

func TestZero(t *testing.T) {
	res := Zero(f)(x)
	if res != 0 {
		t.Errorf("Zero does not return 0")
	}
}

func TestSucc(t *testing.T) {
	res := Succ(Zero)(f)(x)
	if res != 1 {
		t.Errorf("Successor of Zero should be 1")
	}
}
func TestSuccSucc(t *testing.T) {
	res := Succ(Succ(Zero))(f)(x)
	if res != 2 {
		t.Errorf("Successor of successor of Zero should be 2")
	}
}
func TestSuccSuccSucc(t *testing.T) {
	res := Succ(Succ(Succ(Zero)))(f)(x)
	if res != 3 {
		t.Errorf("Successor of successor of successor of Zero should be 3")
	}
}

func TestSum_0(t *testing.T) {
	one := Succ(Zero)
	two := Succ(Succ(Zero))
	three := Succ(two)
	res := one(Succ)(three).(ChurchNumber)(f)(x)
	if res != 4 {
		t.Errorf("Sum of one + three should be 4 instead is %v", res)
	}
}

func TestSum(t *testing.T) {
	two := Succ(Succ(Zero))
	res := Sum(two)(two)(f)(x)
	if res != 4 {
		t.Errorf("Sum of two + two should be 4 instead is %v", res)
	}
}
