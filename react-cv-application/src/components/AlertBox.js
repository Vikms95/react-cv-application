import React from 'react'

class ProfilePhotoInput extends React.Component {
    render() {
        return (
            <div className='alert--box'>
        {
            (this.props.isRequiredFieldsValid()) 

            ? <section>
                <div className='alert--box--text'> 
                    Not all the CV fields are filled with your information.
                    Are you sure you want to proceed with the preview?
                </div>
                <div className='alert--box--buttons'>
                    <button onClick={this.props.toggleMode} className='alert--box--button'> Proceed </button>
                    <button onClick={this.props.removeAlertBox} className='alert--box--button'> Back to editing </button>
                
                </div>
            </section>

            : <section>
                <div className='alert--box--text'> 
                    Please fill <span className='alert--highlight'>name</span>, 
                    <span className='alert--highlight'> email</span> and 
                    <span className='alert--highlight'> phone</span> fields in order to proceed.
                </div>
             </section>
        }
        </div>
    )
  }
}

export default ProfilePhotoInput