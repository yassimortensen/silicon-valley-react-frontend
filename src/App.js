import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import CharacterContainer from './CharacterContainer'
import CharacterForm from './CharacterForm'

class App extends Component {
  constructor(){
    super();

    this.state = {
      characterList: [],
      editClicked: false
    }
  }

  componentDidMount(){
    fetch ('http://localhost:3000/characters')
      .then(res => res.json())
      .then(res => this.setState({characterList: res}))
  }

  editCharacter = (id, data) => {
    fetch (`http://localhost:3000/characters/${id}`, {
      method: 'PATCH',
      headers: {
        'accept': 'application/json',
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(() => this.componentDidMount())
  }

  handleDelete = (id) => {
    fetch (`http://localhost:3000/characters/${id}`, {
      method: 'delete',
      headers: {
        'accept': 'application/json',
        'content-type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(() => this.componentDidMount())
  }

  createCharacter = (data) => {
    fetch ('http://localhost:3000/characters/', {
      method: 'post',
      headers: {
        'accept': 'application/json',
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(() => this.componentDidMount())
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Silicon Valley</h1>
        </header>
        <CharacterForm createCharacter={this.createCharacter}/>
        <CharacterContainer editCharacter={this.editCharacter} handleDelete={this.handleDelete} characterList={this.state.characterList}/>
      </div>
    );
  }
}

export default App;
