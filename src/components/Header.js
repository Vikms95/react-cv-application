import React from 'react';

class Header extends React.Component {
	render() {
		return (
			<div className="header">
				<h2 className="title">
					{' '}
                    Resu<span className="make--title">Make</span>
				</h2>
				{!this.props.isEditorMode && (
					<div className="header--buttons">
						<button onClick={this.props.toggleMode} className="edit--button--bottom">
							{' '}
                            Back to edit
						</button>

						<button onClick={this.props.createPDF} className="pdf--button--bottom">
							{' '}
                            Download PDF
						</button>
						<button onClick={this.props.printCV} className="print--button--bottom">
							{' '}
                            Print CV
						</button>
					</div>
				)}
			</div>
		);
	}
}

export default Header;
