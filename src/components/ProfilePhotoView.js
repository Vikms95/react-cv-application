import React from 'react';

function ProfilePhotoView(props) {
  const { profilePhoto } = props;
  return (
    <img
      className="profile--photo--preview"
      src={profilePhoto}
      alt="Profile"
    />
  );
}

export default ProfilePhotoView;
