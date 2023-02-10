

// Пошук елементів
let categories = document.querySelectorAll('.item');

// Виведення кількості категорій в консоль через .length
console.log(`В списке ${categories.length} категории`);

// Перебирання кожного елемента/дитини з .item,  нічого не повертає
categories.forEach(item => {
    // Виведення тексту із кожного заголовку
    console.log(`Категория: ${item.firstElementChild.textContent}`);

    // Виведення кількості елементів
    console.log(`Количество элементов: ${item.lastElementChild.children.length}`);
});