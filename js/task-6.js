const inputText = document.querySelector('input#validation-input')
let len = Number(inputText.getAttribute('data-length'))

const addColor = (elem) => {
    elem.target.value.length === len ? inputText.classList.add('valid') : inputText.classList.add('invalid')
}
const removeColor = () => {
    inputText.classList.remove('valid')
    inputText.classList.remove('invalid')
}

inputText.addEventListener('focus', removeColor)
inputText.addEventListener('blur', addColor)