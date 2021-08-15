const { Cow, Farm } = require('./entities');

const primaryCow = new Cow(1, 'Bessie');
const farm = new Farm(primaryCow);

console.log(farm)
