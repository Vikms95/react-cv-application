import React from 'react';
import ProfilePhotoView from './ProfilePhotoView';
import GeneralInfoView from './GeneralInfoView';
import EducationView from './EducationView';
import WorkExperienceView from './WorkExperienceView';
import LanguagesView from './LanguagesView';

class PreviewModeView extends React.Component {
	render() {
		const values = this.props.inputValues;
		const generalValues = values.general;
		const educationValues = values.education.educationArray;
		const workValues = values.work.workArray;
		const languagesValues = values.languages.languagesArray;

		const {
			profilePhoto,
			isEditorMode,
			toggleMode,
			isAnyItemInField
		} = this.props;

		return (
			<section className="cv--container preview">
				<section className="general--info--view">
					<ProfilePhotoView profilePhoto={profilePhoto} />
					<GeneralInfoView values={generalValues} />
				</section>

				<h2 className="preview--field--title"> EDUCATION </h2>
				{isAnyItemInField(educationValues) && (
					<EducationView
						isEditorMode={isEditorMode}
						toggleMode={toggleMode}
						values={educationValues}
					/>
				)}
				<h2 className="preview--field--title"> WORK EXPERIENCE </h2>
				{isAnyItemInField(workValues) && (
					<WorkExperienceView
						isEditorMode={isEditorMode}
						toggleMode={toggleMode}
						values={workValues}
					/>
				)}
				<h2 className="preview--field--title"> LANGUAGES </h2>
				<div className="bottom--row--preview">
					{isAnyItemInField(languagesValues) && (
						<LanguagesView values={languagesValues} />
					)}
				</div>
			</section>
		);
	}
}

export default PreviewModeView;
