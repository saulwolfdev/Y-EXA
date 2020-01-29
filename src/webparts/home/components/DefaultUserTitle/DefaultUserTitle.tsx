import * as React from "react";
import styles from './DefaultUserTitle.module.scss';

export default class DefaultUserTitle extends React.Component<{}, {}> {
	constructor(props) {
		super(props);
	}

	public render() {
		return (
			<div className={styles.DefaultUserTitle_Row_Title}>
				<h1 className={styles.DefaultUserTitle_Row_Title_Text}>Hola Saúl,</h1>
				<p className={styles.DefaultUserTitle_Row_Title_Description}>seleccioná el tipo de formacion que necesitás realizar:</p>
			</div>
		);
	}
}