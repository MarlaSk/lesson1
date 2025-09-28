// Подсчитать количество вхождений всех символов в строке. Если у вас есть строка вида aba, то результатом должно быть {'a': 2, 'b': 1}.
// А что, если строка пустая? Тогда результатом должен быть пустой литерал объекта {}

// function count(string) {
//   const obj = {};
//
//   string.split('').forEach((i) => {
//     if (!obj[i]) {
//       obj[i] = 0;
//     }
//     obj[i]++;
//   });
//   return obj;
// }
//
// console.log(count('hello));

// Напишите программу, в которой Алекс может ввести (n), сколько раз обруч совершит оборот, и программа выдаст ему ободряющее сообщение:
// Если Алекс набирает 10 или более очков, верните строку "Great, now move on to tricks".
// Если он не наберёт 10 очков, верните строку "Keep at it until you get it".

// function hoopCount(n) {
//   return n < 10 ? 'Keep at it until you get it' : 'Great, now move on to tricks';
// }
//
// console.log(hoopCount(9));

// Нужно написать функцию, которая принимает три параметра:
// cap Это количество людей, которое может вместить автобус, без учёта водителя.
// On Это количество людей в автобусе без учёта водителя.
// Wait Это количество людей, ожидающих посадки в автобус, без учёта водителя.
// Если места достаточно, верните 0, а если нет, верните количество пассажиров, которых он не может взять

// function enough(cap, on, wait) {
//   return cap - on >= wait ? 0 : wait - (cap - on);
// }
//
// console.log(enough(100, 60, 50));

// Задача
// В этой простой ката ваша задача — создать функцию, которая преобразует строку в «мексиканскую волну».
// Вам будет передана строка, и вы должны будете вернуть массив строк, в котором заглавная буква обозначает стоящего человека.
// Правила
// 1. Вводимая строка всегда будет состоять из строчных букв и пробелов, но может быть и пустой. В этом случае вы должны вернуть пустой массив.
// 2. Если символ в строке — пробел, пропустите его, как если бы это было пустое место

// function wave(str) {
//   const result = [];
//
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === ' ') {
//       continue;
//     }
//
//     const waveStr = str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1);
//     result.push(waveStr);
//   }
//
//   return result;
// }
//
// console.log(wave('hello'));

// Создайте функцию, которая принимает на вход 2 целых числа в виде строки и выводит их сумму (также в виде строки):

// function sumStr(a, b) {
//   const A = +a;
//   const B = +b;
//   return (A + B).toString();
// }
//
// console.log(sumStr('4', '5'));

// Дан массив (arr) в качестве аргумента. Напишите функцию countSmileys, которая должна возвращать общее количество улыбающихся лиц.
// Правила для улыбающегося лица:
// Каждый смайлик должен содержать правильную пару глаз. Глаза могут быть отмечены как : или ;
// У смайлика может быть нос, но это не обязательно. Допустимые символы для обозначения носа: - или ~
// У каждого улыбающегося лица должен быть улыбающийся рот, обозначенный либо ), либо D
// Использование любых дополнительных символов, кроме указанных, запрещено.
// Допустимые примеры смайликов: :) :D ;-D :~)
// Недопустимые смайлики: ;( :> :} :]

// function countSmileys(arr) {
//   let count = 0;
//   const counts = [':)', ':D', ';-D', ':~)', ';~D', ':-D', ':-)', ';D', ';)', ';~)', ';-)', ':~D'];
//
//   arr.forEach((item) => {
//     if (counts.includes(item)) {
//       count++;
//     }
//   });
//   return count;
// }
//
// console.log(countSmileys([':D', ':~)', ';~D', ':)']));

// Подсчитайте, сколько лет назад отцу было в два раза больше лет, чем его сыну (или через сколько лет ему будет в два раза больше лет).
// Ответ всегда больше или равен 0, независимо от того, было ли это в прошлом или будет в будущем.

// function twiceAsOld(dadYearsOld, sonYearsOld) {
//   const age = dadYearsOld - sonYearsOld * 2;
//   return age > 0 ? age : -age;
// }
//
// console.log(twiceAsOld(36, 7));

// Реализуйте функцию, которая принимает массив с именами людей, которым нравится какой-либо предмет.
// Она должна возвращать текст для отображения, как показано в примерах:
//     []                                -->  "no one likes this"
//     ["Peter"]                         -->  "Peter likes this"
//     ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
//     ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
//     ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

// function likes(names) {
//   if (names.length === 0) return 'no one likes this';
//
//   if (names.length === 1) {
//     return `${names[0]} likes this`;
//   } else if (names.length === 2) {
//     return `${names[0]} and ${names[1]} like this`;
//   } else if (names.length === 3) {
//     return `${names[0]}, ${names[1]} and ${names[2]} like this`;
//   } else if (names.length > 3) {
//     return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
//   }
// }
//
// console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']));

// Вам будет дано число, и вам нужно будет вернуть его в виде строки в формате Расширенная форма. Например:
// 12 --> "10 + 2"
// 45 --> "40 + 5"
// 70304 --> "70000 + 300 + 4"

// function expandedForm(num) {
//   const numStr = num.toString();
//   const nums = [];
//   if (numStr.length === 1) return numStr;
//
//   for (let i = 0; i < numStr.length; i++) {
//     if (numStr[i] !== '0') {
//       nums.push(numStr[i] + '0'.repeat(numStr.length - 1 - i));
//     }
//   }
//   return nums.join(' + ');
// }
//
// console.log(expandedForm(50600));

// Напишите функцию, которая принимает список строк и возвращает каждую строку с правильным числом в начале.

// function number(arr) {
//   return arr.map((e, i) => {
//     return `${i + 1}: ${e}`;
//   });
// }
//
// console.log(number(['a', 'b', 'c']));

// Реализуйте функцию unique_in_order, которая принимает в качестве аргумента последовательность и возвращает список элементов без повторяющихся значений,
// расположенных рядом друг с другом, с сохранением исходного порядка элементов.

// function uniqueInOrder(iterable) {
//   const newArray = [];
//   for (let i = 0; i < iterable.length; i++) {
//     if (iterable[i] !== iterable[i + 1]) {
//       newArray.push(iterable[i]);
//     }
//   }
//   return newArray;
// }
//
// console.log(uniqueInOrder('AAAABBBCCDAABBB'));
