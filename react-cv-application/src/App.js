import React from 'react'
import './styles/App.css'
import Header from './components/Header'
import EditModeView from './components/EditModeView'
import PreviewModeView from './components/PreviewModeView'

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
                educationArray:[
					{title:"Bachellors in Computer Science", university: "Massachussets Institute of Technology ", observations:"Cum Laude graduated with specialization on computer quantum theory and web development prospects"}
				],
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
			isEditorMode: true
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }


  handleChange(event){
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
	console.log(this.state)
	event.preventDefault()
	const name = event.target.className
	if(this.formIsValid(name)){
		this.setState(prevState =>{
			const newArray = this.getObjectToAdd(prevState, name)
			// Store the current object with empty fields to reassign later
			const emptyObject = this.removeObjectContent(name)
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
	}else{
		return
	}
	}
	
	formIsValid(name){

		const formToValidate = document.getElementById(`${name}`)
		const inputsToValidate = Array.from(formToValidate.getElementsByTagName('input'))
		this.resetFormsStyling()

		for (let i = 0; i < inputsToValidate.length; i++) {
			inputsToValidate[i].setCustomValidity('')
			if(inputsToValidate[i].value === ''){
				this.reportInvalidInput(inputsToValidate[i])	
				return false		
			}
		}		
		return true
	}

	reportInvalidInput(element){
		element.setCustomValidity('This field is required')
		element.reportValidity()
		element.classList.add('invalid--input')
	}

	resetFormsStyling(){
		const inputElements = Array.from(document.getElementsByTagName('input'))
		for (let i = 0;  i < inputElements.length; i++) {
			inputElements[i].classList.remove('invalid--input')		
		}
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
			const {language} = state[name]
			const proficiency = document.querySelector('.proficiency').value
			const objectToAdd = {
				'language': language,
				'proficiency': proficiency
			}
			return [...state.languages.languagesArray, objectToAdd]
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

  //When the preview button is clicked  
	handleSubmitPreview(){
	}   

  render() {
    return (
      <section className='general--container'>
        <Header/>
		{ 
			(this.state.isEditorMode) 
				? <EditModeView 
					handleChange={this.handleChange} 
					handleSubmit={this.handleSubmit} 
					state       ={this.state} />

				: <PreviewModeView />
		}
      </section>
    )
  }
}

export default App
