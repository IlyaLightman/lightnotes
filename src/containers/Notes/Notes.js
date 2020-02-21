import React, { Component } from 'react';
import './Notes.scss';
import { connect } from 'react-redux';
import Radium from 'radium';
import { NavLink } from 'react-router-dom';
import NoteBlock from '../../components/NoteBlock/NoteBlock';
import { editColumns, loadNotes } from '../../store/actions/notes';
import Loader from '../../components/UI/Loader/Loader';
import NoteView from '../NoteView/NoteView';

class Notes extends Component {
  state = {
    redirectTo: -1
  }

  notesRender = columns => {
    const rows = Math.ceil(this.props.notes.length / columns);

    const notes = [];
    for (let i = 0; i < rows; i++) {
      notes.push([]);
    }
    
    this.props.notes.forEach((note, index) => {
      notes[Math.floor(index / columns)].push({...note, ind: index});
    });

    console.log(notes)

    return notes.map((row, rowIndex) => {
      return (
        <div
          style={{ display: 'flex', flexDirection: 'row' }}
          key={`${row}0${rowIndex}`}
        >
          {notes[rowIndex].map((note, index) => {
            const key = `${rowIndex}0${index}`;
            return this.createBlock(note, key);
          })}
        </div>
      );
    });
  };

  noteRedirect = noteId => {
    this.setState({
      redirectTo: noteId
    })
  }

  createBlock = (note, key) => {
    const width = 70 / this.props.noteColumns + 'vw';
    return <NoteBlock note={note}
      key={key} 
      width={width} 
      logo={note.logo} 
      onClick={() => this.noteRedirect(note.ind)}
      />;
  };

  componentDidMount() {
    this.props.loadNotes('I1Y4L1GH7M4N');  // Сюда передаётся ну вон та штука имя из бд
    // ? Записочки берутся по вот этой штуке, которая будет подгружаться в бд при входе
  }

  render() {
    console.log(this.props.notes)
    return (
      this.state.redirectTo === -1 ?
      <div className="Notes">
        <div className="menu">
          <p style={{ margin: '3px 5px 3px 25px' }}>Заметок в строчке: </p>
          <button
            style={{ marginLeft: 10 }}
            onClick={() => this.props.editColumns(2)}
          >
            2
          </button>
          <button
            style={{ marginLeft: 4 }}
            onClick={() => this.props.editColumns(3)}
          >
            3
          </button>
          <button
            style={{ marginLeft: 4 }}
            onClick={() => this.props.editColumns(4)}
          >
            4
          </button>
        </div>
        <h1>Список дел и заметок</h1>
        <div className="content">
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center'
            }}
            key="note"
          >
            <h2>Заметочки: </h2>
            <NavLink
              style={{
                color: 'gray',
                marginLeft: 'auto',
                textDecoration: 'none',
                fontSize: '25px'
              }}
              key="nt"
              to="/create"
            >
              Создать заметку
            </NavLink>
          </div>

          {this.props.loading ? (
            <Loader />
          ) : (
            this.notesRender(this.props.noteColumns)
          )}

          <div style={{ display: 'flex', flexDirection: 'row' }} key="todo">
            <h2>TODO: </h2>
            <NavLink
              style={{
                color: 'gray',
                marginLeft: 'auto',
                textDecoration: 'none',
                fontSize: '25px'
              }}
              key="nt"
              to="/"
            >
              Новая задача
            </NavLink>
          </div>
        </div>
      </div>
      : <NoteView noteId={this.state.redirectTo}/>
    );
  }
}

function mapStateToProps(state) {
  return {
    notes: state.notes.notes,
    noteColumns: state.notes.noteColumns,
    loading: state.notes.loading
  };
}

function mapDispatchToProps(dispatch) {
  return {
    editColumns: columns => dispatch(editColumns(columns)),
    // TODO Функцию для синхронизации с сервером при рендере
    loadNotes: account => dispatch(loadNotes(account))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Radium(Notes));