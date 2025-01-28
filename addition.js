a = randomInteger(1, 10);
b = randomInteger(1, 10);

aElem = document.getElementById('a');
bElem = document.getElementById('b');

aElem.textContent = a;
bElem.textContent = b;


const correctNumber = a + b; 

function addNumber(num) {
    const input = document.getElementById('numberInput');
    input.value += num;
}

function clearInput() {
    const input = document.getElementById('numberInput');
    input.value = '';
    const message = document.getElementById('message');
    message.textContent = '';
}

function submit(){
    const input = document.getElementById('numberInput');
    const message = document.getElementById('message');

    if (parseInt(input.value) === correctNumber) {
        message.textContent = 'Правильно!';
        message.className = 'message success';
    } else {
        message.textContent = 'Неправильно, попробуйте знову!';
        message.className = 'message error';
    }
}

function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }