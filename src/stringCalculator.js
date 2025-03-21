/**
 * A function to add any number of numbers in a given string.
 * The function takes a string as an argument, extracts the numbers from it
 * and returns the sum of the extracted numbers.
 * @param {string} numbers - a string of comma or newline separated numbers
 * @returns {number} - the sum of the extracted numbers
 */
export function add(input) {
  if (!input) return 0;
  let delimiterPattern = /,|\n/; //Default delimiter
  let numArray = [];

  //Handle custom delimiter
  if (input.startsWith("//")) {
    let customDelimiterSection = input.split("\n")[0].slice(2); //remove the // from the start of the string
    let numberSection = input.split("\n")[1];

    //Handle multiple delimiters
    if (customDelimiterSection.startsWith("[") && customDelimiterSection.endsWith("]")) {
      let customDelimiters = customDelimiterSection.match(/\[([^\]]+)\]/g).map(d => d.slice(1, -1));
      delimiterPattern = new RegExp(customDelimiters.map(d => escapeRegex(d)).join("|"), "g");
    } else {
      // Handle single character delimiter
      delimiterPattern = customDelimiterSection;
    }

    numArray = numberSection.split(delimiterPattern).map(n => parseInt(n, 10));

  } else {
    //Handle default delimiter
    numArray = input.split(delimiterPattern).map(n => parseInt(n, 10));
  }

  //Handle negative numbers
  if (numArray.some(n => n < 0)) {
    throw new Error(`negative numbers not allowed: ${numArray.filter(n => n < 0).join(', ')}`);
  }

  //Handle numbers greater than 1000
  return numArray.filter(n => n <= 1000).reduce((sum, num) => sum + num, 0);
}


/**
 * Helper function to escape special characters in a string for use in a regex pattern.
 * @param {string} text - The string to escape
 * @returns {string} - The escaped string
 */
function escapeRegex(text) {
  return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
