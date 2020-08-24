/**
 * Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), 
 * подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка 
 * 'незнакомец'.

<input type="text" placeholder="Ваше имя?" id="name-input" />
<h1>Привет, <span id="name-output">незнакомец</span>!</h1>
 */

const helloTextRef = document.querySelector("#name-output")
const inputRef = document.querySelector("#name-input")

inputRef.addEventListener('input', event => {
    helloTextRef.textContent = event.target.value
    if (event.target.value === '') {
        helloTextRef.textContent = 'незнакомец'
    }
})