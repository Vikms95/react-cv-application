import React from 'react'
import './styles/App.css'
import Header from './components/Header'
import ProfilePicture from './components/ProfilePictureInput'
import GeneralInfoInputs from './components/GeneralInfoInputs'
import EducationInput from './components/EducationInput'
import WorkExperienceInput from './components/WorkExperienceInput'
import LanguagesInput from './components/LanguagesInput'
import SubmitButton from './components/SubmitButton'

class App extends React.Component {
  render() {
    return (
      <section className='general--container'>
        <Header />
        <section className="container">
          <section className='general--info'>
            <ProfilePicture />
            <GeneralInfoInputs />
          </section>

          <EducationInput />
          <WorkExperienceInput />

          <section className='bottom--row'>
            <LanguagesInput />
            <SubmitButton />
          </section>

        </section>
      </section>
    )
  }
}

export default App
