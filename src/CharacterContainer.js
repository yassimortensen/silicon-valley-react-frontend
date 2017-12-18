import React from 'react';

import Character from './Character'

class CharacterContainer extends React.Component{

  render(){

    const character = this.props.characterList.map(card =>
      <div className='padding' key={card.name}>
        <Character editCharacter={this.props.editCharacter} handleDelete={this.props.handleDelete} character={card}/>
      </div>
    )

    return(
      <div>{character}</div>
    )
  }
}
export default CharacterContainer
