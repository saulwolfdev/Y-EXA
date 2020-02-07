import * as React from 'react';
import { Component } from 'react';
import styles from "../Solicitudes.module.scss";
import {ISolicitud} from "../../../../core/entidades/ISolicitud";
import AnimacionSinSolicitudes from "../../../../core/components/EXA_Animaciones/AnimacionSinSolicitudes";
export interface SolicitudesDefaultLeyendProps {

}

const SolicitudesDefaultLeyend: React.SFC<SolicitudesDefaultLeyendProps> = () => {

	// const ilustracionSinSolicitudes: string = require("../../../../img/svg/ilustracionSinSolicitudes.svg");
	return (
		<div className={styles.solicitudes_cards_col + ' ' + styles.sinSolicitudes}>
			<div className={styles.solicitudes_cards_card}>
				<div className={styles.solicitudes_cards_card_row}>
					<div className={styles.solicitudes_cards_card_row_colLeft}>
						<div className={styles.solicitudes_cards_card_aviso}>
							No encontramos solicitudes!
                    </div>
					</div>
					<div className={styles.solicitudes_cards_card_row_colRight}>
						<div className={styles.solicitudes_cards_card_ilustracion}>
							{/* <img alt='' src={ilustracionSinSolicitudes} /> */}
							<AnimacionSinSolicitudes/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SolicitudesDefaultLeyend;