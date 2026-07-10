const temperatureInput = document.getElementById('temperature'); 

const convertButton = document.getElementById('convertButton'); 

const resetButton = document.getElementById('resetButton'); 

const result = document.getElementById('result'); 

  

function getSelectedConversion() { 

    const selectedOption = document.querySelector('input[name="conversion"]:checked'); 

    return selectedOption ? selectedOption.value : null; 

} 

  

function showResult(message) { 

    result.textContent = message; 

} 

  

convertButton.addEventListener('click', () => { 

    const temperature = parseFloat(temperatureInput.value); 

    const conversion = getSelectedConversion(); 

  

    if (temperatureInput.value.trim() === '' || Number.isNaN(temperature)) { 

        showResult('Please enter a valid number.'); 

        return; 

    } 

  

    if (conversion === 'cToF') { 

        const converted = celsiusToFahrenheit(temperature); 

        showResult(`${converted.toFixed(2)} °F`); 

    } else if (conversion === 'fToC') { 

        const converted = fahrenheitToCelsius(temperature); 

        showResult(`${converted.toFixed(2)} °C`); 

    } else { 

        showResult('Please choose a conversion direction.'); 

    } 

}); 

  

resetButton.addEventListener('click', () => { 

    temperatureInput.value = ''; 

    document.querySelector('input[name="conversion"][value="cToF"]').checked = true; 

    showResult('Your converted temperature will show here'); 

}); 