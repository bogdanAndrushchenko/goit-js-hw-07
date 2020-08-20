'use strict';
/**
 * В HTML есть список категорий ul#categories.
 * 
 * Напиши скрипт, который выполнит следующие операции.

Посчитает и выведет в консоль количество категорий в ul#categories, 
то есть элементов li.item. Получится 'В списке 3 категории.'.

Для каждого элемента li.item в списке ul#categories, 
найдет и выведет в консоль текст заголовка элемента (тега h2) 
и количество элементов в категории (всех вложенных в него элементов li).

Например для первой категории получится:

Категория: Животные
Количество элементов: 4
 */
const liItem = Array.from(document.querySelectorAll(".item"));
console.log(`В списке ${liItem.length}  категории.`);

liItem.map((item) => {
    const count = item.lastElementChild.children.length;
    const content = item.firstElementChild.textContent;
    console.log(`Категория: ${content}
  Количество элементов: ${count}`);
});