import * as React from 'react';
import styles from './Home.module.scss';
import { IHomeProps } from './IHomeProps';
import Util from '../../../core/utils/Util';
import Tarjetas from "./Tarjetas/Tarjetas";
import { ItemsCards } from '../../../core/entidades/ItemsCards';
import AnimacionesHome from '../../../core/components/EXA_Animaciones/AnimacionesHome';
import { Recordatorio_CertificadoPendiente } from '../../../core/components/EXA_Recordatorio/Recordatorio';

export interface IHomeState {
	itemsCards: Array<ItemsCards>;
}

export default class Home extends React.Component<IHomeProps, IHomeState> {

	public constructor(props: IHomeProps) {
		super(props);
		this.state = {
			itemsCards: [],
		};
	}

	public componentDidMount() {
		const utilNuevaInstanciaObjeto = new Util();
		let itemsCards = utilNuevaInstanciaObjeto.GetItemsCards();
		this.setState({
			itemsCards,
		});
	}

	public render() {
		return (
			<div className={styles.Home}>
				<AnimacionesHome />
				<div className={styles.Home_Container}>
					<div className={styles.Home_Row}>
						<div className={styles.Home_Row_ColLeft}>
							<Tarjetas itemsCards={this.state.itemsCards} />
						</div>
						<div className={styles.Home_Row_ColRight}>
							<div className={styles.contenedorRecordatorio}>
								<Recordatorio_CertificadoPendiente />
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}

}