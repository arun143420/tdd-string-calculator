# String Calculator

A JavaScript implementation of the String Calculator kata. This project demonstrates Test-Driven Development (TDD) practices by implementing a calculator that can add numbers from a string input.

## Features

- Add numbers from a string input
- Support for comma and newline delimiters
- Support for custom delimiters
- Support for multiple custom delimiters
- Ignore numbers greater than 1000
- Throw exception for negative numbers

## Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd tdd-string-calculator
```

2. Install dependencies:
```bash
npm install
```

## Running Tests

To run the test suite, use the following command:

```bash
npm test
```

This will execute all test cases using Jest.

## Example Usage

```javascript
import { add } from './src/stringCalculator.js';

// Basic usage with comma delimiter
add("1,2,3") // returns 6

// Using newline as delimiter
add("1\n2,3") // returns 6

// Using custom delimiter
add("//;\n1;2") // returns 3

// Using multiple custom delimiters
add("//[*][%]\n1*2%3") // returns 6

// Numbers greater than 1000 are ignored
add("2,1001") // returns 2

// Negative numbers throw an exception
add("1,-2,3") // throws "negative numbers not allowed: -2"
```