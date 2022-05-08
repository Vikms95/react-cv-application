import React from 'react'

class LanguagesInputs extends React.Component {
    render() {
      return (
          <form className='languages--inputs'>
            <section>
              <label htmlFor="language--name"> Language </label>
              <input className='language--input' type="text" id="language--name" minLength="2"/>
            </section>
            <section className='languages-bottom'>
                  <select defaultValue="default" id='language--level'>
                      <option value="default"> - Proficiency - </option>
                      <option value="elementary"> Elementary </option>
                      <option value="professional"> Professional </option>
                      <option value="native"> Native </option>
                  </select>
                  <button onClick={this.props.handleSubmit}  className='languages' > Add language </button>
            </section>
          </form>
      )
    }
  }
  
  export default LanguagesInputs
  