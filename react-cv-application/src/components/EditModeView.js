import React from 'react'
import ProfilePicture from './ProfilePictureInput'
import GeneralInfoInputs from './GeneralInfoInputs'
import EducationInputs from './EducationInputs'
import WorkExperienceInputs from './WorkExperienceInputs'
import LanguagesInputs from './LanguagesInputs'
import SubmitButton from './SubmitButton'
import EducationView from './EducationView'
import WorkExperienceView from './WorkExperienceView'
import LanguagesView from './LanguagesView'

class EditModeView extends React.Component{
    
    isAnyItemInCategory(inputValues){
        return inputValues.length > 0
    }

    render(){
        
        const values = this.props.inputValues
        const educationArray = values.education.educationArray
        const workArray = values.work.workArray
        const languagesArray = values.languages.languagesArray

        return(   
            <section className="cv--container">
                <section className='general--info'>
                <ProfilePicture />
                <GeneralInfoInputs 
                    handleChange={this.props.handleChange} 
                />
                </section>

                <EducationInputs
                            values={values.education} 
                            handleChange={this.props.handleChange} 
                            handleSubmit={this.props.handleSubmit} 
                        />

                { this.isAnyItemInCategory(educationArray) && 
                < EducationView values={educationArray}/> }

                <WorkExperienceInputs 
                            values={values.work}
                            handleChange={this.props.handleChange} 
                            handleSubmit={this.props.handleSubmit} 
                        />
                {this.isAnyItemInCategory(workArray) &&
                <WorkExperienceView values={workArray}/>}

                {this.isAnyItemInCategory(languagesArray) &&
                <LanguagesView values={languagesArray}/>}

                <section className='bottom--row'>
                <LanguagesInputs 
                                values={values.languages}
                                handleChange={this.props.handleChange} 
                                handleSubmit={this.props.handleSubmit} 
                            />
                <SubmitButton handleClick={this.props.handleSubmitPreview}/>
                </section>
            </section>

        )
    }
    
}


export default EditModeView