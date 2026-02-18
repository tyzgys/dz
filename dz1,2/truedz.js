
document.addEventListener("DOMContentLoaded", function(){


// Задача 1
const age = parseInt(prompt("Введите ваш возраст:"));
if (age < 65) {
    console.log("Вам ещё рано на пенсию");
} 
else {
    console.log("Поздравляем с пенсией!");
}


// Задача 2
const n1 = parseInt(prompt("Введите первое число:"));
const n2 = parseInt(prompt("Введите второе число:"));

if (n1 > n2) {
    console.log("Первое число больше");
} 
else if (n2 > n1) {
    console.log("Второе число больше");
} 
else {
    console.log("Числа равны");
}


// Задача 3
const number = parseInt(prompt("Введите число:"));

if (number % 2 === 0) {
    console.log("Это чётное число");
} 
else {
    console.log("Это нечётное число");
}


// Задача 4
const secretNumber = 7;
const userGuess = parseInt(prompt("Угадайте число от 1 до 10:"));

if (userGuess === secretNumber) {
    console.log("Вы угадали!");
} 
else {
    console.log("Попробуйте ещё раз!");
}


// Задача 5
const login = prompt("Введите логин:");
const password = prompt("Введите пароль:");

if (login === "admin" && password === "12345") {
    console.log("Добро пожаловать!");
} 
else {
    console.log("Неверный логин или пароль");
}


// Задача 6
const year = parseInt(prompt("Введите год:"));

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log("Это високосный год");
} 
else {
    console.log("Это не високосный год");
}


// Задача 7
const value = parseInt(prompt("Введите число:"));

if (value > 100) {
    console.log("Большое число");
}
else {
    console.log("Точно 100!");
}

})