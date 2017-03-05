'use babel';

const nonWhiteSpaceTrim = (str) => {
    return str.replace(/^(\r\n|\n|\r)+|(\r\n|\n|\r)+$/gm,'');
}

export const toMatchInput = (input, received) => {
    return nonWhiteSpaceTrim(received) == nonWhiteSpaceTrim(input);
}
