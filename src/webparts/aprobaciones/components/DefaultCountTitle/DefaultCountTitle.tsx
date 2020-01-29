import * as React from "react";
import { Component, Fragment } from 'react';
import styles from "../Aprobaciones.module.scss";

export default class DefaultCountTitle extends React.Component<{}, {}> {
	constructor(props) {
		super(props);
	}

	public render() {
		return (
			<Fragment>
				<div className={styles.aprobaciones_pageHeader}>
					<div className={styles.aprobaciones_pageHeader_row}>
						<div className={styles.aprobaciones_pageHeader_row_colLeft}>
							No tenés formaciones pendientes de aprobación
						</div>
						<div className={styles.aprobaciones_pageHeader_row_colRight}></div>
					</div>
				</div>
			</Fragment>

		);
	}
}