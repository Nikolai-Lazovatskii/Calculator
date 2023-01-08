let output = document.querySelector('#output');
const numbersBtns = document.querySelector('#numbers');

let firstEl = '';
let operationEl = '';
let secondEl = ' ';
let flag = false;

const numbers = {
    'one': 1,
    'two': 2,
    'three': 3,
    'four': 4,
    'five': 5,
    'six': 6,
    'seven': 7,
    'eight': 8,
    'nine': 9,
    'zero': 0,
}
const operations = {
    'plus': '+',
    'minus': '-',
    'multiplication': '*',
    'division': '÷',
}

window.addEventListener('keydown', (e) => {
    if (e.key === '0') {
        const button = document.querySelector('button#zero')
        button.click() 
    } else if (e.key === '1') {
        const button = document.querySelector('button#one')
        button.click() 
    } else if (e.key === '2') {
        const button = document.querySelector('button#two')
        button.click() 
    } else if (e.key === '3') {
        const button = document.querySelector('button#three')
        button.click() 
    } else if (e.key === '4') {
        const button = document.querySelector('button#four')
        button.click() 
    } else if (e.key === '5') {
        const button = document.querySelector('button#five')
        button.click() 
    } else if (e.key === '6') {
        const button = document.querySelector('button#six')
        button.click() 
    } else if (e.key === '7') {
        const button = document.querySelector('button#seven')
        button.click() 
    } else if (e.key === '8') {
        const button = document.querySelector('button#eight')
        button.click() 
    } else if (e.key === '9') {
        const button = document.querySelector('button#nine')
        button.click() 
    } else if (e.key === '+') {
        const button = document.querySelector('button#plus')
        button.click() 
    } else if (e.key === '-') {
        const button = document.querySelector('button#minus')
        button.click() 
    } else if (e.key === '*') {
        const button = document.querySelector('button#multiplication')
        button.click() 
    } else if (e.key === '/') {
        const button = document.querySelector('button#division')
        button.click() 
    } else if (e.key === `=`) {
        const button = document.querySelector('button#result')
        button.click() 
    } else if (e.key === `c`) {
        const button = document.querySelector('button#reset')
        button.click() 
    } 
})

function reply_click(clicked_id) {
    id = clicked_id
    if (flag == true) {
        if (secondEl.length > 0) {
            output.innerText = output.innerHTML.replace(secondEl, '');
        }
        secondEl += numbers[id];
        output.innerText += secondEl;
    } else {
        firstEl += numbers[id];
        output.innerText = firstEl;
    }
}

function reply_operation_click(clicked_id) {
    let id = clicked_id;
    operationEl = operations[id];
    flag = true;
    output.innerText = `${firstEl}  ${operationEl}`;
}

function result() {
    if (operationEl == '+') {
        output.innerText = +firstEl + +secondEl
    } else if (operationEl == '-') {
        output.innerText = +firstEl - +secondEl
    } else if (operationEl == '*') {
        output.innerText = +firstEl * +secondEl
    } else if (operationEl == '÷') {
        output.innerText = +firstEl / +secondEl
    }
    firstEl = output.innerText;
    flag = false;
    operationEl = '';
    secondEl = ' ';
}

function reset(number) {
    output.innerText = '';
    firstEl = ''
    secondEl = ' '
}