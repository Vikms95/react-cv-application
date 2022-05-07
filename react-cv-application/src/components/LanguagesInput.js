import React from 'react'

class LanguagesInput extends React.Component {
    render() {
      return (
          <form className='languages--inputs'>
            <section>
              <label htmlFor="language--name"> Language </label>
              <input className='language--input' type="text" id="language--name"/>
            </section>
            <section className='languages-bottom'>
                  <select defaultValue="default" id='language--level'>
                      <option value="default"> - Proficiency - </option>
                      <option value="elementary"> Elementary </option>
                      <option value="professional"> Professional </option>
                      <option value="native"> Native </option>
                  </select>
                  <button className='add--language--button' > Add language </button>
            </section>
          </form>
      )
    }
  }
  
  export default LanguagesInput
  