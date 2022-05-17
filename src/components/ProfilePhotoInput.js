import React from 'react';

class ProfilePhotoInput extends React.Component {
	handleImageInput(event) {
		const imgEl = document.querySelector('.profile--photo');
		const input = event.target;
		if (input.files && input.files[0]) {
			const reader = new FileReader();
			reader.onload = (event) => {
				imgEl.src = event.target.result;
			};
			reader.readAsDataURL(input.files[0]);
		}
	}

	render() {
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
				<img className="profile--photo" alt="Profile Photo" src={this.props.profilePhoto} />
			</section>
		);
	}
}

export default ProfilePhotoInput;
