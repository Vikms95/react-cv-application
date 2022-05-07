import React from 'react'
import './styles/App.css'
import Header from './components/Header'
import ProfilePicture from './components/ProfilePictureInput'
import GeneralInfoInputs from './components/GeneralInfoInputs'
import EducationInputs from './components/EducationInputs'
import WorkExperienceInputs from './components/WorkExperienceInputs'
import LanguagesInputs from './components/LanguagesInputs'
import SubmitButton from './components/SubmitButton'

class App extends React.Component {
    constructor(){
        super()
        // State for profile picture
        // State for general info inputs
        this.stateGeneralInfo = {
            name  : "",
            email : "",
            phone : "",
        }
        // State for education input
        // State for work experience inputs
        //
        this.updateGeneralInfo = this.updateGeneralInfo.bind(this)
    }


  updateGeneralInfo(event){
      const {name,value} = event.target
      this.setState(prevState=>{
          return {
                ...prevState,
                [`${name}`]: value
          }
      })
  }

  render() {
    return (
      <section className='general--container'>
        <Header />
        <section className="cv--editor--container">
          <section className='general--info'>
            <ProfilePicture />
            <GeneralInfoInputs 
                handleChange={this.updateGeneralInfo} 
                values={this.stateGeneralInfo}
            />
          </section>

          <EducationInputs />
          <WorkExperienceInputs />

          <section className='bottom--row'>
            <LanguagesInputs />
            <SubmitButton />
          </section>

        </section>
      </section>
    )
  }
}

export default App
