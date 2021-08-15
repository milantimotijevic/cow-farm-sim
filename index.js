const { Cow, Farm } = require('./entities');

const farm = new Farm(new Cow('Bessie'));

farm.printAll();

farm.giveBirth(0, new Cow('Jessie'));

farm.printAll();

farm.giveBirth(1, new Cow('Messie'));

farm.printAll();

farm.endLifeSpan(2)

farm.toPrettyJSON()


