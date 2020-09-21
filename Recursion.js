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
    newArr.push(str)
    return newArr;
  }
  //recursive case
  let splitterIndex = str.indexOf(splitter)

  let newStr  = str.substr(0, splitterIndex);
 
  let endOfStr = str.substr(splitterIndex + 1, str.length);

  newArr.push(newStr)

 return newArr.concat(strSplitter(endOfStr, splitter)); 
}

console.log(strSplitter('a quick brown fox', ' '));

//6. Fibonacci
const fibonnaci = (num) => {
  if (num == 0) {
    return 0;
  }
  if (num === 1) {
    return 1;
  }

  return fibonnaci(num - 1) + fibonnaci(num - 2);  
}

// console.log(fibonnaci(7));


// 7. Factorial

const factorial = (num) => {
  if (num === 1) {
    return 1;
  }

  return num * factorial(num - 1);
}

// console.log(factorial(5));

// 8. Find a way out of the maze
let mySmallMaze = [
  [' ', ' ', ' '],
  [' ', '*', ' '],
  [' ', ' ', 'e']
];

function pathFinder(maze) {
  this.maze = maze

  this.traverse = function(column , row) {
    if (this.maze[column][row] === 'e') {
      console.log('Solution at ' + column + row);
      return;
    } else if (this.maze[column][row] === '*') {
      this.maze[column][row] = 5;
      if (column < this.maze.length - 1) {
        this.traverse(column + 1, row);
      }
      if(row < this.maze[column].length - 1) {
        this.traverse(column, row + 1);
      }
      if(column > 0) {
        this.traverse(column - 1, row);
      }
      if(row > 0) {
        this.traverse(column, row - 1);
      }
    }

  }
}

// var ms = new pathFinder(mySmallMaze)
// console.log(ms.traverse(0,0))

//10. Anagrams

// const findAllAnagrams = (word) => {
//   const wordArray = word.split('');
//   //base 
//   if( wordArray.length === 0) {
//     return;
//   }
//   //recursion 
//   const firstChar = wordArray[0] // e
//   console.log(firstChar)
//   const remainingChar = wordArray.slice(1) // [a, s , t]
//   console.log(remainingChar)
//   const removedChar = remainingChar.shift()// a
//  remainingChar.join('')
//   let newWord =firstChar.concat(remainingChar, removedChar)
// console.log(newWord)
//   //grab the letter at the first index
//   // create all words with remaining letters
//   //then we
// }

// findAllAnagrams('east');


function anagramGrouper(words){
  const anagrams = {};
  words.forEach((word)=>{
      const sortedWord = alphabetize(word);
      if (anagrams[sortedWord]) {
          return anagrams[sortedWord].push(word);
      }
      anagrams[sortedWord] = [word];
  });
  return anagrams;
}