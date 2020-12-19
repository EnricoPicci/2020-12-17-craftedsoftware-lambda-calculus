package lambdacalculus

import (
	"testing"
)

func TestNotTrue(t *testing.T) {
	res := Not(T)(true)(false)
	if res.(bool) {
		t.Errorf("Not true should be false instead is %v", res)
	}
}

func TestNotFalse(t *testing.T) {
	res := Not(F)(true)(false)
	if !res.(bool) {
		t.Errorf("Not false should be true instead is %v", res)
	}
}
