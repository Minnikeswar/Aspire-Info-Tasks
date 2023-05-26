// This code defines the constants `maxDigit`, `minDigit`, and `highestOddNumber`.
const maxDigit = 9;
const minDigit = 0;

// This variable stores the highest odd number.
const highestOddNumber = 100000000;

// This variable stores the number of odd numbers.
var oddNumberCount;


/**
 * 
 * @param {number} inputNumber 
 * @returns {boolean} 
 * @description Function which returns True if the inputNumber is prime else it returns false . Time complexity : O(sqrt(inputNumber))
 */

// This function checks if a number is prime.
function isPrimeNumber(inputNumber) {
  // This variable stores whether the number is prime.
  var isPrime = true;

  // If the number is 1, it is not prime.
  if (inputNumber == 1) {
    isPrime = false;
  }

  // For each number from 2 to the square root of the input number,
  // if the input number is divisible by the number, it is not prime.
  for (var num = 2; num * num <= inputNumber; num++) {
    if (inputNumber % num == 0) {
      isPrime = false;
      break;
    }
  }

  // Return whether the number is prime.
  return isPrime;
}

/**
 * 
 * @param {string} generatedString - the string which is currently building by appending digits
 * @param {number} maxRange - the maximum range till which the string should be built.
 * @returns {void}
 */

// This function generates all the odd numbers from 1 to the maximum range.
function generateNumbers(generatedString, maxRange) {
  // Get the length of the generated string.
  var stringLength = generatedString.length;

  // If the length of the generated string is less than or equal to the maximum range,
  // do the following:
  if (stringLength <= maxRange) {
    // Convert the generated string to a number.
    var generatedNumber = parseInt(generatedString);

    // If the generated number is prime, increment the number of odd numbers.
    if (isPrimeNumber(generatedNumber)) {
      oddNumberCount++;
    }

    // If the length of the generated string is equal to the maximum range, return.
    if (stringLength == maxRange) {
      return;
    }
  }

  // Get the last character of the generated string.
  let lastCharacter = generatedString.charAt(stringLength - 1);

  // Get the last digit of the generated string.
  let lastDigit = parseInt(lastCharacter);

  // If the last digit is not equal to the maximum digit,
  // do the following:
  if (lastDigit != maxDigit) {
    // Append the next digit to the generated string.
    generatedString = generatedString.concat(lastDigit + 1);

    // Generate all the odd numbers from the new generated string.
    generateNumbers(generatedString, maxRange);

    // Restore the string.
    generatedString = generatedString.slice(0, -1);
  }

  // If the last digit is not equal to the minimum digit,
  // do the following:
  if (lastDigit != minDigit) {
    // Append the previous digit to the generated string.
    generatedString = generatedString.concat(lastDigit - 1);

    // Generate all the odd numbers from the new generated string.
    generateNumbers(generatedString, maxRange);

    // Restore the string.
    generatedString = generatedString.slice(0, -1);
  }
}

/**
 * 
 * @param {number} maxLimit - the maximum range till which the string should be built.
 * @returns {number} - count of the numbers satisfying the conditions
 * @description Function to call the generator function by initailizing the string
 */

// This function counts the number of odd numbers from 1 to the maximum limit.
function countOddNumbers(maxLimit) {
  // Initialize the number of odd numbers to 0.
  oddNumberCount = 0;

  // For each digit from 1 to the maximum digit,
  // do the following:
  for (var firstDigit = 1; firstDigit <= maxDigit; firstDigit++) {
    // Create a new string with the first digit.
    var intitalString = "";
    intitalString = intitalString.concat(firstDigit);

    // Generate all the odd numbers from the new string.
    generateNumbers(intitalString, maxLimit);
  }

  // Return the number of odd numbers.
  return oddNumberCount;
}

/**
 * 
 * @param {string} inputString 
 * @returns {boolean} - result whether the condition is met or not
 * @description - to check whether enetered number is a perfect exponetial of 10
 */

//function to cheackwhether the number is a power of 10
function validateNumber(inputString) {
  if (inputString.charAt(0) == 0) return false;

  var oneCount = 0;

  // Count the occurrences of '1' in the input string
  for (let stringIndex = 0; stringIndex < inputString.length; stringIndex++) {
    if (inputString.charAt(stringIndex) == "1") {
      oneCount++;
    }
  }

  // Check if the count of '1' is exactly 1
  var result = oneCount == 1;

  return result;
}

// This function generates the result of the input string.
/**
 * 
 * @param {string} inputString - input received from the user
 * @returns {void}
 * @description - Function that initiates the program flow only after validating the input
 */
function generateResult(inputString) {
  try {
    var inputNumber = parseInt(inputString);

    // Check if the inputNumber meets the required conditions
    if (
      inputNumber < 10 ||
      inputNumber > highestOddNumber ||
      isNaN(inputNumber) ||
      inputString.includes(".") ||
      !validateNumber(inputString)
    ) {
      throw new Error();
    }
  } catch (error) {
    console.log(
      "Please enter a valid number (only powers of 10) upto 100 Million"
    );
    return;
  }

  // Calculate the effective string length
  var effectiveStringLength = inputString.length - 1;

  // Perform the count of odd numbers based on effective string length
  var result = countOddNumbers(effectiveStringLength);
  console.log(result);
}

/**
 * 
 * @returns {void}
 * @description - Main function which runs on all type of inputs
 */

function main() {
    // differnt types of input in string format
  const list = ["10000000", "-1", "a", "0010"];

  // Generate results for each item in the list
  for (let stringIndex = 0; stringIndex < list.length; stringIndex++) {
    generateResult(list[stringIndex]);
  }
}

main();

