import React from 'react';

class GeneralInfoView extends React.Component {
	formatValues() {
		return Object.values(this.props).map((value) => {
			return (
				<div key={value.name} className="general--info--element">
					<h1 className="name--view">{value.name}</h1>
					<div className="email--view">{value.email}</div>
					<div className="phone--view">{value.phone}</div>
				</div>
			);
		});
	}

	render() {
		return <section className="general--info--view">{this.formatValues()}</section>;
	}
}
export default GeneralInfoView;
