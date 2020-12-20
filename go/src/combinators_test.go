package lambdacalculus

import (
	"testing"
)

func TestFlip_with_Pow(t *testing.T) {
	res := Flip(Pow)(four)(three).(xl)(f)(x)
	if res != 64 {
		t.Errorf("Power of four to three should be 64 instead is %v", res)
	}
}

func TestConstant(t *testing.T) {
	c := Constant(1)
	res := c(Succ(Zero))
	if res != 1 {
		t.Errorf("The constant should be always 1 instead is %v", res)
	}
}
