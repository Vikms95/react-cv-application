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

        <section className="cv--container">

            <ProfilePhotoView profilePhoto={this.props.profilePhoto} />
            <GeneralInfoView values={generalValues} />

            <h2 className='preview--field--title'> Education </h2>
            {
              this.props.isAnyItemInField(educationValues) 
              && <EducationView values={educationValues}
              />
            }
            <h2 className='preview--field--title'> Work experience </h2>
            {
              this.props.isAnyItemInField(workValues) 
              && <WorkExperienceView values={workValues}
              />
            }
            <h2 className='preview--field--title'> Languages </h2>

            {
              this.props.isAnyItemInField(languagesValues) 
              && <LanguagesView values={languagesValues}
              />
            }
        </section>
      )
    }
  }
  
export default PreviewModeView
  