const { md2hatena } = require('md2hatena');

module.exports = function (atom) {
  const editor = atom.workspace.getActiveTextEditor();
  if (!editor) { return; }

  const selectedText = editor.getSelectedText();
  const isSelected = /\S/.test(selectedText);
  const markdown = isSelected ? selectedText : editor.getText();

  md2hatena(markdown).then((hatena) => {
    if (!isSelected) {
      editor.selectAll();
    }
    editor.insertText(hatena);
  })
  .catch(e => console.error(e));
};
