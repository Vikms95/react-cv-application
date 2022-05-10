import React from 'react'

class ProfilePhotoView extends React.Component {
  render() {
    return <img className="profile--photo" src={this.props.profilePhoto} alt="Profile Photo" />
  }
}

export default ProfilePhotoView
