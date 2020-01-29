import * as React from "react";
import styles from './CustomUserTitle.module.scss';

interface ICustomUserTitleProps {
	user: string;
}

export default class CustomUserTitle extends React.Component<ICustomUserTitleProps, {}> {
	constructor(props) {
		super(props);
	}

	public render() {
		return (
			<div className={styles.CustomUserTitle_Row_Title}>
				<p className={styles.CustomUserTitle_Row_Title_Description}>Seleccioná el tipo de formacion que necesita realizar</p>
				<p className={styles.CustomUserTitle_Row_Title_Text}>
					<span className={styles.CustomUserTitle_Row_Title_Text_Strong}>{this.props.user}</span> (SE17865):
				</p>
			</div>
		);
	}
}