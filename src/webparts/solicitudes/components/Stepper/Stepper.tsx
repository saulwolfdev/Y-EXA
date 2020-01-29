import * as React from 'react';
import { Component, Fragment } from 'react';
import styles from "../Solicitudes.module.scss";
import { IEstado } from '../../../../core/entidades/IEstado';

export interface StepperProps {
	step: Array<IEstado>;
}

export interface StepperState {

}

class Stepper extends React.Component<StepperProps, StepperState> {
	constructor(props: StepperProps) {
		super(props);
		this.state = {};
	}

	public render() {

		return (<Fragment>

			{this.props.step.map(item =>
			
			<div key={item.id} className={styles.solicitudes_cards_card_stepper_step + ' ' + styles.iniciado}>
					<div className={styles.marcador}>
						<div className={styles.marcador_bullet}></div>
						<div className={styles.marcador_raya}></div>
					</div>
					<div className={styles.etiqueta}>{item.titulo}</div>
					<div className={styles.estado}>
						<div className={styles.estado_fecha}>{item.fechaAprobacion.toLocaleDateString()}</div>
						<div className={styles.estado_nombre}>{item.aprobado}</div>
					</div>
				</div>
				)}
		</Fragment>);
	}
}

export default Stepper;