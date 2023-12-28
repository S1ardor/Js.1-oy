/// * * * * MASHQLAR * * * * / / /

// * * * 1-misol * * * //

// var number = prompt("son kriting");
// var number1 = prompt("yana son kriting");
// var number2 = prompt("yana son kriting");
// var sum = Math.max(number, number1, number2);
// console.log(`${number} ${number1} ${number2}\n${sum}`);


// * * * 2-misol * * * //

// var num = Math.round(Math.random() * 100 + 1);
// var num1 = Math.round(Math.random() * 100 + 1);
// var num2 = Math.round(Math.random() * 100 + 1);
// var res = Math.max(num, num1, num2);
// console.log(`${num} ${num1} ${num2}\n${res}`);




/// * * * * UY-ISHI * * *  * ///

// * * * 1-mison * * * //
var box = document.querySelector(".box");

var userNumber = prompt("son kriting");
var a = 3;
var b = 5;
var result;

if(userNumber % a == 0 && userNumber % b == 0){
    result = "FizzBuzz";
}else if(userNumber % a == 0){
    result = "Fizz";
}else if(userNumber % b == 0){
    result = "Buzz";
}else{
    result = "kritilgan son 3 va 5 ga bo'linmaydi: boshqa son kriting";
}
box.textContent = result;


// * * * 2-misol * * * //

// var userName = prompt("ismingizni kriting: ");
// var sourName = prompt("familyangizni kriting: ");
// var userAge = prompt("yoshingizni kriting: ");
// var userEmail = prompt("emailingizni kriting: ");
// var userPhoneNumber = prompt("telefon raqamingizni kriting: ");
// var userSum = prompt("sizda necha yuz dollor bor: ");
// var DOLLOR_UZS = 1240;
// var res = Math.abs(userSum * DOLLOR_UZS);

// box.textContent = `${userName},
// ${sourName},
// ${userAge},
// ${userEmail},
// ${userPhoneNumber},
// ${res}`;



