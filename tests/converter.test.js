const { 

    celsiusToFahrenheit, 

    fahrenheitToCelsius 

} = require('../converter'); 

  

test('0°C converts to 32°F', () => { 

    expect(celsiusToFahrenheit(0)).toBe(32); 

}); 

  

test('100°C converts to 212°F', () => { 

    expect(celsiusToFahrenheit(100)).toBe(212); 

}); 

  

test('32°F converts to 0°C', () => { 

    expect(fahrenheitToCelsius(32)).toBe(0); 

}); 

  

test('-40°C converts to -40°F', () => { 

    expect(celsiusToFahrenheit(-40)).toBe(-40); 

}); 

  

test('-40°F converts to -40°C', () => { 

    expect(fahrenheitToCelsius(-40)).toBe(-40); 

}); 

 