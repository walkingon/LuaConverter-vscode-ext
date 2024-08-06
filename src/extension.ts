// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
const { format, parse } = require('lua-json');

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('"luaconverter" is now active!');

	const disposable1 = vscode.commands.registerCommand('luaconverter.tolua', () => {
		vscode.window.showInformationMessage('luaconverter.tolua!');
	});

	const disposable2 = vscode.commands.registerCommand('luaconverter.tojson', () => {
		vscode.window.showInformationMessage('luaconverter.tojson!');
	});

	context.subscriptions.push(disposable1, disposable2);
}

// This method is called when your extension is deactivated
export function deactivate() {}
