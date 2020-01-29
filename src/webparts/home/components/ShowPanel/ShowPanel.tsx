import * as React from 'react';

interface IPanelProps {
	show: boolean;
}

class ShowPanel extends React.Component<IPanelProps, {}> {
	public render() {
		return (
			<React.Fragment>
				{ (this.props.show) ? this.props.children : undefined }
			</React.Fragment>
		);
	}
}

export default ShowPanel;