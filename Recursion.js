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

//3. Reverse string
//Write a function that reverses a string. 
//Take a string as input, reverse the string, and return the new string.

const reverseString = (str) => {
  //base case
  if (str === '') {
    return '';
  }
  else {
    return reverseString(str.substr(1)) + str.charAt(0)
  }

}

// console.log(reverseString('apple'));

//4. nth Triangular Number

const nTriangularNum = (num) => {
  if (num === 1) {
    return num;
  }
  else {
   return num + nTriangularNum(num - 1)
  }
}

// console.log(nTriangularNum(9)) // 45



//5. String Splitter

const strSplitter = (str, splitter) => {
  const newArr = []
  //base case
  if (str.indexOf(splitter) === -1) {
    newArr.push(str);
    return newArr;
  }
  //recursive case
  let splitterIndex = str.indexOf(splitter)
  console.log(splitterIndex)

  newArr.push(str.substr(0, splitterIndex))
  strSplitter(str.substr(splitterIndex + 1), splitter)
  return newArr
  // return newArr.concat(strSplitter(str.slice(splitterIndex), splitter))
}

console.log(strSplitter('a/quick/brown/fox', '/'));