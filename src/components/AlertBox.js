import React from 'react';

function ProfilePhotoInput(props) {
  const { isRequiredFieldsValid, toggleMode, removeAlertBox } = props;
  return (
    <div className="alert--box">
      {isRequiredFieldsValid()
        ? (
          <section>
            <div className="alert--box--text">
              Not all the CV fields are filled with your information. Are you sure you
              want to proceed with the preview?
            </div>

            <div className="alert--box--buttons">
              <button type="button" onClick={toggleMode} className="alert--box--button">
                {' '}
                Proceed
                {' '}
              </button>

              <button
                type="button"
                onClick={removeAlertBox}
                className="alert--box--button"
              >
                {' '}
                Back to editing
                {' '}
              </button>
            </div>
          </section>
        )
        : (
          <section>
            <div className="alert--box--text">
              Please fill
              {' '}
              <span className="alert--highlight">name</span>
              ,
              <span className="alert--highlight"> email</span>
              {' '}
              and
              <span className="alert--highlight"> phone</span>
              {' '}
              fields in order to
              proceed.
            </div>
          </section>
        )}
    </div>
  );
}

export default ProfilePhotoInput;
