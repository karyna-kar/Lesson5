// Напишите функцию, которая при каждом вызове будет выводит увеличенный счетчик на 1

// Пример:
const counter = createCounter(10);
console.log(counter()); // 11
console.log(counter()); //12
console.log(counter()); //12

function createCounter(startNumber: number) {
  let counter = startNumber;
  return () => {
    counter++;
    return counter;
  };
}
