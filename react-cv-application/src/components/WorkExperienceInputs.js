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
                        id='title'
                        name="work"/>
            </section>
            <section>
                  <label htmlFor="location" > Company </label>
                  <input 
                        className='company--input' 
                        type="text" 
                        id="location"
                        name="work"/>
            </section>
            <section className='observations--container'>
                  <label htmlFor="observations"> Observations </label>
                  <textarea 
                        className='observations--input--work' 
                        type="text" 
                        id='observations'
                        name="work" />
            </section>   
            <button className='add--education--button'> Add experience </button> 
          </form>
      )
    }
  }
  
  export default WorkExperienceInputs
  