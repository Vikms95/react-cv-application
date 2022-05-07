import React from 'react'

class GeneralInfoInputs extends React.Component {
  render() {
    return (
      <form className="general--info--inputs">
        <label htmlFor="name"> Name </label>
        <input onChange={this.props.handleChange}  name="name" id="name" placeholder="John Doe"></input>
        
        <label htmlFor="email"> E-mail </label>
        <input  name="email" id="email" type="email" placeholder="johndoe@gmail.com"></input>
        
        <label htmlFor="phone"> Phone </label>
        <input   name="phone" id="phone" type="text" placeholder="+99 123 456 789"></input>
      </form>
    )
  }
}

export default GeneralInfoInputs
