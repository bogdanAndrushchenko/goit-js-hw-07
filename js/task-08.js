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


const createBoxes = (amount) => {
    const boxFragment = document.createDocumentFragment();
    const startDivSize = 30
    // const colorDiv = Math.floor(Math.random() * 255)
    for (let i = 0; i < amount; i += 1) {
        const finishDivSize = startDivSize + i * 10;
        const createDiv = document.createElement('div');
        createDiv.style.cssText =
            `width: ${finishDivSize}px; height: ${finishDivSize}px;
             background-color: rgb(${colorRandom()},${colorRandom()},${colorRandom()})`;
        boxFragment.append(createDiv);
    }

    divBoxesRef.append(boxFragment);
    console.log('test create')

}

const colorRandom = () => {
    return Math.floor(Math.random() * 255)
}

const destroyBoxes = () => {
    divBoxesRef.textContent = '';
    console.log('test')
}


const inputForListener = () => {
    const amount = document.querySelector('#controls>input').value;
    createBoxes(amount);
}

btnRender.addEventListener('click', inputForListener);
btnDestroy.addEventListener('click', destroyBoxes);













// inputValueRef.addEventListener('input', event => {
//     amount = event.value
// })
// console.log(btnRender);





// createBoxes(9);
// console.log(divBoxesRef);

// const element = document.querySelector('#boxes'); // assuming ul exists
// const fragment = document.createDocumentFragment();
// console.log(fragment);
// const browsers = ['Firefox', 'Chrome', 'Opera',
//     'Safari', 'Internet Explorer'
// ];

// browsers.forEach(function (browser) {
//     let li = document.createElement('li');
//     li.textContent = browser;
//     fragment.appendChild(li);
// });

// element.appendChild(fragment);
// console.log(element);

/**
 *   createDiv.style.width = '30px';
     {
        createDiv = createDiv++
let 
        // createDiv[1].style.width = '30px';
        divControlsRef.append(createDiv);
    }
    // createDiv.style.width = '30px';
// createDiv.
    // console.log(createDiv);
    // return createDiv
 */

/**
 *  const arrDiv = [];
   arrDiv.length=amount;
   arrDiv.reduce((acc,div)=>{
       const createDiv= document.createElement('div');
       div.style.width = acc+10+'px'
       divBoxesRef.append(createDiv);
       return divControlsRef
   },30)
 */