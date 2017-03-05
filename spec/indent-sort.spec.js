'use babel';

import addMatchers from 'add-matchers';

import IndentSorter from '../lib/indent-sorter';
import { inputs, matchers } from './fixtures';
console.log(matchers);
addMatchers(matchers);

describe('indent-sort', () => {
    let indentSorter;

    beforeEach(() => {
        indentSorter = new IndentSorter();
    })

    it('should sort all lines alphabetically', () => {
        // Arrange
        let sortedInput = '';

        // Act
        sortedInput = indentSorter.sort(inputs.simple[0]);

        // Assert
        expect(sortedInput).toMatchInput(inputs.simple[1]);
    });
});
