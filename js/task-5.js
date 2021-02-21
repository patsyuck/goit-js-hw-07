const inputName = document.querySelector('input#name-input')
const outputName = document.querySelector('span#name-output')

const addName = (elem) => { elem.target.value === '' ? outputName.textContent = 'незнайомець' : outputName.textContent = elem.target.value }

inputName.addEventListener('input', addName)