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
        this.state = {
            general:{
                name  : "",
                email : "",
                phone : "",
            },

            education:{
                title:"",
                university:"",
                observations:"",
                educationArray:[],
            },

            work:{
                place:"",
                company:"",
                observations:"",
                workArray:[],
            },

            languages:{
                language:"",
                proficiency:"",
                languagesArray:[],
            },
        }

        this.handleChange = this.handleChange.bind(this)
    }


  handleChange(event){
      const {name,id,value} = event.target
      this.setState(prevState=>{
          console.log(prevState)
          return {
                ...prevState,
                [`${name}`]: {
                    ...prevState[name],
                    [id] : value
                }
          }
      })
  }

    handleSubmitField(){
        //When any field button is cliked  
    }
    handleSubmitPreview(){
        //When the preview button is clicked  
    }   

  render() {
    return (
      <section className='general--container'>
        <Header />
        <section className="cv--editor--container">
          <section className='general--info'>
            <ProfilePicture />
            <GeneralInfoInputs 
                handleChange={this.handleChange} 
            />
          </section>

          <EducationInputs handleChange={this.handleChange} />
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
