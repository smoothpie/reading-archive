import React from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';
import IconButton from 'material-ui/IconButton';
import ActionDelete from 'material-ui/svg-icons/action/delete';
import { ListItem } from 'material-ui/List';

const styles = {
  margin: '15px',
  marginRight: '5px',
  display: 'inline-block',
  backgroundColor: '#c6d4d8',
  borderRadius: '13px'
};

const propTypes = {
  label: PropTypes.string
}

@inject("notestore")
@observer
class Note extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hovering: false
    }
  }

  onMouseEnter = () => {
    this.setState({
      hovering: true
    })
  }

  onMouseLeave = () => {
    this.setState({
      hovering: false
    })
  }

  handleNoteDelete = async () => {
    const { note, book } = this.props;
    this.props.notestore.deleteNote(note, book);
  }

  render() {
    const { label } = this.props;
    return (
      <div className="recap-note" onMouseLeave={this.onMouseLeave}>
	      <ListItem
	        style = {styles}
          onMouseEnter={this.onMouseEnter}
	        >
	        { label }
	      </ListItem>
        {this.state.hovering?
          <div className="recap-note__delete">
              <IconButton onClick={this.handleNoteDelete}>
                  <ActionDelete />
                </IconButton>
            </div>
          : null}
      </div>
    )
  }
}

Note.propTypes = propTypes;
export default Note;
