import * as React from 'react';
import {Fragment } from 'react';
import styles from "../Aprobaciones.module.scss";
export interface SinPendientesProps {

}

const SinPendientes: React.SFC<SinPendientesProps> = () => {
	const ilustracionSinPendientesRight: string = require("../../../../img/svg/ilustracionSinPendientesRight.svg");
    const ilustracionSinPendientesLeft: string = require("../../../../img/svg/ilustracionSinPendientesLeft.svg");
	return (
		<Fragment>
			<div className={styles.aprobaciones_cards_col + ' ' + styles.sinPendientes}>
				<div className={styles.aprobaciones_cards_card}>
					<div className={styles.aprobaciones_cards_card_row}>
						<div className={styles.aprobaciones_cards_card_row_colLeft}>
							<div className={styles.aprobaciones_cards_card_ilustracion}>
								<div className={styles.aprobaciones_cards_card_aviso}>
									Felicitaciones!
                        			<img className={styles.aprobaciones_cards_card_aviso_img} alt='' src={ilustracionSinPendientesLeft} />
								</div>
							</div>
						</div>
						<div className={styles.aprobaciones_cards_card_row_colRight}>
							<img alt='' src={ilustracionSinPendientesRight} />
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default SinPendientes;