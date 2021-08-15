const { getNextId } = require('../utils');

module.exports = class Cow {
    constructor(nickname, id = getNextId()) {
        this.nickname = nickname;
        this.id = id;
        this.children = [];
    }

    toString() {
        return `${this.nickname}(${this.id})`;
    }
}