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
        secondEl += second_click(clicked_id);
        output.innerText += secondEl;
    } else {
        let id = clicked_id;
        firstEl += numbers[id];
        console.log(typeof(firstEl));
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
    return numbers[sec_id];
}

function result() {
    if (operationEl == '+') {
        output.innerText = +firstEl + secondEl
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