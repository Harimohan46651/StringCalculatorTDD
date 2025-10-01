# String Calculator TDD

A JavaScript implementation of the String Calculator kata using Test-Driven Development (TDD).

## Features

- **Empty string**: Returns 0
- **Single number**: Returns the number itself
- **Multiple numbers**: Supports comma-separated numbers
- **Newline delimiters**: Handles `\n` as delimiter
- **Custom delimiters**: Supports format `//[delimiter]\n[numbers]`
- **Multiple delimiters**: Supports format `//[delim1][delim2]\n[numbers]`
- **Long delimiters**: Supports delimiters of any length
- **Negative numbers**: Throws error with all negative numbers listed
- **Large numbers**: Ignores numbers > 1000

## Running Tests

```bash
npm test
```