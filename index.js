const { Cow, Farm } = require('./entities');
const { getNextId } = require('./utils');

const primaryCow = new Cow('Bessie');
const farm = new Farm(primaryCow);
primaryCow.children = [
    new Cow('Messie'),
    new Cow('Dessie'),
    new Cow('Fessie'),
];

farm.printAll();
