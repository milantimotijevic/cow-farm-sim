const { Farm } = require('./entities');

const farm = new Farm();

farm.giveBirth(0, 'Nessie')
farm.giveBirth(0, 'Lessie')
farm.giveBirth(1, 'Sarah')
farm.giveBirth(1, 'Milka')
farm.giveBirth(2, 'Tina')
farm.giveBirth(2, 'Mina')
farm.giveBirth(6, 'Dina')
farm.giveBirth(7, 'Jasmine')
farm.printAll();
farm.endLifeSpan(2)
farm.printAll();



