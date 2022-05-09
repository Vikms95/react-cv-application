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
    

    render(){
        
        const values = this.props.inputValues
        const educationValues = values.education.educationArray
        const workValues = values.work.workArray
        const languagesValues = values.languages.languagesArray

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

                { this.props.isAnyItemInField(educationValues) && 
                < EducationView values={educationValues}/> }

                <WorkExperienceInputs 
                            values={values.work}
                            handleChange={this.props.handleChange} 
                            handleSubmit={this.props.handleSubmit} 
                        />
                {this.props.isAnyItemInField(workValues) &&
                <WorkExperienceView values={workValues}/>}

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