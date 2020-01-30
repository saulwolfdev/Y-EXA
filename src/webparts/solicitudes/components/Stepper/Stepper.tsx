import * as React from 'react';
import { Component, Fragment } from 'react';
import styles from "../Solicitudes.module.scss";
import { IEstado } from '../../../../core/entidades/IEstado';
import { IPaso } from '../../../../core/entidades/IPaso';
import { Icon } from 'office-ui-fabric-react/lib/Icon';
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
		const SearchIcon = () => <Icon iconName="Search" />;
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
					<ShowPanel show={ ['Rechazado', 'Cancelado', 'Finalizado'].indexOf(item.estado) !== -1
										/*item.estado === "Rechazado" || item.estado === "Cancelado" || item.estado === "Finalizado"*/ }>
						<div className={styles.estado_ver}>
							<div className={styles.estado_ver_text}>
								Ver
							</div>
							<div className={styles.estado_ver_icon}>
								<SearchIcon />
							</div>
						</div>
					</ShowPanel>
					</div>
				</div>);
			})}
		</Fragment>);
	}
}

export default Stepper;