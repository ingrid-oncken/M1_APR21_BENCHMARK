// EXTRA

// 41) Add an eventListener to alert when the mouse is over a link, displaying the URL
// 42) Add a button to hide every image on the page
// 43) Add a button to hide and show the table from the page
// 44) Write a function to sum every number inside the TD (if the content is numeric)
// 45) Delete the last letter from the title each time the user clicks on it
// 46) Change a single TD background color when the user clicks on it
// 47) Add a button DELETE, on click it should delete a random TD from the page
// 48) Add a pink border to a cell when the mouse is over it
// 49) Write a function to add a table with 4 rows and 3 columns programmatically
// 50) Write a function to remove the table from the page

// JS EXERCISES

// 21) Given variable x = "John" and y = "Doe", write on the console log "John <> Doe"
console.log(`Ex 21 --------------------`);
let x = `Jhon`;
let y = `Doe`;
console.log(`${x} <> ${y}`);

// 22) Create an object with properties such name, surname, email
console.log(`Ex 22 --------------------`);
let meObject = {
  name: `Ingrid`,
  surname: `Oncken`,
  email: `ingrid.oncken@gmail.com`,
};
console.log(meObject);

// 23) Delete Email from the previously created object
console.log(`Ex 23 --------------------`);
delete meObject[`email`];
console.log(meObject);

// 24) Create an array with 10 strings in it
console.log(`Ex 24 --------------------`);
let stoneFruits = [
  `Plum`,
  `Cherry`,
  `Pluot`,
  `Peach`,
  `Apricot`,
  `Nectarine`,
  `Mango`,
];

// 25) Print in the console every string in the previous array
console.log(`Ex 25 --------------------`);
console.log(stoneFruits);

// 26) Create an array with 100 random numbers in it
console.log(`Ex 26 --------------------`);

const fillArrayFunc = function () {
  let rand100Arr = []; //declaring an enpty array
  for (let i = 0; i < 100; i++) {
    //looping for 100 numbers
    let num = Math.floor(Math.random() * 100); //getting random numbers
    rand100Arr.push(num + 1);
    //pushing the random number +1 in case of 0->1, or in case of 99->100
    //so I don't have 0, and I can always have the number 100
  }
  return rand100Arr;
};
console.log(
  `This array has ${
    fillArrayFunc().length
  } random numbers, as following ${fillArrayFunc()}`
);

// 27) Write a function to get the MAX and the MIN from the previously created array
console.log(`Ex 27 --------------------`);
//***** ???? is this alrigh or I really need a function???? *****
console.log(`The MAX number in the array is ${Math.max(...fillArrayFunc())}`);
console.log(`The MIN number in the array is ${Math.min(...fillArrayFunc())}`);

// 28) Create an array of arrays, in which every array has 10 random numbers
console.log(`Ex 28 --------------------`);
const matrix = function () {
  let matrixArray1 = [];
  for (let i = 1; i < 11; i++) {
    matrixArray1.push(i);

    let matrixArray2 = [];
    for (let x = 1; x < 11; x++) {
      matrixArray2.push(Math.floor(Math.random() * 10));
    }
    console.log(matrixArray2);
  }
  return matrixArray1;
};
console.log(matrix());

// 29) Create a function that gets 2 arrays and returns the longest one
console.log(`Ex 29 --------------------`);
let arrayA = [`bergamot`, `orange`, `lime`, `lemon`, `kumquat`, `mandarin`];
let arrayB = [`fig`, `pineapple`, `bananas`];

const longestArray = function () {
  return arrayA.length - arrayB.length > 0 ? arrayA : arrayB;
};
console.log(longestArray());

// 30) Create a function that gets 2 arrays of numbers and returns the one with the higher sum of values
console.log(`Ex 30 --------------------`);
let arrayC = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arrayD = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

const greaterSum = function () {
  //I need to make a loop to sum the numbers of each array
  let sumC = 0;
  for (let c = 0; c < arrayC.length; c++) {
    sumC += arrayC[c];
  }

  let sumD = 0;
  for (let d = 0; d < arrayD.length; d++) {
    sumD += arrayD[d];
  }

  //now I need to compare the sum's and retur the greater
  return sumC > sumD ? sumC : sumD;
};
console.log(greaterSum());

// DOM

// 31) Get element with ID "container" from the page
// the anterior exercise did not specify to create and id of container, so I did as a class
console.log(`Ex 31 --------------------`);
let container = document.getElementsByClassName("container");
console.log(container);

console.log(`Ex 32 --------------------`);
// 32) Get every "td" from the page
let allTd = document.getElementsByTagName("td");
console.log(allTd);

// 33) Create a cycle that prints the text inside every td of the page
const insertTd = function () {
  for (let i = 0; i < allTd.length; i++) {
    allTd[i].innerText = "😎";
  }
};
insertTd();

console.log(`Ex --------------------`);
console.log(`Ex --------------------`);
console.log(`Ex --------------------`);
console.log(`Ex --------------------`);
console.log(`Ex --------------------`);
console.log(`Ex --------------------`);

// 34) Write a function to change the heading of the page
// 35) Write a function to add an extra row to the table
// 36) Write a function to add the class "test" to each row in the table
// 37) Write a function to add a red background to every link in the page
// 38) Console log "Page loaded" when the page is correctly loaded
// 39) Write a function to add new items to a UL
// 40) Write a function to empty a list
console.log(`Ex --------------------`);
console.log(`Ex --------------------`);
console.log(`Ex --------------------`);
console.log(`Ex --------------------`);
console.log(`Ex --------------------`);
console.log(`Ex --------------------`);
console.log(`Ex --------------------`);
