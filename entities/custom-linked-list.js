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

    performOperation(value, operation) {
        operation(value);
    }

    forEach(operation) {
        let current = this.first;
        let counter = 0;
        
        while (counter < this.size) {
            console.log(current.value.id)
            current = current.next
            counter++;
        }
    }
      
    printAll() {
        this.forEach(console.log);
    }

    
}

module.exports = CustomLinkedList;
  