const counter = document.querySelector('div#counter').querySelector('span#value')
let counterValue = Number(counter.textContent)
const increment = () => {
    counterValue = counterValue + 1
    counter.textContent = counterValue
}
const decrement = () => {
    counterValue = counterValue - 1
    counter.textContent = counterValue
}
const incrementNode = document.querySelector('div#counter').querySelector('button[data-action="increment"]')
const decrementNode = document.querySelector('div#counter').querySelector('button[data-action="decrement"]')
/*incrementNode.addEventListener('click', function () { increment() })
decrementNode.addEventListener('click', function () { decrement() })*/
incrementNode.addEventListener('click', increment)
decrementNode.addEventListener('click', decrement)