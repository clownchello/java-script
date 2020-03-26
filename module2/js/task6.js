"use strict";

let input;
let numbers = [];
let total = 0;
while (true) {
  input = prompt("Введите число");
  if (input === null) {
    for (let i = 0; i < numbers.length; i += 1) {
      total += Number(numbers[i]);
    }
    break;
  }
  numbers.push(input);
}
console.log(`Общая сумма чисел равна ${total}`);
