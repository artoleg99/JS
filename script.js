3 4 6;
'string', "string", `string`;
true / false

let a;
console.log(a);

const obj = {
    name: 'Alex'
}
             0  1  2  3
const arr = [1, 2, 4, 6];

// 1)
console.log (typeof(String(4)));
// 2)
console.log (typeof("q" + false));
console.log('https//vk.com/catalog/' + 5);

// - to Number 

//1) 
console.log (typeof(Number('5')));
//2)
console.log(typeof(5 + +'5'));
//3)
console.log (typeof(parseInt('15px', 10)));

let ans = +promt("hello", '');

//0, '', null, undefined, NaN

let switcher = null;

if (switcher) {
    console.log("working...")
}

switcher = 1;

if (switcher) {
    console.log("working...")
}
//2)
console.log (typeof(Boolean('5')));
// 3)
console.log (typeof(!!'5'));