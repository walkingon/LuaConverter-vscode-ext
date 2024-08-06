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
		const editors = vscode.window.visibleTextEditors;
		if (editors.length === 0) {
			vscode.window.showInformationMessage('当前没有可见的文本编辑器');
		} else if (editors.length === 1) {
			const content = editors[0].document.getText();
			const result = format(JSON.parse(content));
			// 并列新建一个临时文档，并将result写入其中
			vscode.workspace.openTextDocument({
				language: 'lua',
				content: result
			}).then(doc => {
				vscode.window.showTextDocument(doc);
				vscode.window.showInformationMessage('转换完成!');
			});
		} else {
			vscode.window.showInformationMessage('请先关闭并列的其它编辑器');
		}
	});

	const disposable2 = vscode.commands.registerCommand('luaconverter.tojson', () => {
		// 获取选中的部分
		const editor = vscode.window.activeTextEditor;
		if (editor) {
			const selection = editor.selection;
			const text = editor.document.getText(selection);
			const result = parse(text);
			// 并列新建一个临时文档，并将result写入其中
			vscode.workspace.openTextDocument({
				language: 'json',
				content: JSON.stringify(result, null, 4)
			}).then(doc => {
				vscode.window.showTextDocument(doc);
				vscode.window.showInformationMessage('转换完成!');
			});
		}else{
			vscode.window.showInformationMessage('没有激活的编辑器');
		}
	});

	context.subscriptions.push(disposable1, disposable2);
}

// This method is called when your extension is deactivated
export function deactivate() {}
