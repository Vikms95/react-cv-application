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

  // State for profile picture
  // State for general info inputs
  // State for education input
  // State for work experience inputs
  //

  // 

  previewCV(){

  }

  render() {
    return (
      <section className='general--container'>
        <Header />
        <section className="container">
          <section className='general--info'>
            <ProfilePicture />
            <GeneralInfoInputs />
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
