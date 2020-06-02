let daysCount = Number(prompt("Количество выходов:"));
let dayPrice = 400;

let cartridgeCount1 = Number(prompt("Картриджей первой категории:"));
let cartridgePrice1 = 20;
let cartridgeCount2 = Number(prompt("Картриджей второй категории:"));
let cartridgePrice2 = 30;
let cartridgeCount3 = Number(prompt("Картриджей третьей категории:"));
let cartridgePrice3 = 50;
let utilityWorkCount = Number(prompt("Количество хоз.работ:"));
let utilityWorkPrice = 800;

let daysSum = daysCount * dayPrice;
let cartridgeSum1 = cartridgeCount1 * cartridgePrice1;
let cartridgeSum2 = cartridgeCount2 * cartridgePrice2;
let cartridgeSum3 = cartridgeCount3 * cartridgePrice3;
let utilityWorkSum = utilityWorkCount * utilityWorkPrice;
let totalSum =
  daysSum +
  cartridgeSum1 +
  cartridgeSum2 +
  cartridgeSum3 +
  utilityWorkSum -
  100;

alert(
  `За выходы: ${daysSum} руб. За картриджи первой категории: ${cartridgeSum1} руб. За картрижди второй категории: ${cartridgeSum2} руб. За картриджи третьей категории: ${cartridgeSum3} руб.За хоз.работы: ${utilityWorkSum} руб. За всё: ${totalSum} руб.`
);
