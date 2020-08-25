'use strict';
/**
 * Напиши скрипт создания и очистки коллекции элементов.
 *  Пользователь вводит количество элементов в input и нажимает кнопку Создать, 
 * после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. 
Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

Каждый созданный div:

Имеет случайный rgb цвет фона
Размеры самого первого div - 30px на 30px
Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
Создай функцию destroyBoxes(), которая очищает div#boxes.

<div id="controls">
  <input type="number" min="0" max="100" step="1" />
  <button type="button" data-action="render">Создать</button>
  <button type="button" data-action="destroy">Очистить</button>
</div>

<div id="boxes"></div>
 */

const divBoxesRef = document.querySelector('#boxes');
const btnRender = document.querySelector('button[data-action="render"]');
const btnDestroy = document.querySelector('button[data-action="destroy"]');

const createDivFn = (size) => {
    const startDivSize = 30
    const finishDivSize = startDivSize + size * 10;
    const createDiv = document.createElement('div');
    createDiv.style.cssText =
        `width: ${finishDivSize}px; height: ${finishDivSize}px;
          background-color: rgb(${colorRandom()})`;
    return createDiv
}


const createBoxes = (amount) => {
    const boxFragment = document.createDocumentFragment();
    for (let i = 0; i < amount; i += 1) {
        let createDiv = createDivFn(i)
        boxFragment.append(createDiv);
    }
    divBoxesRef.append(boxFragment);

}

const colorRandom = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `${r},${g},${b}`
}
console.log(colorRandom());

const destroyBoxes = () => {
    divBoxesRef.textContent = '';
}


const inputForListener = () => {
    const amount = document.querySelector('#controls>input').value;
    createBoxes(amount);
}

btnRender.addEventListener('click', inputForListener);
btnDestroy.addEventListener('click', destroyBoxes);