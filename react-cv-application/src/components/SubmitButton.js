import React from 'react'

class SubmitButton extends React.Component {
    render() {
      return (
        <button 
            className='create--button'
            onClick={this.props.handleClick}
            > Preview CV </button>
      )
    }
  }
  
  export default SubmitButton
  