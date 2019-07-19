import React from 'react';
import { editorStateFromRaw, MegadraftEditor } from 'megadraft';
import 'react-sortable-tree/style.css';
import 'megadraft/dist/css/megadraft.css';

export default class MarkdownEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editorState: editorStateFromRaw(null) };
  }

  onChange = editorState => {
    this.setState({ editorState });
  };

  render() {
    return (
      <MegadraftEditor
        editorState={this.state.editorState}
        onChange={this.onChange}
      />
    );
  }
}
