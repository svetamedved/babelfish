import React from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { pure } from 'recompose';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

function MarkdownEditor() {
  return (
    <Editor
      toolbarClassName="toolbarClassName"
      wrapperClassName="wrapperClassName"
      editorClassName="editorClassName"
    />
  );
}

export default pure(MarkdownEditor);
