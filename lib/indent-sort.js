'use babel';

import { CompositeDisposable } from 'atom';

import IndentSorter from './indent-sorter.js';

export default {
    subscriptions : null,

    activate(state) {
        // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
        this.subscriptions = new CompositeDisposable();

        // Register command that toggles this view
        this.subscriptions.add(atom.commands.add('atom-workspace', {
            'indent-sort:sort': () => this.indentSort()
        }));
    },

    deactivate() {
        this.subscriptions.dispose();
    },

    serialize() {},

    indentSort() {
        console.log('sorting');

        const editor = atom.workspace.getActiveTextEditor();
        const selection = editor.getText();
        const indentSorter = new IndentSorter();

        editor.setText(indentSorter.sort(selection));
    }

};
