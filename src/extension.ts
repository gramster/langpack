// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { copyFile, exists } from 'fs';
import { URL } from 'url';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	const targetExtId = 'ms-python.python';
	const targetExtName = 'Python';
	const targetLang = 'hu';  // Hungarian; this must be a language VS Code itself supports

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log(context.extensionPath);
	var targetExt = vscode.extensions.getExtension(targetExtId);
	if (targetExt !== undefined) {
		console.log(targetExt.extensionPath);
		// This just handles a single file/extension, but arguably could handle
		// multiple with a few changes.
		const source = new URL(vscode.Uri.parse(context.extensionPath) + 
		    `/resources/package.nls.${targetLang}.json`);
		const target = new URL(vscode.Uri.parse(targetExt.extensionPath) + 
			`/package.nls.${targetLang}.json`);
			
		function existsCb(e: boolean) {
			function copyCb(arg: any) {
				if (arg) {
					console.log('' + arg.message);
				} else {
					console.log(`Successfully installed ${targetLang}`);
				}
			}
			console.log('Target ' + target + ' exists: ' + e);
			if (!e) {
				console.log(`Copying ${source} to ${target}`);
				copyFile(source, target, copyCb);
			}
		}
		exists(target, existsCb);
	} else {
		console.log(`No ${targetExtName} extension installed; nothing to do.`);
	}
}

// this method is called when your extension is deactivated
export function deactivate() {}
