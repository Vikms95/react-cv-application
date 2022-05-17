import React from 'react';

class ProfilePhotoView extends React.Component {
	render() {
		return (
			<img
				className="profile--photo--preview"
				src={this.props.profilePhoto}
				alt="Profile Photo"
			/>
		);
	}
}

export default ProfilePhotoView;
