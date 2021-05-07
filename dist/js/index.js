'use strict';

// change intro sentences
let secondText = ['turned highly creative', 'self-taught', ' front-end developer', 'and Tech enthusiast', ];
var counter = 0;
var elem = document.querySelector('.the-second');
var inst = setInterval(change, 2000);

function change() {
    elem.innerHTML = secondText[counter];
    counter++;
    if (counter >= secondText.length) {
        counter = 0;
        // clearInterval(inst); // uncomment this if you want to stop refreshing after one cycle
    }
}

// close/hide warning button 
let warningBtn = document.querySelector('.message-alert-dismiss');
let messageContainer = document.querySelector('.message-container');
warningBtn.addEventListener('click', function () {
    messageContainer.classList.add('hideWarning');
});