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

  let newStr = str.substr(0, splitterIndex);

  let endOfStr = str.substr(splitterIndex + 1, str.length);

  newArr.push(newStr)

  return newArr.concat(strSplitter(endOfStr, splitter));
}

// console.log(strSplitter('a quick brown fox', ' '));

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

let maze = [
  [' ', ' ', ' ', '*', ' ', ' ', ' '],
  ['*', '*', ' ', '*', ' ', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', '*', '*', '*', '*', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];



//10. Anagrams



const findAllAnagrams = (word) => {
// base case
if (word.length < 2) {
  return [word];
}

if (word.length === 2) {
  return [word, word[1] + word[0]]
}
let anagramArray = []

for (let i = 0; i < word.length; i++) {
  let firstChar = word[i]; // 'a'
  let remainingChar = word.slice(0, i) + word.slice(i + 1)//'bc' 
  anagramArray = anagramArray.concat(findAllAnagrams(remainingChar).map(charSet => firstChar + charSet))// [bc, cb]
}

return anagramArray;

}

// console.log(findAllAnagrams('east'), findAllAnagrams('east').length)

// [abc, acb, bac, bca, cab, cba]
function anagramGrouper(words) {
  const anagrams = {};
  words.forEach((word) => {
    const sortedWord = alphabetize(word);
    if (anagrams[sortedWord]) {
      return anagrams[sortedWord].push(word);
    }
    anagrams[sortedWord] = [word];
  });
  return anagrams;
}



const orgChart = {
  name: 'Zuckerberg',
  directReports: [
    {
      name: 'Schroepfer',
      directReports: [
        {
          name: 'Bowsworth',
          directReports: [
            {name: 'Steve',directReports: []},
            {name: 'Kyle',directReports: []},
            {name: 'Andra',directReports: []},
          ]
        },
        {
          name: 'Zhao',
          directReports: [
            {name: 'Richie', directReports: []},
            {name: 'Sofia', directReports: []},
            {name: 'Jen',directReports: []},
          ]
        }
      ],
    },
    {
      name: 'Schrage',
      directReports: [
        {
          name: 'VanDyck',
          directReports: [
            {name: 'Sabrina', directReports: []},
            {name: 'Michelle', directReports: []},
            {name: 'Josh', directReports: []}
          ]
        },
        {
          name: 'Swain',
          directReports: [
            {name: 'Blanch', directReports: []},
            {name: 'Tom', directReports: []},
            {name: 'Joe', directReports: []}
          ]
        }
      ]
    },
    {
      name: 'Sandberg',
      directReports: [
        {
          name: 'Goler',
          directReports: [
            {name: 'Eddie', directReports: []},
            {name: 'Julie', directReports: []},
            {name: 'Annie', directReports: []}
          ]
        },
        {
          name: 'Hernandez',
          directReports: [
            {name: 'Rowi', directReports: []},
            {name: 'Inga', directReports: []},
            {name: 'Morgan', directReports: []}
          ]
        },
        {
          name: 'Moissinac',
          directReports: [
            {name: 'Amy', directReports: []},
            {name: 'Chuck', directReports: []},
            {name: 'Vinni', directReports: []}
          ]
        },
        {
          name: 'Kelley',
          directReports: [
            {name: 'Eric', directReports: []},
            {name: 'Ana', directReports: []},
            {name: 'Wes', directReports: []}
          ]
        }
      ]
    }
  ]
}
function printOrgChart(orgObj, indent = '') {
  console.log(indent + orgObj.name)
  indent += '\t'
  orgObj.directReports.forEach(person => printOrgChart(person, indent))
}
// printOrgChart(orgChart)

//12. Binary Representation 

// 8 4 2 1
// 0 0 0 0  
// 0 0 0 1
// 0 0 1 0 
// 0 0 1 1 



const getBinaryValue = (num) => {
 let binary = ''
  if (num === 0 ) {
    return binary + '0';
  }

  if (num === 1) {
    return binary + '1';
  }
 
  return binary + getBinaryValue(Math.floor(num / 2)) + (num % 2).toString();
  // '' + 1 + 1  = 1 1 

}

// console.log(getBinaryValue(25));


function mazeRunner(x, y, path, maze) {
  //walls and constraints 
  if(x < 0 || y < 0 || y >= maze.length || x >= maze[y].length || maze[y][x] === '*') {
    return null
  }
  //endpoint
  if(maze[y][x] === 'e') {
    return path
  }
  maze = maze.map(row => [...row])
  maze[y][x] = '*'
  return mazeRunner(x + 1, y, path + 'R', maze) 
    || mazeRunner(x - 1, y, path + 'L', maze) 
    || mazeRunner(x, y + 1, path + 'D', maze) 
    || mazeRunner(x, y - 1, path + 'U', maze)
}
console.log(mazeRunner(0, 0, '', mySmallMaze))
console.log(mazeRunner(0, 0, '', maze))



//All maze paths
function findAllPaths(x, y, path, maze) {
  if(x < 0 || y < 0 || y >= maze.length || x >= maze[y].length || maze[y][x] === '*') {
    return []
  }
  if(maze[y][x] === 'e'){
    return [path]
  }
  maze = maze.map(row => [...row])
  maze[y][x] = '*'
  return [
    ...findAllPaths(x + 1, y, path + 'R', maze),
    ...findAllPaths(x - 1, y, path + 'L', maze), 
    ...findAllPaths(x, y - 1, path + 'U', maze), 
    ...findAllPaths(x, y + 1, path + 'D', maze)
  ]
}
console.log(findAllPaths(0, 0, '', maze))