// 1. Counting sheep
// Input: 3
// Output:
// 3: Another sheep jumps over the fence
// 2: Another sheep jumps over the fence
// 1: Another sheep jumps over the fence
// All sheep jumped over the fence

function countDownSheep(num) {
  if (num === 0) {
    console.log('All sheep jumped over the fence')
    return;
  }
  console.log('Another sheep jumps over the fence');
  countDownSheep(num - 1);
}
// why do we get undefined when we console.log the function call 
// countDownSheep(5)

// 2. Power Calculator

// powerCalculator(10,2) should return 100
// powerCalculator(10,-2) should return exponent should be >= 0

// exponent 0 then 1

// exponent 1 then base number 

function powerCalculator(base, exponent) {
  // condition
  if (exponent < 0) {
    return 'exponent should be >= 0';
  }

  // base case 
  if (exponent === 0) {
    return 1;
  }
  // recursive case

  return base * powerCalculator(base, exponent - 1);
}

// console.log(powerCalculator(2, 5)) // 