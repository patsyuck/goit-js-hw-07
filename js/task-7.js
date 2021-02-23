const inputRange = document.querySelector('input#font-size-control')
const textField = document.querySelector('span#text')

inputRange.addEventListener('input', () => textField.style.fontSize = inputRange.value + 'px')