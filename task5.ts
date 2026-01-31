// Провести рефакторинг задачи так, чтобы код (toString().padStart(2, "0")) не повторялся, вынести его в отдельную функцию и использовать
// Саму задачу обернуть в отдельную функцию getDate, которая принимает в качестве параметра произвольную дату в формате '2026-10-22T22:10:15'
//* Проверить валидна ли дата в переданном параметре

const coтvertToString = (parameter: number) => {
  return parameter.toString().padStart(2, "0");
};

const getDate = (dateString: string) => {
  const date = new Date(dateString);
  const day = coтvertToString(date.getDate());
  const month = coтvertToString(date.getMonth() + 1);
  const year = coтvertToString(date.getFullYear());
  const hours = coтvertToString(date.getHours());
  const minutes = coтvertToString(date.getMinutes());
  const seconds = coтvertToString(date.getSeconds());

  const formattedDate = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
  return formattedDate;
};

console.log(getDate("2026-10-22T22:10:15"));
