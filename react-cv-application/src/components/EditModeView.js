import React from 'react'
import ProfilePhotoInput from './ProfilePhotoInput'
import GeneralInfoInputs from './GeneralInfoInputs'
import EducationInputs from './EducationInputs'
import WorkExperienceInputs from './WorkExperienceInputs'
import LanguagesInputs from './LanguagesInputs'
import SubmitButton from './SubmitButton'
import EducationView from './EducationView'
import WorkExperienceView from './WorkExperienceView'
import LanguagesView from './LanguagesView'

class EditModeView extends React.Component{
    

    render(){
        
        const values = this.props.inputValues
        const educationValues = values.education.educationArray
        const workValues = values.work.workArray
        const languagesValues = values.languages.languagesArray

        return(   
            <section className="cv--container">
                <section className='general--info'>
                <ProfilePhotoInput profilePhoto={this.props.profilePhoto}/>
                <GeneralInfoInputs 
                    handleChange={this.props.handleChange} 
                />
                </section>

                <EducationInputs
                            values={values.education} 
                            handleChange={this.props.handleChange} 
                            handleSubmit={this.props.handleSubmit} 
                        />

                { this.props.isAnyItemInField(educationValues) && 
                < EducationView 
                            values={educationValues}
                            isEditorMode= {this.props.isEditorMode}
                            /> }

                <WorkExperienceInputs 
                            values={values.work}
                            handleChange={this.props.handleChange} 
                            handleSubmit={this.props.handleSubmit} 
                        />
                {this.props.isAnyItemInField(workValues) &&
                <WorkExperienceView 
                            values={workValues}
                            isEditorMode= {this.props.isEditorMode}
                />}

                {this.props.isAnyItemInField(languagesValues) &&
                <LanguagesView values={languagesValues}/>}

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