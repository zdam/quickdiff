'use strict';
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

    let disposable = vscode.commands.registerCommand('extension.quickDiff', () => {

        let docs = vscode.workspace.textDocuments;
        if (docs.length > 1) {
            let doc1 = docs[0].uri;
            let doc2 = docs[1].uri;
            let success = vscode.commands.executeCommand('vscode.diff', doc1, doc2);
        } else {
            vscode.window.showInformationMessage('Need 2 files open');
        }
    });
    context.subscriptions.push(disposable);
}

export function deactivate() {
}