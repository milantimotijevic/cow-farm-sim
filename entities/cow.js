const { getNextId } = require('../utils');

module.exports = class Cow {
    constructor(nickname) {
        this.nickname = nickname;
        this.id = getNextId();
        this.children = [];
    }

    toString() {
        return `${this.nickname}(${this.id})`;
    }
}