const { Farm, CustomLinkedList, Cow } = require('./entities');

const farm = new Farm();

farm.giveBirth(0, 'Nanny');
farm.giveBirth(0, 'Danny');
farm.giveBirth(0, 'Manny');
farm.giveBirth(0, 'Tanny');

farm.giveBirth(4, 'Ranny');
farm.giveBirth(5, 'Zanny');
farm.giveBirth(6, 'Blanny');

farm.giveBirth(0, 'Ganny');

farm.printAll();

farm.endLifeSpan(2)

farm.printAll();


