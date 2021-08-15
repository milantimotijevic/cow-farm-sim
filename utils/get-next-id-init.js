const getNextIdInit = () => {
    let counter = 0;

    return () => counter++;
}

module.exports = getNextIdInit;