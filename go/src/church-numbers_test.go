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

func TestSum_0_0(t *testing.T) {
	res := Sum(Zero)(Zero)(f)(x)
	if res != 0 {
		t.Errorf("Sum of zero + zero should be 0 instead is %v", res)
	}
}

func TestSum_0_3(t *testing.T) {
	three := Succ(Succ(Succ(Zero)))
	res := Sum(Zero)(three)(f)(x)
	if res != 3 {
		t.Errorf("Sum of zero + three should be 3 instead is %v", res)
	}
}

func TestSum_4_0(t *testing.T) {
	four := Succ(Succ(Succ(Succ(Zero))))
	res := Sum(four)(Zero)(f)(x)
	if res != 4 {
		t.Errorf("Sum of four + zero should be 4 instead is %v", res)
	}
}

func TestSum_2_4(t *testing.T) {
	two := Succ(Succ(Zero))
	four := Succ(Succ(two))
	res := Sum(two)(four)(f)(x)
	if res != 6 {
		t.Errorf("Sum of two + four should be 6 instead is %v", res)
	}
}

func TestSum_4_2(t *testing.T) {
	two := Succ(Succ(Zero))
	four := Succ(Succ(two))
	res := Sum(four)(two)(f)(x)
	if res != 6 {
		t.Errorf("Sum of four + two should be 6 instead is %v", res)
	}
}

func TestMult_4_2(t *testing.T) {
	two := Succ(Succ(Zero))
	four := Succ(Succ(two))
	res := Mult(four)(two)(f)(x)
	if res != 8 {
		t.Errorf("Mult of four * two should be 8 instead is %v", res)
	}
}

func TestMult_4_0(t *testing.T) {
	two := Succ(Succ(Zero))
	four := Succ(Succ(two))
	res := Mult(four)(Zero)(f)(x)
	if res != 0 {
		t.Errorf("Mult of four * zero should be 0 instead is %v", res)
	}
}

func TestMult_0_4(t *testing.T) {
	two := Succ(Succ(Zero))
	four := Succ(Succ(two))
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

func TestPow_0_4(t *testing.T) {
	two := Succ(Succ(Zero))
	four := Succ(Succ(two))
	res := Pow(Zero)(four)(f)(x)
	if res != 1 {
		t.Errorf("Power of zero to four should be 1 instead is %v", res)
	}
}

func TestPow_2_3(t *testing.T) {
	two := Succ(Succ(Zero))
	three := Succ(two)
	res := Pow(two)(three)(f)(x)
	if res != 9 {
		t.Errorf("Power of three to two should be 9 instead is %v", res)
	}
}
