module.exports = class Farm {
    constructor(primaryCow) {
        this.primaryCow = primaryCow;
    }

    giveBirth(parentCowId, childCowId, childNickname) {

    }

    endLifeSpan(idToEndLifeSpan) {
        if (idToEndLifeSpan === this.primaryCow.id) {
            console.log(`${this.primaryCow.toString()} is immortal!`);
            return;
        }

        const handler = (cow) => {
            if (cow.id === idToEndLifeSpan) {
                // do something
                console.log(`killing ${cow.toString()}`);
                return true;
            }
        };

        this.executeOperation(this.primaryCow, handler, null);
    }

    executeOperation(cursorCow, operation, parentCow) {
        const shouldStop = operation(cursorCow, parentCow);
        
        if (shouldStop) {
            return;
        }

        cursorCow.children.forEach(cow => this.executeOperation(cow, operation, cursorCow))
    }

    printAll() {
        this.executeOperation(this.primaryCow, this.printToConsole, null);
    }

    printToConsole(cow) {
        console.log(`${cow.toString()}`);
    }
};