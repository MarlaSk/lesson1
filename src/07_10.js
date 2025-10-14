/*
Напишите функцию, которая получает на вход отсортированный массив чисел от 1 до N и возвращает пропущенные числа.
Если массив, полученный на вход, не отсортирован, необходимо вернуть null.
*/

const getMissingDigits = (arr) => {
  const sortArr = [];
  const maxNum = arr.sort((a, b) => a - b)[arr.length - 1];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) return null;
  }

  for (let i = 1; i < maxNum; i++) {
    if (!arr.includes(i)) {
      sortArr.push(i);
    }
  }
  return sortArr;
};
const result1 = getMissingDigits([1, 2, 3, 5, 8, 10, 11, 13]); // [4, 6, 7, 9, 12];
console.log(result1);

// const result2 = getMissingDigits([1, 2, 5, 3]); // null

// const result3 = getMissingDigits([1, 5]); // [2, 3, 4]
