'use babel';

const sortAlphabeticalAscending = (...args) => {
    var a = args[0].toUpperCase();
    var b = args[1].toUpperCase();

    if (a < b) {
        return -1;
    }

    if (a > b) {
        return 1;
    }

    return 0;
}

const tabsCount = str => {
    let count = 0;
    let index = 0;

    while (str.charAt(index++) === " ") {
        count++;
    }

    return Math.floor(count / 4);
}

const flatten = (obj) => {
    return Object
        .keys(obj)
        .sort(sortAlphabeticalAscending)
        .reduce(
            (acc, key) =>
                acc.concat(
                    Object.keys(obj[key]).length
                        ? [key].concat(flatten(obj[key]))
                        : key
                )
            , []
        );
}

class IndentSorter {
    sort(input = '') {
        if (!input)
            return input;

        let keyDepthStack = [];
        let sortableInput = {};

        input.split(/\r\n|\n|\r/).map(line => {
            let depth = tabsCount(line);

            if(!depth && !line.length) return;

            keyDepthStack.splice(depth);

            let subsetSortableInput = sortableInput;
            keyDepthStack.map(key => {
                subsetSortableInput = subsetSortableInput[key];
            });

            keyDepthStack.push(line);
            subsetSortableInput[line] = {};
        });

        return flatten(sortableInput).join("\n");
    }
}

export default IndentSorter;
