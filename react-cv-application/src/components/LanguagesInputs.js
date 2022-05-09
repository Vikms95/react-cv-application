import React from 'react'

class LanguagesInputs extends React.Component {
    render() {
      return (
          <form className='languages--inputs' id='languages'>

            <section>
              <label htmlFor="language--name"> Language </label>
              <input 
                className='language--input' 
                type="text" 
                id="language"
                name="languages" 
                minLength="2"
                value={this.props.values.language}
                onChange={this.props.handleChange}/>
            </section>

            <section className='languages-bottom'>
                  <select defaultValue="elementary" id='language--level'>
                      <option value="elementary"> Elementary </option>
                      <option value="professional"> Professional </option>
                      <option value="native"> Native </option>
                  </select>
                  <button 
                    value={this.props.values.proficiency}
                    onClick={this.props.handleSubmit}  
                    className='languages' > Add language 
                  </button>
            </section>
          </form>
      )
    }
  }
  
  export default LanguagesInputs
  