import React from 'react'
import './styles/App.css'
import Header from './components/Header'
import EditModeView from './components/EditModeView'
import PreviewModeView from './components/PreviewModeView'

class App extends React.Component {
    constructor(){
        super()
        this.state = {
            isEditorMode: false,
            
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
                workArray:[
                    {place:"Backend developer", company: "Spotify", observations:"Worked with React, Node, Mongo and Express to build fully fledged backend network. "}
                ],
            },

            languages:{
                language:"",
                proficiency:"",
                languagesArray:[
                    {language:"English", proficiency: "Native"}
                ],
            }
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.isAllItemsFilled = this.isAllItemsFilled.bind(this)
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
	console.log(this.state)
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

  //When the preview button is clicked  
	handleSubmitPreview(){
        // Make some checks to see if education, work and languages
        // array have at least 1 item
        // *IF one empty array is found
        if(this.isAllItemsFilled()){
            console.log("exit")
        }else{
            console.log("check")
        }
            // Ask if they are sure that they want
            // to proceed with the preview (use an absolute element with
            // display none/block) a warning of the empty field and a button
            // which just triggers the same functionality of the next lines of code
        // Swap the value isEditorMode to false
	}   

    isAllItemsFilled(){
        return (
                   this.state.education.educationArray.length > 0
                && this.state.work.workArray.length > 0
                && this.state.languages.languagesArray.length > 0                
               )
    }

	isAnyItemInField(values){
        return values.length > 0
    }

  render() {
    return (
      <section className='general--container'>
        <Header/>
		{ 
			(this.state.isEditorMode) 
				? <EditModeView 
                    inputValues         = {this.state}
					handleChange        = {this.handleChange} 
					handleSubmit        = {this.handleSubmit} 
					isAnyItemInField    = {this.isAnyItemInField}
                    handleSubmitPreview = {this.handleSubmitPreview}
                />
				: <PreviewModeView
                    inputValues      = {this.state}
					isAnyItemInField = {this.isAnyItemInField}
                 />
		}
      </section>
    )
  }
}

export default App
