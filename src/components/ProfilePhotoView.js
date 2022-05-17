import React from 'react';

class ProfilePhotoView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { profilePhoto } = this.props;
    return (
      <img
        className="profile--photo--preview"
        src={profilePhoto}
        alt="Profile"
      />
    );
  }
}

export default ProfilePhotoView;
