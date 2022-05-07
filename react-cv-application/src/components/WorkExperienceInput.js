import React from 'react'

class WorkExperienceInput extends React.Component {
    render() {
      return (
          <form className='container--input'>
            <section>
                  <label htmlFor="title"> Place </label>
                  <input className='place--input' type="text" id='title'/>
            </section>
            <section>
                  <label htmlFor="location" > Company </label>
                  <input className='company--input' type="text" id="location"/>
            </section>
            <section className='observations--container'>
                  <label htmlFor="observations"> Observations </label>
                  <textarea className='observations--input--work' type="text" id='observations'/>
            </section>   
            <button className='add--education--button'> Add experience </button> 
          </form>
      )
    }
  }
  
  export default WorkExperienceInput
  