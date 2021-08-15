const { Farm, CustomLinkedList, Cow } = require('./entities');

const farm = new Farm();

farm.giveBirth(0, 'Nanny');
farm.giveBirth(0, 'Danny');
farm.giveBirth(0, 'Manny');
farm.giveBirth(0, 'Tanny');

farm.primaryCow.children.forEach(console.log)


