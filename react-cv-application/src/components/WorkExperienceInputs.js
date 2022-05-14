import React from 'react'

class WorkExperienceInputs extends React.Component {

      componentDidMount(){
            let button = document.querySelector('button.work')
            if(button.hasAttribute('id-to-edit')){
                button.addEventListener('click', this.props.handleResubmit)
                button.textContent = 'Edit experience'
            }
            if(!button.hasAttribute('id-to-edit')){
                button.addEventListener('click', this.props.handleSubmit)
                button.textContent = 'Add experience'
            }
        }
        
        componentDidUpdate(){
            let button = document.querySelector('button.work')
            if(button.hasAttribute('id-to-edit')){
                button.removeEventListener('click', this.props.handleSubmit)
                button.addEventListener('click', this.props.handleResubmit)
                button.textContent = 'Edit experience'
            }
            if(!button.hasAttribute('id-to-edit')){
                button.removeEventListener('click', this.props.handleResubmit)
                button.addEventListener('click', this.props.handleSubmit)
                button.textContent = 'Add experience'
            }
        }

    render() {
      return (
          <form className='container--input' id='work'>
            <section>
                  <label htmlFor="place"> Position </label>
                  <input 
                        className='place--input' 
                        type="text" 
                        id='place'
                        name="work"
                        minLength="2"
                        onChange={this.props.handleChange}
                        value={this.props.values.place || ''}
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
                        value={this.props.values.company || ''}
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
                        value={this.props.values.observations || ''}
                        />
            </section>   
            <button 
                  className='work'>
            </button> 
          </form>
      )
    }
  }
  
  export default WorkExperienceInputs
  