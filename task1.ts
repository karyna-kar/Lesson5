// Написать функцию, которая будет высчитывать сумму чисел от нуля, до параметра, который мы в неё передаем.

function sumOfNumbers(lastNumber: number = 0) {
  let result = 0;
  for (let startNumber = 0; startNumber <= lastNumber; startNumber++) {
    result += startNumber;
  }
  return result;
}

console.log(sumOfNumbers());
