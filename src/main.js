import { demonstrateOperations, removeProperty, addProperty, compare } from './objects.js';
import { add, getRandomItem, logJoin, setNickname } from './array.js';
import {
  colorOutput,
  compareArrays,
  countNumber,
  filter,
  findAge,
  func,
  outputTable,
  printColorOutput,
  roundNumber,
} from './loops.js';

const user1 = { id: 1, age: 20, name: 'alex' };
const user2 = { id: 5, name: 'max' };
const user3 = { id: 90, name: 'stas', address: 0 };

demonstrateOperations();
removeProperty(user1, 'id');
addProperty(user2, 'id', -3);
console.log(user1);
console.log(user2);
compare(user3, { id: 80 }, 'id');
compare(user3, { id: 90 }, 'id');

//array

logJoin([1, 2, 3], '-');

const user = { id: 8, nickname: 'Саня Санёчек', nicknameHistory: [] };
setNickname(user, 'Александр Сильвестрович');
getRandomItem([1, 2, 3]);

const list = [];

add(list, 'Картошка');
add(list, 'Капуста');
add(list, 'Морковь');
add(list, 'Картошка');
add(list, 'Лук');
add(list, 'Морковь');

//loops
const arr = [-2, -1, 0, 1, 2, 3];
console.log(countNumber(arr));

const numbers = [5, 10, 2, 8];
console.log(func(numbers));

const people = [
  { id: 8, name: 'Александр', gender: 'm', age: 25 },
  { id: 12, name: 'Мария', gender: 'f', age: 22 },
  { id: 31, name: 'Иван', gender: 'm', age: 17 },
  { id: 34, name: 'Ольга', gender: 'f', age: 19 },
  { id: 53, name: 'Дмитрий', gender: 'm', age: 30 },
  { id: 95, name: 'Екатерина', gender: 'f', age: 21 },
  { id: 3, name: 'Сергей', gender: 'm', age: 18 },
  { id: 20, name: 'Анна', gender: 'f', age: 20 },
  { id: 19, name: 'Андрей', gender: 'm', age: 15 },
  { id: 30, name: 'Наталья', gender: 'f', age: 25 },
];
console.log(filter(people));

console.log(roundNumber([1.1, 2.2, -2, 3.3, -1, 5.5, 5.99, 7.49, 7.9999, -2.2, -3]));

colorOutput(10);
printColorOutput(user);

const matrix = [
  ['#', 'Имя', 'Возраст', 'Особые приметы'],
  [90, 'Паша', 23],
  [12, 'Артём', 29],
  [33, 'Стас', 13, 'Сидит на хлебной диете'],
  [54, 'Хабиб', 7],
  [35, 'Алеша', 15, 'Любит ночевать на лавочке'],
  [50, 'Лена', 19, 'Громко чихает'],
  [83, 'Катя', 43],
  [56, 'Алексей', 27, 'Мяукает во сне'],
];
outputTable(matrix);

const users = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 25 },
  { name: 'Diana', age: 35 },
  { name: 'Eve', age: 30 },
  { name: 'Frank', age: 28 },
  { name: 'Grace', age: 25 },
  { name: 'Hannah', age: 41 },
  { name: 'Ivy', age: 30 },
  { name: 'Jack', age: 28 },
];
findAge(users);
compareArrays([], []);
