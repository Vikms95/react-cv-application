import React from 'react'

class GeneralInfoInputs extends React.Component {
    render() {
        return (
            <form className="general--info--inputs">
                <label htmlFor="name"> Name </label>
                <input 
                    name="general" 
                    id="name" 
                    minLength="2"
                    placeholder="John Doe"
                    onChange={this.props.handleChange}>
                </input>
                
                <label htmlFor="email"> E-mail </label>
                <input  
                    name="general" 
                    id="email" 
                    type="email" 
                    minLength="2"
                    placeholder="johndoe@gmail.com"
                    onChange={this.props.handleChange}>
                </input>
                
                <label htmlFor="phone"> Phone </label>
                <input  
                    name="general"
                    id="phone"
                    type="text" 
                    minLength="5"
                    placeholder="+99 123 456 789"
                    onChange={this.props.handleChange}>
                </input>
            </form>
        )
    }
}

export default GeneralInfoInputs
