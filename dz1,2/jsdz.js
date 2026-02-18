document.addEventListener("DOMContentLoaded", function(){

    // Задача 1 

    let str = 'abcde';
    console.log("Задача 1:");
    console.log(str[0]); // a
    console.log(str[1]); // b
    console.log(str[4]); // e
    
    // Задача 2 
  
    let a = parseInt(prompt("Введите первое число:"));
    let b = parseInt(prompt("Введите второе число:"));
    
    console.log("Задача 2:");
    console.log(a > 0 || b > 0); // true, если хотя бы одно число больше 0
     
    
    // Задача 3 
    
    let age = parseInt(prompt("Введите ваш возраст:"));
    
    console.log("Задача 3:");
    if (age >= 18) {
        console.log("Совершеннолетний");
    } 
    else {
        console.log("Несовершеннолетний");
    }



})