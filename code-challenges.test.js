// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

describe("genFibonacci", () => {
  //Create an it function that will explain what is the purpose of the fibonaccsiSeq function
  it("Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.", () => {
    //Given 1st testCase is to equal the Expected output: [1, 1, 2, 3, 5, 8]
    const fibLength1 = 6;
    expect(genFibonacci(fibLength1)).toEqual([1, 1, 2, 3, 5, 8]);

    //Given 2nd testCase is to equal the Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
    const fibLength2 = 10;
    expect(genFibonacci(fibLength2)).toEqual([
      1, 1, 2, 3, 5, 8, 13, 21, 34, 55,
    ]);
  });
});
// Test Suites: 1 failed, 1 total
// ReferenceError: genFibonacci is not defined

// b) Create the function that makes the test pass.

// PSEUDOCODE:
// To create the function to make the test pass I will declare variables to manipulate fibanacci sequence with.
// First I will create an empty array to store the numbers. If the input number is less than or equal to 2 a return is needed.
// Next I'll use a for-loop to go through iterations based on the input number.
// The repeating loop will increment the fibanacci sequence until the iterations are complete, and return the result of the fibonacci sequence.

const genFibonacci = (num) => {
  const seqArr = [];

  let num1 = 1;
  let num2 = 1;

  for (let i = 0; i < num; i++) {

    let fAdd = num1 + num2;


    seqArr.push(num1);


    num1 = num2;
    num2 = fAdd;
  }

  return seqArr;
};

// Test Suites: 1 failed, 1 total
// ReferenceError: sumArray is not defined


// --------------------2) Create a function that takes in an object and returns an array of the numbers sorted from least to greatest.
// Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

// a) Create a test with expect statements for each of the variables provided.

const studyMinutesWeek1 = {
  sunday: 90,
  monday: 30,
  tuesday: 20,
  wednesday: 15,
  thursday: 30,
  friday: 15,
  saturday: 60
}
// Expected output: [15, 15, 20, 30, 30, 60, 90]

const studyMinutesWeek2 = {
  sunday: 100,
  monday: 10,
  tuesday: 45,
  wednesday: 60,
  thursday: 20,
  friday: 15,
  saturday: 65
}
// Expected output: [10, 15, 20, 45, 60, 65, 100]


describe("studySort", () => {
  it("Create a function that takes in an object and returns an array of the numbers sorted from least to greatest.", () => {
    const studyMinutesWeek1 = {
      sunday: 90,
      monday: 30,
      tuesday: 20,
      wednesday: 15,
      thursday: 30,
      friday: 15,
      saturday: 60,
    };
    expect(studySort(studyMinutesWeek1)).toEqual([15, 15, 20, 30, 30, 60, 90]);
    const studyMinutesWeek2 = {
      sunday: 100,
      monday: 10,
      tuesday: 45,
      wednesday: 60,
      thursday: 20,
      friday: 15,
      saturday: 65,
    };
    expect(studySort(studyMinutesWeek2)).toEqual([10, 15, 20, 45, 60, 65, 100]);
  });
});

// 

// b) Create the function that makes the test pass.

// PSEUDOCODE:
// First I'll declare the function
// Next, I will iterate over the function to get the values by using dot notation in this case objects.values.
// The last step will be to sort by number from least to greatest also using dot noatation, and the .sort() method, in this case it will look like .sort(function(a,b){return a-b}))


const studySort = (obj) => {
  let sortedArr = [];

  for (let val in obj) {
    sortedArr.push(obj[val]);
    sortedArr = sortedArr.sort((a, b) => a - b);
  }
  return sortedArr;
};

// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

const accountTransactions1 = [100, -17, -23, -9]
// Expected output: [100, 83, 60, 51]

const accountTransactions2 = [250, -89, 100, -96]
// Expected output: [250, 161, 261, 165]

const accountTransactions3 = []
// Expected output: []


describe("accuSum", () => {
  it("Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.", () => {
    const accountTransactions1 = [100, -17, -23, -9];
    expect(accuSum(accountTransactions1)).toEqual([100, 83, 60, 51]);
    const accountTransactions2 = [250, -89, 100, -96];
    expect(accuSum(accountTransactions2)).toEqual([250, 161, 261, 165]);
    const accountTransactions3 = [];
    expect(accuSum(accountTransactions3)).toEqual([]);
  });
});

// expect(received).toEqual(expected) // deep equality

// Expected: [100, 83, 60, 51]
// Received: undefined


// b) Create the function that makes the test pass.

//PSEUDOCODE:
//First I will declare a function sumArr and the create a conditional for the empty array, and return empty array.
// Next, I'll establish the conditional for the numbers in the array, and create a temp array.
// Next I will add the first number using arr[0] to the second and push to the temp array.
// I'll utilize the .map method and continue iterating through and return the temp array.

const accuSum = (arr) => {
  let result = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    result[i] = result[i - 1] + arr[i];
  }
  return result;
};

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total



