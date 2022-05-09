import React from 'react'
import EducationView from './EducationView'
import WorkExperienceView from './WorkExperienceView'
import LanguagesView from './LanguagesView'

class PreviewModeView extends React.Component {
    render() {
      return (
        <section className="cv--container">
            {this.props.inputValues.education.educationArray.length > 0 && 
            <EducationView values={this.props.inputValues.education.educationArray}/>}
            
            {this.props.inputValues.work.workArray.length > 0 &&
            <WorkExperienceView values={this.props.inputValues.work.workArray}/>}


            {this.props.inputValues.languages.languagesArray.length > 0 &&
            <LanguagesView values={this.props.inputValues.languages.languagesArray}/>}
        </section>
      )
    }
  }
  
export default PreviewModeView
  