/*
 * Задача 2: «FizzBuzz»
 *
 * Напишите функцию fizzBuzz(n), принимающую как аргумент целое число.
 * Функция должна выводить в консоль числа от 1 до n, заменяя числа:
 *
 * • кратные трём — на fizz;
 * • кратные пяти — на buzz;
 * • кратные и трём, и пяти одновременно — на fizzbuzz.
 * 
 */

function fizzBuzz(num) {
    // do {
    //     if ((num % 3 == 0) && (num % 5 == 0)) {
    //         console.log("fizzbuzz " + num);
    //     } else if (num % 5 == 0) {
    //         console.log("buzz " + num);
    //     } else if (num % 3 == 0) {
    //         console.log("fizz " + num);
    //     }
    //     num -= 1;
    // } while (num !== 0)
    if (num <= 0) {
        return 1;
    } else {
        if ((num % 3 == 0) && (num % 5 == 0)) {
            console.log("fizzbuzz " + num);
            return fizzBuzz(num - 1);
        } else if (num % 5 == 0) {
            console.log("buzz " + num);
            return fizzBuzz(num - 1);
        } else if (num % 3 == 0) {
            console.log("fizz " + num);
            return fizzBuzz(num - 1);
        }
    }
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(fizzBuzz(15));