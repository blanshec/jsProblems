/*
 * Задача 7: «Анаграмма»
 *
 * Два слова называют анаграммами, если они состоят из одних и тех же букв.
 * Напишите функцию, проверяющую, являются ли две строки анаграммами друг друга
 * (регистр букв не имеет значения). Важны только символы: пробелы и знаки
 * препинания не учитывайте.
 *
*/

function anagram(str1, str2) {
    // зачем объект? почему не переменные word1 и word2?
    
    specChar = /[ `~!@#$%^&*()-_—|+\-=÷¿?;:'",.<>\{\}\[\]\\\/]/g; 
    
    const word1 = str1.toLowerCase().replace(specChar, "").split("").sort().join("");
    const word2 = str2.toLowerCase().split("").sort().join("");

    return word1 === word2;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(anagram('finder', 'Friend')); // true
console.log(anagram('finder—', 'Friend')); // true
console.log(anagram('finder ', 'Friend')); // true
console.log(anagram('hello', 'bye')); // false

/* Вы упустили требование "пробелы и знаки препинания не учитывайте" */
