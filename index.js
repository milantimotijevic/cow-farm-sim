const { Cow, Farm } = require('./entities');
const { getNextId } = require('./utils');

const primaryCow = new Cow('Bessie');
const farm = new Farm(primaryCow);
primaryCow.children = [
    new Cow('Messie'),
    new Cow('Dessie'),
    new Cow('Fessie'),
];

primaryCow.children[2].children[0] = new Cow('Jessie')
primaryCow.children[2].children[1] = new Cow('Tressie')
primaryCow.children[2].children[2] = new Cow('Lassy')

farm.printAll();
farm.endLifeSpan(3)
farm.printAll()
