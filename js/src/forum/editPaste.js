import { extend } from 'flarum/common/extend';
import TextEditor from 'flarum/common/components/TextEditor';

import TurndownService from 'turndown';

export default function editPaste() {
  extend(TextEditor.prototype, 'oncreate', function () {
    let editor=this.$('.TextEditor-editor')[0];
    editor.onpaste=(event)=>{
      let clip = event.clipboardData.getData('text/html');
      if(!clip)return;

      event.preventDefault();

      let domtxt = new DOMParser().parseFromString(clip,'text/html');
      let turndownService = new TurndownService();
      let markdown = turndownService.turndown(domtxt.body);

      this.attrs.composer.editor.insertAtCursor(markdown);
    };
  });
}
