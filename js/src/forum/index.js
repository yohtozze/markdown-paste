import app from 'flarum/forum/app';

import editPaste from './editPaste';

app.initializers.add('yohtozze-mdpaste', () => {
  editPaste();
});
