function first(){
    //что-то делаем
    setTimeout( function(){
        console.log(1);
    }, 500);
}

function second(){
    console.log(2);
}

first();
second();

function learnJS(lang, callback){
    console.log("я учу " + lang);
    callback();
}

function done() {
    console.log("я прошел 3й урок");
}

learnJS("JavaScript", done);