const { Cow, Farm } = require('./entities');
const { getNextId } = require('./utils');

const primaryCow = new Cow(getNextId(), 'Bessie');
const farm = new Farm(primaryCow);

