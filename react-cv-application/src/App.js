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
        this.handleSubmit = this.handleSubmit.bind(this)
    }


  handleChange(event){
		console.log(this.state)
      const {value, id ,name} = event.target
      this.setState(prevState=>{
          return {
						...prevState,
						[name]: {
								...prevState[name],
								[id] : value
						}
          }
      })
  }

  //When any field button is cliked  
  handleSubmit(event){
    event.preventDefault()
    // Select the button values to know which field needs submitting
		// we are only getting the event class name to know which field to
		// update
    const name = event.target.className
		this.setState(prevState =>{
			console.log(prevState)
			const newArray = this.getObjectToAdd(prevState, name)
			const emptyObject = this.removeObjectContent(name)
			// Clear the fields for the current form
			return {
				...prevState,
				[name]: {
					...emptyObject, // Replace with erased values
					[`${name + 'Array'}`] : 
					// Include all the values from array + prev.state[name] minus the array
						newArray 
				}
			}
		})
  }


	getObjectToAdd(state, name){

		if(name === 'education'){
			const {title, university, observations} = state[name]
			const objectToAdd = {
				'title': title,
				'university': university,
				'observations': observations
			}
			return [...state.education.educationArray, objectToAdd]
		}

		if(name === 'work'){
			const {place, company, observations} = state[name]
			const objectToAdd = {
				'place': place,
				'company': company,
				'observations': observations
			}
			return [...state.work.workArray, objectToAdd]
		}

		if(name === 'languages'){
			const {language, proficiency} = state[name]
			const objectToAdd = {
				'language': language,
				'proficiency': proficiency
			}
			return [...state.languages.languagesArray,objectToAdd]
		}
	}

	removeObjectContent(name){
		let objectToAdd
		if(name === 'education'){
			objectToAdd = {
				'title': "",
				'university': "",
				'observations': ""
			}
		}

		if(name === 'work'){
			objectToAdd = {
				'place': "",
				'company': "",
				'observations': ""
			}
		}

		if(name === 'languages'){
			objectToAdd = {
				'language': "",
				'proficiency': ""
			}
		}
		return objectToAdd
	}

	formIsValid(){
		const titleInput = document.getElementById('title')
		const authorInput = document.getElementById('author')
		const pagesInput = document.getElementById('pages')
	
		titleInput.setCustomValidity('')
		authorInput.setCustomValidity('')
		pagesInput.setCustomValidity('')
	
		titleInput.style.backgroundColor = 'white'
		authorInput.style.backgroundColor = 'white'
		pagesInput.style.backgroundColor = 'white'
		titleInput.style.border = '1px solid black'
		authorInput.style.border = '1px solid black'
		pagesInput.style.border = '1px solid black'
	
		if(titleInput.value === ''){
			titleInput.setCustomValidity('The book needs a title!')
			titleInput.reportValidity()
			titleInput.style.backgroundColor = 'pink'
			titleInput.style.border = '1px solid red'
			return false
		}
		if(authorInput.value === ''){
			authorInput.setCustomValidity('The author needs a name!')
			authorInput.reportValidity()
			authorInput.style.backgroundColor = 'pink'
			authorInput.style.border = '1px solid red'
			return false
		}
		
		if(!pagesInput.checkValidity()){
			pagesInput.setCustomValidity('The book cannot have negative pages!')
			pagesInput.reportValidity()
			pagesInput.style.backgroundColor = 'pink'
			pagesInput.style.border = '1px solid red'
			return false
		}
			return true
	}
	
  //When the preview button is clicked  
  handleSubmitPreview(){
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

          <EducationInputs
						values={this.state.education} 
						handleChange={this.handleChange} 
						handleSubmit={this.handleSubmit} 
					/>
          <WorkExperienceInputs 
						values={this.state.work}
						handleChange={this.handleChange} 
						handleSubmit={this.handleSubmit} 
					/>

          <section className='bottom--row'>
            <LanguagesInputs 
							values={this.state.languages}
							handleChange={this.handleChange} 
							handleSubmit={this.handleSubmit} 
						/>
            <SubmitButton />
          </section>

        </section>
      </section>
    )
  }
}

export default App
