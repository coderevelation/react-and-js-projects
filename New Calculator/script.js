const calc = document.querySelector('.calc')
const display = document.getElementById('display')

// add/ append number to the display
function appendNumber(number) {
    display.value += number
}

// add/ append number to the display
function appendOperator(operator) {
    display.value += operator
}

// clear display content
function clearDisplay(clear) {
    display.value = ''
}

// calculate result 
function calculate() {
    try {
        // using the eval()
        let result = eval(display.value)
        display.value = result
    } catch (error) {
        display.value = 'Error'
    }
}