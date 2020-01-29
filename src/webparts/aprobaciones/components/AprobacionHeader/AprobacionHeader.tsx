import * as React from 'react';
import { Fragment } from 'react';
import styles from "../Aprobaciones.module.scss";
import { Dropdown, IDropdownOption } from 'office-ui-fabric-react/lib/Dropdown';
import DefaultCountTitle from "../DefaultCountTitle/DefaultCountTitle";

export interface AprobacionHeaderProps {
	itemsCount: number;
	cardSelected: boolean;
	onChange: (cardSelected: boolean) => void;
}
const FormSelect_OrdenarPor: React.FunctionComponent = () => {


	const options: IDropdownOption[] = [
		{ key: '1', text: 'Tiempo restante' },
		{ key: '2', text: 'ID usuario' },
		{ key: '3', text: 'Nombre de formación' },
		{ key: '4', text: 'Nombre de institución' }
	];
	return (
		<Dropdown
			placeholder=""
			label=""
			defaultSelectedKey="1"
			options={options}
		/>
	);
};

export interface AprobacionHeaderProps {
	itemsCount: number;
	cardSelected: boolean;
	onChange: (cardSelected: boolean) => void;
}

export interface AprobacionHeaderState {

}

class AprobacionHeader extends React.Component<AprobacionHeaderProps, AprobacionHeaderState> {
	constructor(props: AprobacionHeaderProps) {
		super(props);
		this.state = {};
	}
	public render() {
		const vistaCardsOff: string = require("../../../../img/svg/vistaCardsOff.svg");
		const vistaRowsOn: string = require("../../../../img/svg/vistaRowsOn.svg");
		const vistaCardsOn: string = require("../../../../img/svg/vistaCardsOn.svg");
		const vistaRowsOff: string = require("../../../../img/svg/vistaRowsOff.svg");

		const setCardOff = () => this.props.onChange(false);
		const setCardOn = () => this.props.onChange(true);
	
		const CustomCountTitle=	<div className={styles.aprobaciones_pageHeader}>
					<div className={styles.aprobaciones_pageHeader_row}>
						<div className={styles.aprobaciones_pageHeader_row_colLeft}>
							Tenés <div className={styles.aprobaciones_pageHeader_aprobacionesPendientes}>{this.props.itemsCount}</div> formaciones pendientes de aprobación:
						</div>
						<div className={styles.aprobaciones_pageHeader_row_colRight}>
							<div className={styles.aprobaciones_pageHeader_visualizacion}>
								<div className={styles.aprobaciones_pageHeader_visualizacion_col}>
									<div className={styles.aprobaciones_pageHeader_visualizacion_texto}>Ordenar por</div>
								</div>
								<div className={styles.aprobaciones_pageHeader_visualizacion_col}>
									<div className={styles.aprobaciones_pageHeader_visualizacion_select}><FormSelect_OrdenarPor /></div>
								</div>
								<div className={styles.aprobaciones_pageHeader_visualizacion_col}>
									<div className={styles.aprobaciones_pageHeader_visualizacion_separacion}></div>
								</div>
								<div className={styles.aprobaciones_pageHeader_visualizacion_col}>
									<div
										onClick={setCardOff}
										className={styles.aprobaciones_pageHeader_visualizacion_rows}
										style={{ backgroundImage: `url(${(!this.props.cardSelected) ? vistaRowsOn : vistaRowsOff})` }}></div>
								</div>
								<div className={styles.aprobaciones_pageHeader_visualizacion_col}>
									<div
										onClick={setCardOn}
										className={styles.aprobaciones_pageHeader_visualizacion_cards}
										style={{ backgroundImage: `url(${(this.props.cardSelected) ? vistaCardsOn : vistaCardsOff})` }}>
									</div>
								</div>


							</div>
						</div>
					</div>
				</div>;
		return (

			<Fragment>
				{(this.props.itemsCount === 0) ? <DefaultCountTitle />:CustomCountTitle}
			</Fragment>

		);
	}
}

export default AprobacionHeader;