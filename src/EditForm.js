import React from 'react';

class EditForm extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      name: props.character.name,
      app: props.character.app,
      company: props.character.company,
      quote: props.character.quote,
      motto: props.character.motto,
      image: props.character.image
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleEdit = (event) => {
    event.preventDefault()
    this.props.editCharacter(this.props.character.id, this.state)
  }

  render(){

    return (
      <form onSubmit={this.handleEdit}>
        Name: <input type="text" name="name" value={this.state.name} onChange={this.handleChange} /><br />
        App: <input type="text" name="app" value={this.state.app} onChange={this.handleChange} /><br />
        Company: <input type="text" name="company" value={this.state.company} onChange={this.handleChange} /><br />
        Quote: <input type="text" name="quote" value={this.state.quote} onChange={this.handleChange} /><br />
        Motto: <input type="text" name="motto" value={this.state.motto} onChange={this.handleChange} /><br />
        Image Url: <input type="text" name="image" value={this.state.image} onChange={this.handleChange} /><br />
        <input type="submit" />
      </form>
    )
  }
}

export default EditForm
