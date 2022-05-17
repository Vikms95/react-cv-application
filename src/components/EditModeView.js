import React from 'react';
import ProfilePhotoInput from './ProfilePhotoInput';
import GeneralInfoInputs from './GeneralInfoInputs';
import EducationInputs from './EducationInputs';
import WorkExperienceInputs from './WorkExperienceInputs';
import LanguagesInputs from './LanguagesInputs';
import SubmitButton from './SubmitButton';
import EducationView from './EducationView';
import WorkExperienceView from './WorkExperienceView';
import LanguagesView from './LanguagesView';

class EditModeView extends React.Component {
	render() {
		
		const {
			profilePhoto,
			handleChange,
			handleSubmit,
			handleDelete,
			handleFieldEdit,
			handleSubmitPreview,
			isAnyItemInField,
			isEditorMode,	
		} = this.props;

		const values = this.props.inputValues;

		const educationValues = values.education.educationArray;
		const workValues      = values.work.workArray;
		const languagesValues = values.languages.languagesArray;

		return (

			<section className="cv--container">
				<section className="general--info">
					<ProfilePhotoInput profilePhoto={profilePhoto} />
					<GeneralInfoInputs handleChange={handleChange} />
				</section>

				<EducationInputs
					values       = {values.education}
					handleChange = {handleChange}
					handleSubmit = {handleSubmit}
				/>

				{isAnyItemInField(educationValues) && (
					<EducationView
						values={educationValues}
						isEditorMode={isEditorMode}
						handleDelete={handleDelete}
						handleFieldEdit={handleFieldEdit}
					/>
				)}

				<WorkExperienceInputs
					values={values.work}
					handleChange={handleChange}
					handleSubmit={handleSubmit}
				/>

				{isAnyItemInField(workValues) && (
					<WorkExperienceView
						values={workValues}
						isEditorMode={isEditorMode}
						handleDelete={handleDelete}
						handleFieldEdit={handleFieldEdit}
					/>
				)}

				{isAnyItemInField(languagesValues) && (
					<LanguagesView
						values={languagesValues}
						handleDelete={handleDelete}
					/>
				)}

				<section className="bottom--row">
					<LanguagesInputs
						values={values.languages}
						handleChange={handleChange}
						handleSubmit={handleSubmit}
					/>
					<SubmitButton handleClick={handleSubmitPreview} />
				</section>
			</section>
		);
	}
}

export default EditModeView;

