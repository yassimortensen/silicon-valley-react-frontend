import React from 'react';

class CharacterForm extends React.Component {
  constructor(){
    super();

    this.state = {
      name: '',
      app: '',
      company: '',
      quote: '',
      motto: '',
      image: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.createCharacter(this.state)
    this.setState({
      name: '',
      app: '',
      company: '',
      quote: '',
      motto: '',
      image: ''
    })
  }

  render(){
    return(
      <div>
        <h2>Add a new Character:</h2>
        <form onSubmit={this.handleSubmit}>
          Name: <input type="text" name="name" value={this.state.name} onChange={this.handleChange} /><br />
          App: <input type="text" name="app" value={this.state.app} onChange={this.handleChange} /><br />
          Company: <input type="text" name="company" value={this.state.company} onChange={this.handleChange} /><br />
          Quote: <input type="text" name="quote" value={this.state.quote} onChange={this.handleChange} /><br />
          Motto: <input type="text" name="motto" value={this.state.motto} onChange={this.handleChange} /><br />
          Image Url: <input type="text" name="image" value={this.state.image} onChange={this.handleChange} /><br />
          <input type="submit" />
        </form>
      </div>
    )
  }
}
export default CharacterForm
