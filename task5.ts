// Провести рефакторинг задачи так, чтобы код (toString().padStart(2, "0")) не повторялся, вынести его в отдельную функцию и использовать
// Саму задачу обернуть в отдельную функцию getDate, которая принимает в качестве параметра произвольную дату в формате '2026-10-22T22:10:15'
//* Проверить валидна ли дата в переданном параметре

const convertToString = (parameter: number) => {
  return parameter.toString().padStart(2, "0");
};

const checkFormat = (inputString: string) => {
  const pattern = /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/;
  return pattern.test(inputString);
};

const getDate = (dateString: string) => {
  if (checkFormat(dateString) == true) {
    const date = new Date(dateString);
    const day = convertToString(date.getDate());
    const month = convertToString(date.getMonth() + 1);
    const year = convertToString(date.getFullYear());
    const hours = convertToString(date.getHours());
    const minutes = convertToString(date.getMinutes());
    const seconds = convertToString(date.getSeconds());

    const formattedDate = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
    return formattedDate;
  }
  return "Used Date doesn't match specified format";
};

console.log(getDate("2026-10-22T22:10:15"));
