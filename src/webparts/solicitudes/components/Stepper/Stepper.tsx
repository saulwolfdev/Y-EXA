import * as React from 'react';
import { Component, Fragment } from 'react';
import styles from "../Solicitudes.module.scss";
import { IEstado } from '../../../../core/entidades/IEstado';
import { IPaso } from '../../../../core/entidades/IPaso';
import ShowPanel from '../../../home/components/ShowPanel/ShowPanel';
export interface StepperProps {
	step: Array<IEstado>;
	itemsSteps:Array<IPaso>;
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
			{this.props.step.map(item => {
				const estado = this.props.itemsSteps.filter((step: IPaso) => step.titulo === item.estado)[0];
				return (<div key={item.id} className={styles.solicitudes_cards_card_stepper_step}>
					<div className={styles.marcador}>
						<div className={styles.marcador_bullet} style={{backgroundColor: estado.color}}></div>
						<div className={styles.marcador_raya}></div>
					</div>
					<div className={styles.etiqueta}>{item.titulo}</div>
					<div className={styles.estado}>
					<ShowPanel show={!(item.estado===" ")}>
						<div className={styles.estado_fecha}>
								{item.fechaAprobacion.toLocaleDateString()}
						</div>
					</ShowPanel>
					{/* {(!(item.estado===" ")?item.fechaAprobacion.toLocaleDateString():"")} */}

						<div className={styles.estado_nombre} style={{color:estado.color}}>{item.estado}</div>
					</div>
				</div>);
			})}
		</Fragment>);
	}
}

export default Stepper;