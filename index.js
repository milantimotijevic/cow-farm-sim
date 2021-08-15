const { Farm } = require('./entities');

const farm = new Farm();

farm.giveBirth(0, 'Nessie')
farm.giveBirth(0, 'Lessie')
farm.giveBirth(0, 'Sarah')
farm.giveBirth(0, 'Milka')
farm.giveBirth(0, 'Tina')
farm.giveBirth(1, 'Mina')
farm.giveBirth(7, 'Dina')
farm.printAll();



