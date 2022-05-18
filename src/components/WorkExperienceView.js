import React from 'react';

function WorkExperienceView(props) {
  const formatValues = () => {
    const {
      values, isEditorMode, handleFieldEdit, handleDelete, toggleMode,
    } = props;

    return values.map((value) => (
      <div
        key={value.id}
        className={`work--element ${isEditorMode ? 'editor' : 'preview'}`}
        name="work"
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
          Delete
        </button>
        )}

        <h2 className="place--view">{value.place}</h2>
        <h4 className="company--view">{value.company}</h4>

        {value.observations && (
        <div className="observations--view">{value.observations}</div>
        )}
      </div>
    ));
  };

  return <section className="work--view">{formatValues()}</section>;
}
export default WorkExperienceView;
