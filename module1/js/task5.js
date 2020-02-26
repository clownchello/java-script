"use strict";

const country = prompt("Укажите вашу страну");
let cost;

if (country === null) {
  alert("Отменено пользователем");
}
switch (country.toLowerCase()) {
  case "китай":
    cost = 100;
    console.log(`Доставка в ${country} будет стоить ${cost} кредитов`);
    break;

  case "чили":
    cost = 250;
    console.log(`Доставка в ${country} будет стоить ${cost} кредитов`);
    break;

  case "австралия":
    cost = 170;
    console.log(`Доставка в ${country} будет стоить ${cost} кредитов`);
    break;

  case "индия":
    cost = 80;
    console.log(`Доставка в ${country} будет стоить ${cost} кредитов`);
    break;

  case "ямайка":
    cost = 120;
    console.log(`Доставка в ${country} будет стоить ${cost} кредитов`);
    break;

  default:
    console.log("В вашу страну доставка не доступна");
    break;
}
