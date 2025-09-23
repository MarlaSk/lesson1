// Базовые операции

export const demonstrateOperations = () => {
  const obj = {
    name: 'John Smith',
    surname: 'John',
  };

  console.log('======== Добавление полей ========');
  obj.age = 20;
  obj['is_Authenticated'] = true;

  console.log(obj);
  console.log();

  console.log('======== Удаление добавленых полей ========');
  delete obj.age;
  delete obj['is_Authenticated'];

  console.log(obj);
  console.log();

  console.log('======== Добавление и изменение вложеных полей ========');
  const obj2 = { name: { name: 'John' }, age: 20 };
  obj2.name.surname = 'Smith';

  console.log(obj2);

  obj2.name.name = 'Karl';

  console.log(obj2);

  const id = 'id';
  const idValue = '1287893645';

  obj2[id] = idValue;

  console.log(obj2);

  // Сокращенная запись
  const nameValue = 'John';
  const surnameValue = 'Smith';
  const ageValue = 20;

  const obj3 = { nameValue, surnameValue, ageValue };
  console.log(obj3);
};

export const removeProperty = (obj, key) => {
  delete obj[key];
};

export const addProperty = (obj, key, value) => {
  obj[key] = value;
};

export const compare = (obj1, obj2, key) => {
  if (obj1[key] === obj2[key]) {
    console.log(`\x1b[32mУ обоих объектов по ключу "${key}" лежит одинаковое значение - ${obj1[key]}\x1b[0m`);
  } else {
    console.log(
      `\x1b[31mУ объектов по ключу "${key}" разные значения. У первого - ${obj1[key]}, а у второго - ${obj2[key]}\x1b[0m`,
    );
  }
};

const list = ['Молоко', 'Хлеб', 'Картошка', 'Капустка', 'Сок'];

list.push('Ветчина');
list.push('Помидоры');
list.push('Огурцы');

list.pop();
let res = 'ве';
let a = 'тч';
res += a;
a = 'ина';
res += a;
console.log(list.includes(res));

res = ''.repeat(res.length);
a = 'ок';
res += a;
a = ['с'];
res = a[0].toUpperCase() + res;

console.log(list.indexOf(res));
//уточнить
console.log(list[list.length - 1].length * 3);
