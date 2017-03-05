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

class IndentSorter {
    sort(input = '') {
        if (!input) return input;

        return input
            .split(/\r\n|\n|\r/)
            .sort(sortAlphabeticalAscending)
            .join("\n");
    }
}

export default IndentSorter;
