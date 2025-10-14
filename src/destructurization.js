// Простой merge в новый объект
// Напишите функцию mergeToNewObject, которая будет производить слияние двух объектов и возвращать новый объект. Используйте оператор ...

// const mergeToNewObject = (user, diplom) => {
//   return { ...user, ...diplom };
// };
// const user = { name: 'Коля', age: 9 };
// const diplom = { degree: 'Магистр', university: 'МГУ', department: 'Кафедра информационных технологий' };
//
// const obj3 = mergeToNewObject(user, diplom);
//
// console.log(obj3);

// Напишите функцию merge, которая будет производить слияние двух объектов  с помощью оператора ...  с выбранной очередностью.
// Доработайте код ниже, чтобы реальный вывод совпадал с ожидаемым. Обратите внимание на значения полей notes!

// const merge = (user, work, num = 0) => {
//   if (num === 0) {
//     return { ...work, ...user };
//   } else {
//     return { ...user, ...work };
//   }
// };
//
// const user = { name: 'Коля', age: 9, notes: 'Заметка от Коли!' };
// const work = { address: 'Строительная 4', department: 'Шпаклёвщик', notes: 'Рабочая заметка' };
// console.log(merge(user, work));
// console.log(merge(user, work, 0));
// console.log(merge(user, work, 1));

// Допишите функцию report, которая принимает на вход список спортсменов в том порядке, в котором они финишировали в забеге

// const report = (arr) => {
//   const [first, second, thirty, ...other] = arr;
//   console.log(`Первое место: ${first}`);
//   console.log(`Первое место: ${second}`);
//   console.log(`Первое место: ${thirty}`);
//   console.log(`Первое место: ${other}`);
// };
//
// report(['Александр', 'Михаил', 'Валентин', 'Сергей', 'Артур']);

// const showInfo = (obj) => {
//   const {
//     name,
//     age,
//     surname,
//     patronymic = 'Не указано',
//     gender = 'Не указано',
//     photo = 'https://photos.com/default.jpg',
//   } = person;
//
//   console.log(`Карточка пользователя
// Имя: ${name}
// Фамилия: ${surname}
// Отчество: ${patronymic}
// Возраст: ${age}
// Совершеннолетний: ${age >= 18 ? 'Да' : 'Нет'}
// Пол: ${gender}
// Фото: ${photo}
// `);
// };
//
// const ryan = {
//   name: 'Райан',
//   age: 28,
//   surname: 'Гослинг',
//   gender: 'Мужчина',
//   photo: 'https://photos.com/photo.jpg',
// };
// const jason = {
//   name: 'Джейсон',
//   age: 5,
//   surname: 'Стетхем',
//   patronymic: 'Александрович',
// };
//
// showInfo(ryan);
// showInfo(jason);
