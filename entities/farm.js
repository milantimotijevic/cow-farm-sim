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

        const handler = (cow, parentCow) => {
            if (cow.id === idToEndLifeSpan) {
                console.log(`${cow.toString()}, daughter of ${parentCow.toString()} has died :(`);
                const childIndex = parentCow.children.indexOf(cow);
                parentCow.children.splice(childIndex, 1);
                parentCow.children = parentCow.children.concat(cow.children);
                return true;
            }
        };

        this.executeOperation(this.primaryCow, handler, null);
    }

    printAll() {
        const handler = (cow) => {
            console.log(`${cow.toString()}`);
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
};