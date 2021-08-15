class CustomListItem {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class CustomLinkedList {
    constructor() {
        this.first = null;
        this.size = 0;
    }

    push(value) {
        const item = new CustomListItem(value);

        let current;

        if (this.first === null) {
            this.first = item;
        } else {
            current = this.first;
            while (current.next) {
                current = current.next;
            }
            current.next = item;
        }
        this.size++;
    }

    findById(id) {
        let counter = 0;
        let current = this.first;

        while (current !== null) {
            if (current.value.id === id) {
                return current;
            }

            counter++;
            current = current.next;
        }
        
        return -1;
    }

    indexOf(value) {
        let counter = 0;
        let current = this.first;

        while (current !== null) {
            if (current.value === value) {
                return counter;
            }

            counter++;
            current = current.next;
        }
        
        return -1;
    }

    remove(value) {
        var current = this.first;
        var previous = null;

        while (current !== null) {
            if (current.value.id === value) {
                if (previous === null) {
                    this.first = current.next;
                } else {
                    previous.next = current.next;
                }
                this.size--;
                return current.value;
            }
            previous = current;
            current = current.next;
        }
        return -1;
    }

    forEach(operation) {
        let current = this.first;
        let counter = 0;

        while (counter < this.size) {
            operation(current.value)
            current = current.next
            counter++;
        }
    }
}

module.exports = CustomLinkedList;