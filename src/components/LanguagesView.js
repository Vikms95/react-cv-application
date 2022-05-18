import React from 'react';

function LanguagesView(props) {
  const formatValues = () => {
    const { values } = props;
    return values.map((value) => (
      <div key={value.id} className="languages--element">
        <h4 className="language--view">{value.language}</h4>
        <div>{value.proficiency}</div>
        {value.observations && <div>{value.observations}</div>}
      </div>
    ));
  };

  return <section className="languages--view">{formatValues()}</section>;
}
export default LanguagesView;
