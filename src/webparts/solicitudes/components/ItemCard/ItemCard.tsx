import * as React from 'react';
import { Component, Fragment } from 'react';
import { ISolicitud } from "../../../../core/entidades/ISolicitud";
import { IPaso } from "../../../../core/entidades/IPaso";
import { IEstado } from "../../../../core/entidades/IEstado";
import { Icon } from 'office-ui-fabric-react/lib/Icon';
import { PrimaryButton } from 'office-ui-fabric-react';
// Iconos
const SearchIcon = () => <Icon iconName="Search" />;
import styles from "../Solicitudes.module.scss";
import Stepper from "../Stepper/Stepper";
import CancelarSolicitud from '../CancelarSolicitud/CancelarSolicitud';
import CargarCertificado from '../CargarCertificado/CargarCertificado';
import ShowPanel from '../../../home/components/ShowPanel/ShowPanel';
export interface ItemCardProps {
	item: ISolicitud;
	itemsSteps: Array<IPaso>;
}

export interface ItemCardState {

}

class ItemCard extends React.Component<ItemCardProps, ItemCardState> {
	constructor(props: ItemCardProps) {
		super(props);
		this.state = {};
	}

	private getEstadoActual = (): IEstado => {
		// const estados = [...this.props.item.estadosFlujo];
		// let ultimoEstado = estados.pop();
		// while(ultimoEstado.estado === ' ') {
		// 	ultimoEstado = estados.pop();
		// }
		// return ultimoEstado;

		return this.props.item.estadosFlujo
			.filter(estado => estado.estado !== ' ').pop();
	}

	private shouldLoadCertificate = (): boolean => {
		const ultimoEstado = this.props.item.estadosFlujo[this.props.item.estadosFlujo.length - 2];
		return this.getEstadoActual().id === ultimoEstado.id && ultimoEstado.estado === 'Aprobado';
	}

	public render() {
		const { courses, place, userId, userName } = this.props.item;
		const estadoActual = this.getEstadoActual();
		return (<Fragment>
			<div className={styles.solicitudes_cards_col}>
				<div className={styles.solicitudes_cards_card}>
					<div className={styles.solicitudes_cards_card_row}>
						<div className={styles.solicitudes_cards_card_row_colLeft}>
							<div className={styles.solicitudes_cards_card_nombreFormacion}>{courses}</div>
							<div className={styles.solicitudes_cards_card_proveedorFormacion}>{place}</div>
							<div className={styles.solicitudes_cards_card_links}>
								<div className={styles.solicitudes_cards_card_links_link}>Ver detalle de la solicitud</div>
								<ShowPanel show={estadoActual.cancelable}>
									<div className={styles.solicitudes_cards_card_links_linkAlert}>
										<CancelarSolicitud />
									</div>
								</ShowPanel>
							</div>
						</div>
						<div className={styles.solicitudes_cards_card_row_colRight}>
							<div className={styles.solicitudes_cards_card_usuario}>
								<div className={styles.solicitudes_cards_card_usuario_nombre}>{userName}</div>
								<div className={styles.solicitudes_cards_card_usuario_id}>{userId}</div>
								<ShowPanel show={this.shouldLoadCertificate()}>
									<CargarCertificado />
								</ShowPanel>

							</div>
						</div>
					</div>
					<div className={styles.solicitudes_cards_card_stepper}>
						<Stepper
							step={this.props.item.estadosFlujo}
							itemsSteps={this.props.itemsSteps}
						/>
					</div>
				</div>
			</div>
		</Fragment>);
	}
}

export default ItemCard;