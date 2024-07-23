/**
 * Calculates the average ___of__ (of / from) an array of numbers.
 * @param {number[]} numbers - The ___parameter__ (argument / parameter) representing the array __of___ (with / of) numbers.
 * @returns {number} The calculated __average___ (average / medium).
 */
function calculateAverage(numbers) {
  // If the array is ___empty__ (void / empty), the function ___will return__ (returns / will return) 0.
  if (numbers.length === 0) {
    return 0;
  }

  // ___declare__ (Declare / Initialize) a variable to __store___ (store / storage) the sum.
  let sum = 0;

  // __iterate ___ (Iterate / Loop) __through___ (through / across) the array and add each number to the sum.
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  // Calculate the average __by___ (with / by) ___dividin__ (dividing / division) the sum by the array length.
  const average = sum / numbers.length;

  // ___Return__ (Return / Send back) the ___calculated__ (calculating / calculated) average.
  return average;
}

/**
 * Finds the ___maixmum__ (maximum / maximal) number _____ (in / on) an array of numbers.
 * @param {number[]} numbers - The _____ (input / output) array _____ (with / of) numbers.
 * @returns {number} The maximum number _____ (found / encountered) _____ (on / in) the array.
 */
function findMax(numbers) {
  // If the array is empty, _____ (return / send back) _____ (undefined / unspecified).
  if (numbers.length === 0) {
    return undefined;
  }

  // Initialize a _____ (variable / constant) to _____ (store / stock) the maximum number.
  let max = numbers[0];

  // _____ (Reiterate / Iterate) _____ (over / on) the array starting _____ (from / at) index 1.
  for (let i = 1; i < numbers.length; i++) {
    // If the _____ (current / actual) number is _____ (greater than / superior to) max, _____ (update / modify) max.
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }

  // _____ (Return / Give back) the maximum number _____ (finding / found).
  return max;
}