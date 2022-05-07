import React from 'react'

class GeneralInfoInputs extends React.Component {
    render() {
        return (
            <form className="general--info--inputs">
            <label htmlFor="name"> Name </label>
            <input 
                name="name" 
                id="name" 
                placeholder="John Doe"
                onChange={this.props.handleChange}>
            </input>
            
            <label htmlFor="email"> E-mail </label>
            <input  
                name="email" 
                id="email" 
                type="email" 
                placeholder="johndoe@gmail.com"
                onChange={this.props.handleChange}>
            </input>
            
            <label htmlFor="phone"> Phone </label>
            <input  
                name="phone"
                id="phone"
                type="text" 
                placeholder="+99 123 456 789"
                onChange={this.props.handleChange}>
            </input>
            </form>
        )
    }
}

export default GeneralInfoInputs
