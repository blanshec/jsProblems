/*
 * Задача 4: «С большой буквы»
 *
 * Напишите функцию capitalize(str). Функция должна возвращать новую
 * строку, каждое слово в которой начинается с прописной буквы.
 *
 */

function capitalize(str) {
    if (str) {
        const wordArr = str.split(" ");

        for (let word in wordArr) {
            let char = wordArr[word].slice(0, 1).toUpperCase();
            wordArr[word] = wordArr[word].slice(1);
            wordArr[word] = char.concat(wordArr[word]);
        }

        return wordArr.join(" ");
    }

    // логичнее возвращать "", если на вход подают пустую строку, то она же и должна вернуться
    return "";
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(capitalize('молодость всё простит')); // "Молодость Всё Простит"
console.log(capitalize('five nights at freddy`s'));
console.log(capitalize());

/* Обидная недоработка для пустой строки, остальное верно */
