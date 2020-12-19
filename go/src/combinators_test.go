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
