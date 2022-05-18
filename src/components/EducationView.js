import React from 'react';

function EducationView(props) {
  const formatValues = () => {
    const {
      values, isEditorMode, handleFieldEdit, toggleMode, handleDelete,
    } = props;

    return values.map((value) => (
      <div
        key={value.id}
        className={`education--element ${
          isEditorMode ? 'editor' : 'preview'
        }`}
        name="education"
      >
        <button
          type="button"
          onClick={(event) => (isEditorMode
            ? handleFieldEdit(value.id, event)
            : toggleMode())}
          className="edit--button"
        >
          {isEditorMode ? 'Edit' : 'Back to edit'}
        </button>

        {isEditorMode && (
        <button
          type="button"
          onClick={(event) => handleDelete(value.id, event)}
          className="delete--button"
        >
          {' '}
          Delete
        </button>
        )}

        <h2 className="title--view">{value.title}</h2>
        <h4 className="university--view">{value.university}</h4>

        {value.observations && (
        <div className="observations--view">{value.observations}</div>
        )}
      </div>
    ));
  };

  return <section className="education--view">{formatValues()}</section>;
}
export default EducationView;
