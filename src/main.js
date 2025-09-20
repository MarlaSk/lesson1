import { demonstrateOperations, removeProperty, addProperty, compare } from './objects.js';

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
