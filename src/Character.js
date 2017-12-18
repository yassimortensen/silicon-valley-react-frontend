import React from 'react';

import EditForm from './EditForm'

class Character extends React.Component {
  constructor(){
    super();

    this.state = {
      editClicked: false
    }
  }

  handleEdit = () => {
    this.setState(prevState => {
      return {editClicked: !prevState.editClicked}
    })
  }

  render(){
    let form = (this.state.editClicked) ? (<div><EditForm editCharacter={this.props.editCharacter} character={this.props.character}/></div>) : null

    return(
      <div className='card'>
        <img src={this.props.character.image} alt='' />

        <div className='container'>
          <h3><b>{this.props.character.name}</b></h3>
          <p><b>App:</b> {this.props.character.app}</p>
          <p><b>Company:</b> {this.props.character.company}</p>
          <p><b>Quote:</b> {this.props.character.quote}</p>
          <p><b>Motto:</b> {this.props.character.motto}</p>
        </div>

        <button onClick={this.handleEdit}>Edit!</button>
        <button onClick={() => this.props.handleDelete(this.props.character.id)}>Delete!</button>

        {form}
      </div>
    )
  }
}

export default Character
