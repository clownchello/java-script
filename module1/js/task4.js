("use strict");

const credits = 23580;
const pricePerDroid = 3000;

const quantity = prompt("Сколько вы хотите купить?");

if (quantity === null) {
  console.log("Отменено пользователем!");
} else {
  let totalPrice = pricePerDroid * quantity;
  if (totalPrice <= credits) {
    console.log(
      `Вы купили ${quantity} дроидов, на счету осталось ${credits -
        totalPrice} кредитов.`
    );
  } else {
    console.log("Недостаточно средств на счету!");
  }
}
