import React from 'react'

class Header extends React.Component {
    render() {
      return (
          <div className='header'>
            <h2 className='title'> ResuMake </h2>
            {
              (!this.props.isEditorMode) &&
              <div className="header--buttons">
                <button className='edit--button--bottom'> Back to edit </button>
                <button className='pdf--button--bottom'> Download PDF </button>
                <button className='print--button--bottom'> Print CV </button>
              </div>
            }
          </div>
      )
    }
  }
  
export default Header
  