import React from 'react';

class LanguagesView extends React.Component {
  formatValues() {
    const { values } = this.props;
    return values.map((value) => (
      <div key={value.id} className="languages--element">
        <h4 className="language--view">{value.language}</h4>
        <div>{value.proficiency}</div>
        {value.observations && <div>{value.observations}</div>}
      </div>
    ));
  }

  render() {
    return <section className="languages--view">{this.formatValues()}</section>;
  }
}
export default LanguagesView;
