import React, { Component } from 'react';
import './NoteBlock.scss';
import Radium from 'radium';

let baseStyle = {
  background: 'white',

  ':hover': {
    background: 'lightgreen',
    cursor: 'pointer'
  }
};

// ? Преобразование описание к коротенькому с тремя точечками в конце
const textView = (text, length) => {
  const words = text.split(' ');
  let totalLength = 0;

  const string = words.filter(word => {
    totalLength += word.length;
    return totalLength < length;
  });

  let toReturn = string.join(' ');

  if (toReturn[toReturn.length - 1] === ',' || '?' || '!' || '.') {
    toReturn = toReturn.slice(0, -1);
  }

  return toReturn + '...';
};

class NoteBlock extends Component {
  state = {
    currLogo: this.props.logo
  }

  render() {
    if (this.props.note.color) {
      baseStyle.background = this.props.note.color;
    }

    if (this.props.note.hoverColor) {
      baseStyle[':hover'].background = this.props.note.hoverColor;
    }

    if (!this.state.currLogo) {
      this.setState({
        currLogo: 'far fa-calendar-alt'
      })
    }

    return (
      <React.Fragment>
        <div
          style={{ ...baseStyle, width: this.props.width }}
          key={'1'}
          className="NoteBlock"
          onMouseOver={() => this.setState({
            currLogo: 'far fa-arrow-alt-circle-right'
          })}
          onMouseOut={() => this.setState({
            currLogo: this.props.logo
          })}
        >
          <h2>{this.props.note.title}</h2>
          <p>
            {this.props.note.text.length > 20
              ? textView(this.props.note.text, 17)
              : this.props.note.text}
          </p>
          <div>
            <i style={{ fontSize: 25 }} className={this.state.currLogo}></i>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Radium(NoteBlock);