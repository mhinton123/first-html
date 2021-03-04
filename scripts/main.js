
/** java logo image changes whenuser clicks on it */

let myImg = document.querySelector('img');
myImg.onclick = function() {
    let mySrc = myImg.getAttribute('src');
    if (mySrc === 'images/js.png') {
        myImg.setAttribute('src', 'images/tools.png');
    } else {
        myImg.setAttribute('src', 'images/js.png');
    }
}

/** js page - prompts usr to enter name, stores it in browser, then uses it if suer revisis site */

let myTitle = document.querySelector('h3');
let myButton = document.querySelector('button');


myButton.onclick = function changeName() {
    usrName = prompt('What is your name?');
    if (!usrName) {
        changeName();
    } else {
        localStorage.setItem('name', usrName);
        myTitle.textContent = 'Welcome: ' + usrName; 
    }

}

if (!localStorage.getItem('name')) {
    changeName();
} else {
    storedName = localStorage.getItem('name')
    myTitle.textContent = 'Welcome: ' + storedName;
}

