let box = document.querySelector('.box'),
    btn = document.querySelector('button');

let width = box.clientWidth,
    height = box.clientHeight;

console.log(width);
console.log(height);
console.log(box.getBoundingClientRect().left); 

console.log(document.documentElement.clientWidth);
console.log(document.documentElement.clientHeight);

btn.addEventListener('click', function() {
    console.log(box.scrollTop);
    box.scrollTop = 0;

});