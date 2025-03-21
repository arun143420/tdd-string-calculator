  /**
   * A function to add any number of numbers in a given string.
   * The function takes a string as an argument, extracts the numbers from it
   * and returns the sum of the extracted numbers.
   * @param {string} numbers - a string of comma or newline separated numbers
   * @returns {number} - the sum of the extracted numbers
   */
export function add(numbers) {
    if (!numbers) return 0;  
    let delimiter = /,|\n/;
    const numArray = numbers.split(delimiter).map(n => parseInt(n, 10));

    
    if (numArray.some(n => n < 0)) {
        throw new Error(`negative numbers not allowed: ${numArray.filter(n => n < 0).join(', ')}`);
    }

    return numArray.filter(n => n <= 1000).reduce((sum, num) => sum + num, 0);
  }