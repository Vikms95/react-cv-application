import React from 'react'
import './styles/App.css'
import AlertBox from './components/AlertBox'
import Header from './components/Header'
import EditModeView from './components/EditModeView'
import PreviewModeView from './components/PreviewModeView'
import profilePhoto from './images/stock-pic.png'
import uniqid from 'uniqid'

class App extends React.Component {
    constructor(){
        super()
        this.state = {
            isEditorMode: true,
            general:{
                name  : "John Doe",
                email : "lorem@ipsu.com",
                phone : "123321123321",
            },

            education:{
				id: uniqid(),
                title:"",
                university:"",
                observations:"",
                educationArray:[
					{id:'32', title:"Bachellors in Computer Science", university: "Massachussets Institute of Technology ", observations:"Lorem Ipsum is simply dummy text ofnic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letr Ipsum"},
					{id:'33', title:"Grade in Tourism", university: "CETA - Escola de Turisme", observations:"Lorem Ipsum is simply dummy text has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lom Ipsum"},
					// {title:"Highscool Diploma", university: "Carrasco i Formiguera", observations:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"},
				],
            },

            work:{
				id: uniqid(),
                place:"",
                company:"",
                observations:"",
                workArray:[
                    {id:'3232132', place:"Backend developer", company: "Spotify", observations:"Lorem Ipsum is simply dummy text of the printing and types in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"},
                    {id:'33242342', place:"Hotel Recepcionist", company: "H10 Diagonal", observations:"Lorem Ipsum is simply dummy text of the printing and unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"},
                    // {place:"Hotel Recepcionist", company: "Duquesa de Cardona", observations:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"},
                ],
            },

            languages:{
				id: uniqid(),
                language:"",
                proficiency:"",
                languagesArray:[
                    {id:'32329992', language:"English", proficiency: "Native"},
                    {id:'320923', language:"Spanish", proficiency: "Native"},
                    {id:'903239', language:"Russian", proficiency: "Professional"},
                ],
            }
        }

        this.toggleMode = this.toggleMode.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.isAllItemsFilled = this.isAnyOptionalFieldEmpty.bind(this)
        this.handleSubmitPreview = this.handleSubmitPreview.bind(this)
		this.isRequiredFieldsValid = this.isRequiredFieldsValid.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.handleFieldEdit = this.handleFieldEdit.bind(this)
		
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
		const clickedField = event.target.className
		if(this.formIsValid(clickedField)){
			this.setState(prevState =>{
				const newArray = this.getArrayToAdd(prevState, clickedField)
				// Store the current object with empty fields to reassign later
				const emptyObject = this.getEmptyObjectToAdd(clickedField)
				return {
					...prevState,
					[clickedField]: {
						...emptyObject, // Replace with erased values
						[`${clickedField + 'Array'}`] : 
						// Include all the values from array + prev.state[name] minus the array
							newArray 
					}
				}
			})
		}else{
			return
		}
	}

	/**
	 * Will be invoked when delete button on edit mode is
	 * clicked. 
     * Will be passed to EditViewMode > EducationView | WorkExperienceView
	 */
	handleDelete(id, event){
        const clickedField = event.target.parentElement.getAttribute('name')
        this.setState(prevState =>{
            //Get reference of corresponding array and create a new array out of it
            const newArray = prevState[`${clickedField}`][`${clickedField + 'Array'}`]
            //Assign it to the new state
            return{
                ...prevState,
                [clickedField]: {
                    ...prevState.clickedField,
                    [`${clickedField + 'Array'}`]:
                        // Filter the element that received the click event
                        newArray.filter(element => element.id !== id)
                }    
            }
        })  
	}
    
    /**
     * Invoked when edit button is clicked on edit mode
     * Will take the clicked button field element, find it in the array
     * based on the id, erase the values from state and insert the values from
     * the clicked element in state.
     * When the submit button is clicked, it will change all the values from within
     * the array corresponding to the element clicked and empty the inputs again.
     */
    handleFieldEdit(id,event){
        console.log(this.state)
        console.dir(id,event)
        // Get field through parent element input

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
		if(name === 'education'){
			const {id, title, university, observations} = state[name]
			const objectToAdd = {
				'id': id,
				'title': title,
				'university': university,
				'observations': observations
			}
			return [...state.education.educationArray, objectToAdd]
		}

		if(name === 'work'){
			const {id, place, company, observations} = state[name]
			const objectToAdd = {
				'id': id,
				'place': place,
				'company': company,
				'observations': observations
			}
			return [...state.work.workArray, objectToAdd]
		}

		if(name === 'languages'){
			const {id, language} = state[name]
			const proficiency = document.querySelector('.proficiency').value
			const objectToAdd = {
				'id': id,
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
                'id': uniqid(),
                'title': "",
                'university': "",
                'observations': ""
            }
        }

        if(name === 'work'){
            objectToAdd = {
                'id': uniqid(),
                'place': "",
                'company': "",
                'observations': ""
            }
        }

        if(name === 'languages'){
            objectToAdd = {
                'id': uniqid(),
                'language': "",
                'proficiency': ""
            }
        }
        return objectToAdd
        }

	toggleMode(){
		this.setState(prevState =>{
			return {
					...prevState,
					isEditorMode : !prevState.isEditorMode
					}
		})
		this.removeAlertBox()
		console.log(this.state.isEditorMode)
	}

	removeAlertBox(){
		document.querySelector('.alert--box').classList.remove('active')
	}

	revealAlertBox(){
		document.querySelector('.alert--box').classList.add('active')
	}

  //When the preview button is clicked  
	handleSubmitPreview(){        
		if(this.isRequiredFieldsValid()){
			if(this.isAnyOptionalFieldEmpty()){
				this.revealAlertBox()
				return
			}
			this.toggleMode()
			return
		}
		this.revealAlertBox()
		setTimeout(this.removeAlertBox, 2000)
	}

	isRequiredFieldsValid(){
		const{ name, email, phone } = this.state.general
		return name.length  > 0 
			&& email.length > 0 
			&& phone.length > 0                
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
	
	scrollTop(){
		document.body.scrollTop = 0
		document.documentElement.scrollTop = 0
	}


  render() {
		return (
		<section className='general--container'>
			<AlertBox
				toggleMode={this.toggleMode}
				removeAlertBox={this.removeAlertBox}
				isRequiredFieldsValid={this.isRequiredFieldsValid}
			/>
			<button 
				onClick={this.scrollTop} 
				id='scroll--up--button'>
			Scroll up
			</button>

			<Header 
				isEditorMode={this.state.isEditorMode}
				toggleMode={this.toggleMode}

			/>

			{ 
				(this.state.isEditorMode) 
					? <EditModeView 
						profilePhoto        = {profilePhoto}
						inputValues         = {this.state}
						isEditorMode        = {this.state.isEditorMode}
						handleChange        = {this.handleChange} 
						handleSubmit        = {this.handleSubmit} 
                        handleDelete        = {this.handleDelete}
                        handleFieldEdit     = {this.handleFieldEdit}
						isAnyItemInField    = {this.isAnyItemInField}
						handleSubmitPreview = {this.handleSubmitPreview}
					/>
					: <PreviewModeView   
						toggleMode       = {this.toggleMode}
						profilePhoto     = {profilePhoto}
						inputValues      = {this.state}
						isEditorMode     = {this.state.isEditorMode}
						isAnyItemInField = {this.isAnyItemInField}
					/>
			}
		</section>
		)
  }
}

export default App
