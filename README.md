# langpack README

This is a simple proof of concept extension to show how you can add language
translations for new languages to existing Visual Studio Code extensions. It
simply copies over the translation file you provide to the target extension's
directory upon activation, if it is not already present.

Note that this only works for languages that the core VS Code product itself
supports as you cannot set the VS Code language to an unsupported one.

You need to copy the resource.nls.json file from the extension you care about
to the resources directory of this extension and rename it according to the 
target language, and then translate the strings in that file appropriately.
In this example, the chosen extension is the Python extension, and the chosen language is Hungarian, although I have not translated the strings as I don't
speak Hungarian :-).

