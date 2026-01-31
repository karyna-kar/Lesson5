// Провести рефакторинг задачи так, чтобы код (toString().padStart(2, "0")) не повторялся, вынести его в отдельную функцию и использовать
// Саму задачу обернуть в отдельную функцию getDate, которая принимает в качестве параметра произвольную дату в формате '2026-10-22T22:10:15'
//* Проверить валидна ли дата в переданном параметре

const now: Date = new Date();

const coтvertToString = (parameter: number) => {
  return parameter.toString().padStart(2, "0");
};

const day = coтvertToString(now.getDate());
const month = coтvertToString(now.getMonth() + 1);
const year = coтvertToString(now.getFullYear());
const hours = coтvertToString(now.getHours());
const minutes = coтvertToString(now.getMinutes());
const seconds = coтvertToString(now.getSeconds());

const formattedDate = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;

console.log(formattedDate);
