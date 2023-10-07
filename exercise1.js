const value = prompt("Введите значение");
const result = +value;

if (typeof result !== "number") {
  alert("Упс, кажется вы ошиблись");
} else if (Number.isNaN(result)) {
  alert("Введены не корректные данные");
} else if (result % 2 === 0) {
  alert("Это четное число");
} else {
  alert("Число не четное");
}
