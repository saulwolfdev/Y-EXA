import * as React from 'react';
import styles from './Aprobaciones.module.scss';
import { Component, Fragment } from 'react';
import Util from "../../../core/utils/Util";
import { Icon } from 'office-ui-fabric-react/lib/Icon';
import { ICourses } from "../../../core/entidades/ICourses";
import { Dropdown, IDropdownOption } from 'office-ui-fabric-react/lib/Dropdown';
import AprobacionHeader from "./AprobacionHeader/AprobacionHeader";
import SinPendientes from "./SinPendientes/SinPendientes";
import Aprobacion from "./Aprobacion/Aprobacion";
// Iconos
const SearchIcon = () => <Icon iconName="Search" />;

// Import components
import { Recordatorio_PlazoMaximo } from '../../../core/components/EXA_Recordatorio/Recordatorio';

export interface IAprobacionesProps {

}

export interface IAprobacionesState {
	itemsCourses: Array<ICourses>;
	cardSelected: boolean;
}

export default class Aprobaciones extends React.Component<IAprobacionesProps, IAprobacionesState> {
	constructor(props) {
		super(props);
		this.state = {
			itemsCourses: [],
			cardSelected: false
		};

	}

	public componentDidMount() {
		const nuevaInstanciaObjeto = new Util();
		let itemsCourses = nuevaInstanciaObjeto.GetNamesCourses();
		this.setState({
			itemsCourses
		});

	}

	private _handleViewCard = (cardSelected: boolean) => {
		this.setState({
			cardSelected
		});
	}
	public render(): React.ReactElement<IAprobacionesProps> {
		const backgroundForm: string = require("../../../img/svg/backgroundForm.svg");
		return (
			<div className={styles.aprobaciones} style={{ backgroundImage: `url(${backgroundForm})` }}>

				<div className={styles.aprobaciones_container}>
					<AprobacionHeader
						cardSelected={this.state.cardSelected}
						onChange={this._handleViewCard}
						itemsCount={this.state.itemsCourses.length} />

					<div className={styles.aprobaciones_cards}>
						{(this.state.itemsCourses.length > 0) ? 
						this.state.itemsCourses.map(itemCourse =>
							<Aprobacion
							
								itemCourse={itemCourse}
								cardSelected={this.state.cardSelected}
							/>) : <SinPendientes />}
	
					</div>
					<div className={styles.contenedorRecordatorio}>
						<Recordatorio_PlazoMaximo />
					</div>
				</div>
			</div>
		);
	}
}
