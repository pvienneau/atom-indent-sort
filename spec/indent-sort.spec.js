'use babel';

import addMatchers from 'add-matchers';

import IndentSorter from '../lib/indent-sorter';
import { inputs, matchers } from './fixtures';

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

    it('should sort lines within its indentation grouping', () => {
        // Arrange
        let sortedinput = '';

        // Act
        sortedInput = indentSorter.sort(inputs.multiple[0]);

        // Assert
        expect(sortedInput).toMatchInput(inputs.multiple[1]);
    });
});
