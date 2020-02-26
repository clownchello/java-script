"use strict";

let value;

let total = 0;

while (true) {
  value = prompt("Введите число");
  if (value === null) {
    break;
  }
  value = Number(value);
  total += value;
}

console.log(`Общая сумма чисел равна ${total}`);
