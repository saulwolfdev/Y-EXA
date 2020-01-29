
import * as React from 'react';
import styles from './AprobarFormacion.module.scss';
import FormularioComun from '../../home/components/FormularioComun/FormularioComun';
import { IInscripcion } from '../../../core/entidades/IInscripcion';
import { PrimaryButton } from 'office-ui-fabric-react';
import Util from '../../../core/utils/Util';

export interface AprobarFormacionProps {

}

export interface AprobarFormacionState {
	inscripcion: IInscripcion;
}

class AprobarFormacion extends React.Component<AprobarFormacionProps, AprobarFormacionState> {
	constructor(props: AprobarFormacionProps) {
		super(props);
		this.state = {
			inscripcion: { isOnline: false }
		};
	}

	public componentDidMount() {
		const utilDaysInstanciaObjeto = new Util();
		this.setState({
			inscripcion: utilDaysInstanciaObjeto.GetInscripcion()
		});
	}

	public render() {

		const backgroundForm: string = require("../../../img/svg/backgroundForm.svg");

		const test: string = require("../../../img/svg/calendarGreen.svg");

		return (
			<div className={styles.aprobarFormacion} style={{ backgroundImage: `url(${backgroundForm})` }}>
				<div className={styles.aprobarFormacion_container}>

					{/* INICIO ENCABEZADO DE LA PAGINA */}
					<div className={styles.aprobarFormacion_pageHeader}>
						<div className={styles.aprobarFormacion_pageHeader_row}>
							<div className={styles.aprobarFormacion_pageHeader_row_colLeft}>
								Detalle de la formación solicitada:
              				</div>
						</div>
					</div>
					{/* FIN ENCABEZADO DE LA PAGINA */}
					{/* INICIO CONTENEDOR DE TARJETAS */}
					<div className={styles.aprobarFormacion_cards}>
						{/* INICIO CARD */}
						<div className={styles.aprobarFormacion_cards_col}>
							<div className={styles.aprobarFormacion_cards_card}>
								<div className={styles.aprobarFormacion_cards_card_row}>
									<div className={styles.aprobarFormacion_cards_card_row_colRight}>
										<PrimaryButton
											text="Aprobar"
											className={styles.aprobarFormacion_cards_card_buttonGreen}
										/>
										<PrimaryButton
											text="Rechazar"
											className={styles.aprobarFormacion_cards_card_buttonRed}
										/>
										<PrimaryButton
											text="Cancelar"
											className={styles.aprobarFormacion_cards_card_buttonGrey}
										/>

										<div className={styles.aprobarFormacion_cards_card_diasRestantes + ' ' + styles.warning}>
											<div className={styles.aprobarFormacion_cards_card_diasRestantes_calendar}>
												1
											</div>
											<div className={styles.aprobarFormacion_cards_card_diasRestantes_texto}>
												Día restante
                  							</div>
										</div>

									</div>
									<div className={styles.aprobarFormacion_cards_card_row_colLeft}>
										<div className={styles.aprobarFormacion_cards_card_nombreFormacion}>Master en Dirección de Marketing</div>
										<div className={styles.aprobarFormacion_cards_card_proveedorFormacion}>Universidad del Salvador</div>
										<div className={styles.aprobarFormacion_cards_card_usuario}>
											<div className={styles.aprobarFormacion_cards_card_usuario_nombre}>Martín Horacio García Begher</div>
											<div className={styles.aprobarFormacion_cards_card_usuario_id}>SE21626</div>
										</div>
										<div className={styles.aprobarFormacion_cards_card_puesto}>Diseñador UX, Senior</div>
										<div className={styles.aprobarFormacion_cards_card_empresa}>YPF S.A.</div>
										<div className={styles.aprobarFormacion_cards_card_separacion}></div>
										<div className={styles.aprobarFormacion_cards_card_detalleSolicitud}>
											<FormularioComun inscripcion={this.state.inscripcion} disabled={true} />
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* FIN CARD */}
					</div>
					{/* FIN CONTENEDOR DE TARJETAS */}

				</div>
			</div>
		);
	}
}
export default AprobarFormacion;
