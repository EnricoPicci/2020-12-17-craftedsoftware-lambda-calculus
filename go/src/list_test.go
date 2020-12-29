package lambdacalculus

import (
	"testing"
)

func TestIsEmptyWithEmpty(t *testing.T) {
	res := IsEmpty(EmptyList)(true)(false)
	if !res.(bool) {
		t.Errorf("The empty list should be empty instead is %v", res)
	}
}
func TestValueOfEmpty(t *testing.T) {
	res := ListElementVal(EmptyList).(func(interface{}) Lambda)(true)(false)
	if !res.(bool) {
		t.Errorf("The value of empty list should be True instead is %v", res)
	}
}
func TestNextOfEmpty(t *testing.T) {
	nextEl := NextListElement(EmptyList)
	res := IsEmpty(nextEl)(true)(false)
	if !res.(bool) {
		t.Errorf("The next element of empty list should be empty list instead is %v", res)
	}
}

func TestIsEmptyWithNotEmpty(t *testing.T) {
	list := InsertOnTop(one)(EmptyList)
	res := IsEmpty(list)(true)(false)
	if res.(bool) {
		t.Errorf("IsEmpty applied to a non empty list should be false instead is %v", res)
	}
}
