# Temperature Converter

A simple web app for converting temperatures between Celsius (°C) and Fahrenheit (°F). Built with vanilla HTML, CSS, and JavaScript, with unit tests written in Jest and continuous integration via GitHub Actions.

## Features

- Convert Celsius to Fahrenheit and Fahrenheit to Celsius
- Radio buttons to choose the conversion direction
- Input validation (warns on empty or non-numeric input)
- Results rounded to two decimal places
- Reset button to clear the input and result
- Clean, card-based interface using the Montserrat font
- Unit-tested conversion logic
- Automated tests run on every push and pull request

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18, 20, or 22) — required only for running the tests

### Installation

Clone the repository:

```bash
git clone https://github.com/sharon933/temperature-converter.git
cd temperature-converter
```

Install the development dependencies:

```bash
npm install
```

### Testing 
An example of my unit test 
```


const {
 
    celsiusToFahrenheit,
 
    fahrenheitToCelsius
 
} = require('../converter');
 
  
 
test('0°C converts to 32°F', () => {
 
    expect(celsiusToFahrenheit(0)).toBe(32);
 
}); 

```