const Cow = require('./cow');

module.exports = class Farm {
    constructor() {
        this.primaryCow = new Cow('Bessie');
    }

    giveBirth(parentCowId, newCowNickname) {
        const newCow = new Cow(newCowNickname);
        const handler = (currentCow) => {
            if (currentCow.id === parentCowId) {
                currentCow.children.push(newCow);
                return true;
            }
        };

        this.findAndApplyOperation(this.primaryCow, handler, null);
    }

    endLifeSpan(idToEndLifeSpan) {
        if (idToEndLifeSpan === this.primaryCow.id) {
            console.log(`\n${this.primaryCow.toString()} is immortal!`);
            return;
        }

        const handler = (cow, parentCow) => {
            if (cow.id === idToEndLifeSpan) {
                console.log(`\n${cow.toString()}, daughter of ${parentCow.toString()} has died :(`);
                const childIndex = parentCow.children.indexOf(cow);
                parentCow.children.splice(childIndex, 1);
                parentCow.children = parentCow.children.concat(cow.children);
                return true;
            }
        };

        this.findAndApplyOperation(this.primaryCow, handler, null);
    }

    printAll() {
        console.log('Currently alive cows:');
        const handler = (cow) => {
            process.stdout.write(`${cow.toString()} > `);
        };

        this.findAndApplyOperation(this.primaryCow, handler, null);
    }

    findAndApplyOperation(cursorCow, operation, parentCow) {
        const shouldStop = operation(cursorCow, parentCow);
        
        if (shouldStop) {
            return;
        }

       cursorCow.children.forEach(cow => this.findAndApplyOperation(cow, operation, cursorCow));
    }
};