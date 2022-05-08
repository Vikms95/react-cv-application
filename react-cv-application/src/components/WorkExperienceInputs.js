import React from 'react'

class WorkExperienceInputs extends React.Component {
    render() {
      return (
          <form className='container--input'>
            <section>
                  <label htmlFor="title"> Place </label>
                  <input 
                        className='place--input' 
                        type="text" 
                        id='place'
                        name="work"
                        minLength="2"
                        onChange={this.props.handleChange}
                        values={this.props.values.place}
                        />
            </section>
            <section>
                  <label htmlFor="location" > Company </label>
                  <input 
                        className='company--input' 
                        type="text" 
                        id="company"
                        name="work"
                        minLength="2"
                        onChange={this.props.handleChange}
                        values={this.props.values.company}
                        />
            </section>
            <section className='observations--container'>
                  <label htmlFor="observations"> Observations </label>
                  <textarea 
                        className='observations--input--work' 
                        type="text" 
                        id='observations'
                        name="work" 
                        onChange={this.props.handleChange}
                        values={this.props.values.observations}
                        />
            </section>   
            <button onClick={this.props.handleSubmit} className='work'> Add experience </button> 
          </form>
      )
    }
  }
  
  export default WorkExperienceInputs
  