module.exports = class Cow {
    constructor(id, nickname, children = []) {
        this.id = id;
        this.nickname = nickname;;
        this.children = children;
    }
}