const categoriesNodes = document.querySelector('ul#categories').querySelectorAll('li.item')
console.log(`У списку ${categoriesNodes.length} категорії.`)

categoriesNodes.forEach(elem => {
    console.log(`Категорія: ${elem.querySelector('h2').textContent}`)
    console.log(`Кількість елементів: ${elem.querySelectorAll('li').length}`)
})