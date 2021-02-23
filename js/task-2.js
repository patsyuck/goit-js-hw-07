const ingredients = ['Картопля', 'Гриби', 'Часник', 'Помідори', 'Зелень', 'Приправи']

const nodes = ingredients.map(elem => {
    const node = document.createElement('li')
    node.textContent = elem
    return node
})

const ingredientsNodes = document.querySelector('ul#ingredients')
/* nodes.forEach(node => ingredientsNodes.appendChild(node)) */
ingredientsNodes.append(...nodes)