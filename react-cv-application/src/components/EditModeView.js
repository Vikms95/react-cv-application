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
    
    isItemInCategory(inputValues){
        return inputValues.length > 0
    }

    render(){
        return(   
            <section className="cv--container">
                <section className='general--info'>
                <ProfilePicture />
                <GeneralInfoInputs 
                    handleChange={this.props.handleChange} 
                />
                </section>

                <EducationInputs
                            values={this.props.inputValues.education} 
                            handleChange={this.props.handleChange} 
                            handleSubmit={this.props.handleSubmit} 
                        />
                {this.props.inputValues.education.educationArray.length > 0 && 
                <EducationView values={this.props.inputValues.education.educationArray}/>}
                <WorkExperienceInputs 
                            values={this.props.inputValues.work}
                            handleChange={this.props.handleChange} 
                            handleSubmit={this.props.handleSubmit} 
                        />
                {this.props.inputValues.work.workArray.length > 0 &&
                <WorkExperienceView values={this.props.inputValues.work.workArray}/>}

                {this.props.inputValues.languages.languagesArray.length > 0 &&
                <LanguagesView values={this.props.inputValues.languages.languagesArray}/>}
                
                <section className='bottom--row'>
                <LanguagesInputs 
                                values={this.props.inputValues.languages}
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