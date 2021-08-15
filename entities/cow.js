const { getNextId } = require('../utils');
const CustomLinkedList = require('./custom-linked-list');

module.exports = class Cow {
    constructor(nickname) {
        this.nickname = nickname;
        this.id = getNextId();
        this.children = new CustomLinkedList();
    }

    toString() {
        return `${this.nickname}(${this.id})`;
    }
}