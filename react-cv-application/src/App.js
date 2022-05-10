import React from 'react'
import './styles/App.css'
import Header from './components/Header'
import EditModeView from './components/EditModeView'
import PreviewModeView from './components/PreviewModeView'
import profilePhoto from './images/stock-pic.png'

class App extends React.Component {
    constructor(){
        super()
        this.state = {
            isEditorMode: true,
            
            general:{
                name  : "Victor",
                email : "vms1955@hotmail.com",
                phone : "446746778",
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
                workArray:[
                    {place:"Backend developer", company: "Spotify", observations:"Worked with React, Node, Mongo and Express to build fully fledged backend network. "}
                ],
            },

            languages:{
                language:"",
                proficiency:"",
                languagesArray:[
                    // {language:"English", proficiency: "Native"}
                ],
            }
        }

        this.toggleMode = this.toggleMode.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.isAllItemsFilled = this.isAnyOptionalFieldEmpty.bind(this)
        this.handleSubmitPreview = this.handleSubmitPreview.bind(this)
		
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
		event.preventDefault()
		const name = event.target.className
		if(this.formIsValid(name)){
			this.setState(prevState =>{
				const newArray = this.getArrayToAdd(prevState, name)
				// Store the current object with empty fields to reassign later
				const emptyObject = this.getEmptyObjectToAdd(name)
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
	
	getArrayToAdd(state, name){
        console.log("Hi")
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

	getEmptyObjectToAdd(name){
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

	toggleMode(){
		this.setState(prevState =>{
			// Toggle the value isEditorMode to
			// the opposite value it was
			return {
					...prevState,
					isEditorMode : !prevState.isEditorMode
					}
		})
		this.removeAlertBox()
	}

	removeAlertBox(){
		document.querySelector('.alert--box').classList.remove('active')
	}

  //When the preview button is clicked  
	handleSubmitPreview(){
        // Make some checks to see if education, work and languages
        // array have at least 1 item
        // *IF one empty array is found
        
		if(this.isRequiredFieldsValid()){
			if(this.isAnyOptionalFieldEmpty()){
				document.querySelector('.alert--box').classList.add('active')
				return
			}
			this.toggleMode()
			return
		}
	}

	isRequiredFieldsValid(){
		const{ name, email, phone } = this.state.general
		return name.length > 0 || email.length > 0 || phone.length > 0                
	}

    isAnyOptionalFieldEmpty(){
        return (
                   this.state.education.educationArray.length === 0
                || this.state.work.workArray.length === 0
                || this.state.languages.languagesArray.length === 0                
               )
    }

	isAnyItemInField(values){
        return values.length > 0
    }

  render() {
		return (
		<section className='general--container'>
			<div className='alert--box active'>
				<div className='alert--box--text'> Not all the CV fields are filled with your information.
					Are you sure you want to proceed with the preview? 
				</div>
				<div className='alert--box--buttons'>
					<button onClick={this.toggleMode} className='alert--box--button'> Proceed </button>
					<button onClick={this.removeAlertBox} className='alert--box--button'> Back to editing </button>
				</div>
			</div>
			<Header/>
			{ 
				(this.state.isEditorMode) 
					? <EditModeView 
						profilePhoto        = {profilePhoto}
						inputValues         = {this.state}
						handleChange        = {this.handleChange} 
						handleSubmit        = {this.handleSubmit} 
						isAnyItemInField    = {this.isAnyItemInField}
						handleSubmitPreview = {this.handleSubmitPreview}
					/>
					: <PreviewModeView
						profilePhoto     = {profilePhoto}
						inputValues      = {this.state}
						isAnyItemInField = {this.isAnyItemInField}
					/>
			}
		</section>
		)
  }
}

export default App
