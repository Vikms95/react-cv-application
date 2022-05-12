import React from 'react'
import ProfilePhotoView from './ProfilePhotoView'
import GeneralInfoView from './GeneralInfoView'
import EducationView from './EducationView'
import WorkExperienceView from './WorkExperienceView'
import LanguagesView from './LanguagesView'

class PreviewModeView extends React.Component {
    render() {

      const values = this.props.inputValues
      const generalValues = values.general
      const educationValues = values.education.educationArray
      const workValues = values.work.workArray
      const languagesValues = values.languages.languagesArray

      return (

        <section className="cv--container preview">

            <section className='general--info--view'>
              <ProfilePhotoView profilePhoto={this.props.profilePhoto} />
              <GeneralInfoView values={generalValues} />
            </section>

            <h2 className='preview--field--title'> EDUCATION </h2>
            {
              this.props.isAnyItemInField(educationValues) 
              && <EducationView 
                    isEditorMode={this.props.isEditorMode}
                    values={educationValues}
                    toggleMode = {this.props.toggleMode}
                 />
            }
            <h2 className='preview--field--title'> WORK EXPERIENCE </h2>
            {
              this.props.isAnyItemInField(workValues) 
              && <WorkExperienceView
                    isEditorMode={this.props.isEditorMode}
                    values={workValues}
                    toggleMode = {this.props.toggleMode}
                 />
            }
            <h2 className='preview--field--title'> LANGUAGES </h2>

            {
              this.props.isAnyItemInField(languagesValues) 
              && <LanguagesView 
                    values={languagesValues}
              />
            }
        </section>
      )
    }
  }
  
export default PreviewModeView
  