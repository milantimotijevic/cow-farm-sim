class CustomListItem {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class CustomLinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    push(value) {
        const item = new CustomListItem(value);

        let current;

        if (this.head === null)
            this.head = item;
        else {
            current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = item;
        }
        this.size++;
    }

    indexOf(item) {
        let counter = 0;
        let current = this.head;

        while (current != null) {

            if (current.item === item) {
                return counter;
            }

            counter++;
            current = current.next;
        }

        return -1;
    }

    remove(item) {
        var current = this.head;
        var previous = null;

        while (current != null) {
            if (current.item === item) {
                if (previous == null) {
                    this.head = current.next;
                } else {
                    previous.next = current.next;
                }
                this.size--;
                return current.item;
            }
            previous = current;
            current = current.next;
        }
        return -1;
    }

    forEach(operation) {
        let current = this.head;
        let counter = 0;

        while (counter < this.size) {
            operation(current.value)
            current = current.next
            counter++;
        }
    }
}

module.exports = CustomLinkedList;