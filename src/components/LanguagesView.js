import React from 'react';

class LanguagesView extends React.Component {
	formatValues() {
		return this.props.values.map((value) => {
			return (
				<div key={value.id} className="languages--element">
					<h4 className="language--view">{value.language}</h4>
					<div>{value.proficiency}</div>
					{value.observations && <div>{value.observations}</div>}
				</div>
			);
		});
	}

	render() {
		return <section className="languages--view">{this.formatValues()}</section>;
	}
}
export default LanguagesView;
