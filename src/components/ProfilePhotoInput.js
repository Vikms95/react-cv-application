/* eslint-disable class-methods-use-this */
import React from 'react';

class ProfilePhotoInput extends React.Component {
  handleImageInput(event) {
    const imgEl = document.querySelector('.profile--photo');
    const input = event.target;
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = (readEvent) => {
        imgEl.src = readEvent.target.result;
      };
      reader.readAsDataURL(input.files[0]);
    }
  }

  render() {
    const { profilePhoto } = this.props;

    return (
      <section className="profile--photo--section">
        <form className="profile--photo--selector">
          <label htmlFor="image--picker" className="image--picker">
            {' '}
            Select image
          </label>
          <input
            onChange={(event) => this.handleImageInput(event)}
            type="file"
            id="image--picker"
            accept="image/png, image/jpeg"
          />
        </form>
        <img className="profile--photo" alt="Profile" src={profilePhoto} />
      </section>
    );
  }
}

export default ProfilePhotoInput;
