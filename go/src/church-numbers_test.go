package lambdacalculus

import (
	"testing"
)

var one = Succ(Zero)
var two = Succ(one)
var three = Succ(two)
var four = Succ(three)

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
	res := one(Succ)(three).(ChurchNumber)(f)(x)
	if res != 4 {
		t.Errorf("Sum of one + three should be 4 instead is %v", res)
	}
}

func TestSum_0_0(t *testing.T) {
	res := Sum(Zero)(Zero)(f)(x)
	if res != 0 {
		t.Errorf("Sum of zero + zero should be 0 instead is %v", res)
	}
}

func TestSum_0_3(t *testing.T) {
	res := Sum(Zero)(three)(f)(x)
	if res != 3 {
		t.Errorf("Sum of zero + three should be 3 instead is %v", res)
	}
}

func TestSum_4_0(t *testing.T) {
	res := Sum(four)(Zero)(f)(x)
	if res != 4 {
		t.Errorf("Sum of four + zero should be 4 instead is %v", res)
	}
}

func TestSum_2_4(t *testing.T) {
	res := Sum(two)(four)(f)(x)
	if res != 6 {
		t.Errorf("Sum of two + four should be 6 instead is %v", res)
	}
}

func TestSum_4_2(t *testing.T) {
	res := Sum(four)(two)(f)(x)
	if res != 6 {
		t.Errorf("Sum of four + two should be 6 instead is %v", res)
	}
}

func TestSum_Sum_3_4_Sum_1_2(t *testing.T) {
	res := Sum(Sum(three)(four))(Sum(one)(two))(f)(x)
	if res != 10 {
		t.Errorf("Sum of sum(3)(4) + sum(1)(2) should be 10 instead is %v", res)
	}
}

func TestMult_4_2(t *testing.T) {
	res := Mult(four)(two)(f)(x)
	if res != 8 {
		t.Errorf("Mult of four * two should be 8 instead is %v", res)
	}
}

func TestMult_4_0(t *testing.T) {
	res := Mult(four)(Zero)(f)(x)
	if res != 0 {
		t.Errorf("Mult of four * zero should be 0 instead is %v", res)
	}
}

func TestMult_0_4(t *testing.T) {
	res := Mult(Zero)(four)(f)(x)
	if res != 0 {
		t.Errorf("Mult of zero * four should be 0 instead is %v", res)
	}
}

func TestMult_0_0(t *testing.T) {
	res := Mult(Zero)(Zero)(f)(x)
	if res != 0 {
		t.Errorf("Mult of zero * zero should be 0 instead is %v", res)
	}
}

func TestMult_Sum_1_2_Mult_2_3(t *testing.T) {
	res := Mult(Sum(one)(two))(Mult(two)(three))(f)(x)
	if res != 18 {
		t.Errorf("Mult of sum(1)(2) + mult(2)(3) should be 18 instead is %v", res)
	}
}

func TestPow_0_4(t *testing.T) {
	res := Pow(Zero)(four)(f)(x)
	if res != 1 {
		t.Errorf("Power of four to zero should be 1 instead is %v", res)
	}
}

func TestPow_4_0(t *testing.T) {
	res := Pow(four)(Zero)(f)(x)
	if res != 0 {
		t.Errorf("Power of zero to four should be 0 instead is %v", res)
	}
}

func TestPow_2_3(t *testing.T) {
	res := Pow(two)(three)(f)(x)
	if res != 9 {
		t.Errorf("Power of three to two should be 9 instead is %v", res)
	}
}

func TestPow_3_4(t *testing.T) {
	res := Pow(four)(three)(f)(x)
	if res != 81 {
		t.Errorf("Power of three to four should be 81 instead is %v", res)
	}
}
