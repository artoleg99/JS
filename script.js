'use strict';

if (2*4 == 7) {
    console.log("верно!")
} else {
    console.log("Неверно!")

let num = 50;

if (num <49) {
    console.log("неверно!")
} else if (num > 100) {
    console.log("Много!")
} else {
    console.log("Верно!")
};

(num == 50) ? console.log("верно!") : console.log('Неверно!');

switch (num) {
    case num < 49:
        console.log("неверно!");
        break;
    case num > 100:
        console.log("Много!");
        break;
    case num > 80:
        console.log("Много!");
        break;
    case 50:
        console.log("Верно!");
        break;
    default:
        console.log("Что-то пошло не так!")
        break;
}