import * as React from 'react';
import styles from "../Solicitudes.module.scss";
import { Dropdown, IDropdownOption } from 'office-ui-fabric-react';
export interface SolicitudesTituloProps {

}
const FormSelect_OrdenarPor: React.FunctionComponent = () => {
	const options: IDropdownOption[] = [
		{ key: '1', text: 'Todas las solicitudes' },
		{ key: '2', text: 'Solicitudes en curso' },
		{ key: '3', text: 'Solicitudes aprobadas' },
		{ key: '4', text: 'Solicitudes rechazadas' }
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
const SolicitudesTitulo: React.SFC<SolicitudesTituloProps> = () => {
	return (
		<div className={styles.solicitudes_pageHeader}>
			<div className={styles.solicitudes_pageHeader_row}>
				<div className={styles.solicitudes_pageHeader_row_colLeft}>
					Consultá tus solicitudes actuales e históricas:
              </div>
				<div className={styles.solicitudes_pageHeader_row_colRight}>
					<div className={styles.solicitudes_pageHeader_visualizacion}>
						<div className={styles.solicitudes_pageHeader_visualizacion_col}>
							Visualizar
                  </div>
						<div className={styles.solicitudes_pageHeader_visualizacion_col}>
							<FormSelect_OrdenarPor />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SolicitudesTitulo;