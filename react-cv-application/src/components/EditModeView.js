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
        return(   
            <section className="cv--container">
                <section className='general--info'>
                <ProfilePicture />
                <GeneralInfoInputs 
                    handleChange={this.props.handleChange} 
                />
                </section>

                <EducationInputs
                            values={this.props.state.education} 
                            handleChange={this.props.handleChange} 
                            handleSubmit={this.props.handleSubmit} 
                        />
                {this.props.state.education.educationArray.length > 0 && 
                <EducationView values={this.props.state.education.educationArray}/>}
                <WorkExperienceInputs 
                            values={this.props.state.work}
                            handleChange={this.props.handleChange} 
                            handleSubmit={this.props.handleSubmit} 
                        />
                {this.props.state.work.workArray.length > 0 &&
                <WorkExperienceView values={this.props.state.work.workArray}/>}

                {this.props.state.languages.languagesArray.length > 0 &&
                <LanguagesView values={this.props.state.languages.languagesArray}/>}
                <section className='bottom--row'>
                <LanguagesInputs 
                                values={this.props.state.languages}
                                handleChange={this.props.handleChange} 
                                handleSubmit={this.props.handleSubmit} 
                            />
                <SubmitButton />
                </section>
            </section>

        )
    }
    
}


export default EditModeView