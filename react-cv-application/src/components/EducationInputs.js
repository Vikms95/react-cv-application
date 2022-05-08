import React from 'react'

class EducationInputs extends React.Component {
    render() {
      return (
          <form className='container--input'>
            <section>
                  <label htmlFor="title"> Title obtained </label>
                  <input 
                        className='title--input' 
                        type="text" 
                        id='title'
                        name="education"
                        minLength="2"
                        onChange={this.props.handleChange}/>
            </section>
            <section>
                  <label htmlFor="university" > University </label>
                  <input className='university--input' 
                         type="text" 
                         id="university"
                         name="education"
                         minLength="2"
                         onChange={this.props.handleChange}/>
            </section>
            <section className='observations--container'>
                  <label htmlFor="observations"> Observations </label>
                  <textarea 
                        className='observations--input' 
                        type="text" 
                        id='observations'
                        name="education"
                        onChange={this.props.handleChange}/>
            </section>   
            <button onClick={this.props.handleSubmit} className='education'> Add education </button> 
          </form>
      )
    }
  }
  
  export default EducationInputs
  