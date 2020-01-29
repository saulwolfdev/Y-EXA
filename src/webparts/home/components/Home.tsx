import * as React from 'react';
import styles from './Home.module.scss';
import { IHomeProps } from './IHomeProps';
import { PanelType } from 'office-ui-fabric-react';
import { Form } from '@pnp/sp/src/forms';
import Util from '../../../core/utils/Util';
import Tarjetas from "./Tarjetas/Tarjetas";
import { ItemsCards } from '../../../core/entidades/ItemsCards';
import { Recordatorio_CertificadoPendiente } from '../../../core/components/EXA_Recordatorio/Recordatorio';

export interface IHomeState {
	itemsCards: Array<ItemsCards>;
}

class Home extends React.Component<IHomeProps, IHomeState> {
	constructor(props) {
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

		const backgroundHome: string = require("../../../img/svg/backgroundHome.svg");

		return (

			<div className={styles.Home} style={{ backgroundImage: `url(${backgroundHome})` }}>
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

export default Home;