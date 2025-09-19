const person = {};

// Добавление поля age
// { age: 10 }
person.age = 10;
console.log(person);

// Добавление поля nick
// { age: 10, nick: 'nickname' }
person.nick = 'nickname';
console.log(person);

// Удаление поля age
// { nick: 'nickname' }
delete person.age;
console.log(person);

// Переопределение значения поля nick
// { nick: 'new_nick' }
person.nick = 'new_nick';

console.log(person);
