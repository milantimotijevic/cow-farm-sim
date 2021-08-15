class CustomListItem {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class CustomLinkedList {
    constructor() {
        this.first = null;
        this.head = null;
        this.size = 0;
    }
  
    push(value) {
        const item = new CustomListItem(value);
        if (!this.first) {
            this.first = item;
        }
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

    performOperation(current, operation) {
        operation(current);
    }

    forEach(operation) {
        let current = this.first.value;
        while (current.next) {
            this.performOperation(current, operation);
            current = current.next;
        }
    }
      
    printAll() {
        this.forEach(console.log);
    }

    
}

module.exports = CustomLinkedList;
  