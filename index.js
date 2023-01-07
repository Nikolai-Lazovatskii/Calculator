let output = document.querySelector('#output');
const numbersBtns = document.querySelector('#numbers');

let firstEl = ''
let operationEl = ''
let secondEl = ''
let flag = false

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

function reply_click(clicked_id) {
    if (flag == true) {
        output.innerText += second_click(clicked_id);
    } else {
        let id = clicked_id;
        console.log(firstEl);
        firstEl += numbers[id];
        output.innerText = firstEl;
    }
}

function reply_operation_click(clicked_id) {
    let id = clicked_id;
    operationEl = operations[id];
    flag = true;
    output.innerText = `${firstEl} ${operationEl} `;
}

function second_click(clicked_id) {
    let sec_id = clicked_id;
    secondEl += numbers[sec_id]
    return secondEl;
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
    secondEl = NaN;
}

function reset(number) {
    output.innerText = '';
    firstEl = ''
    secondEl = ''
}