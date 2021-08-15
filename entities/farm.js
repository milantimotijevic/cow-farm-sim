module.exports = class Farm {
    constructor(primaryCow) {
        this.primaryCow = primaryCow;
    }

    giveBirth(parentCowId, childCowId, childNickname) {

    }

    endLifeSpan(cowId) {
        
    }

    executeOperation(cursorCow, operation, parentCow) {
        const shouldStop = operation(cursorCow, parentCow);
        
        if (shouldStop) {
            return;
        }

        cursorCow.children.forEach(cow => this.executeOperation(cow, operation, cursorCow))
    }

    remove() {

    }

    printAll() {
        this.executeOperation(this.primaryCow, this.printToConsole, null);
    }

    printToConsole(cow) {
        console.log(`${cow.toString()}`);
    }
};