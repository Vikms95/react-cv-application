import React from 'react'
import ProfilePicture from './ProfilePicture'
import GeneralInfoInputs from './GeneralInfoInputs'

class GeneralInfo extends React.Component {
  render() {
    return (
      <section className="general--info">
        <ProfilePicture />
        <GeneralInfoInputs />
      </section>
    )
  }
}

export default GeneralInfo
