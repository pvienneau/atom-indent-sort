'use babel'

import split from '../../../utils/raw-splitter';
import { readFileSync } from 'fs';
import pathLib from 'path';

const readFile = path => {
    return readFileSync(pathLib.resolve(__dirname, path), 'utf8');
}

export const simple = split(readFile('simple.txt'));
