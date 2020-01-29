import * as React from 'react';
import styles from './Solicitudes.module.scss';
// import { ISolicitudesProps } from './ISolicitudesProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { Icon } from 'office-ui-fabric-react/lib/Icon';
import { PrimaryButton } from 'office-ui-fabric-react';
import { Dropdown, IDropdownOption } from 'office-ui-fabric-react/lib/Dropdown';
import CancelarSolicitud from './CancelarSolicitud/CancelarSolicitud';
import CargarCertificado from './CargarCertificado/CargarCertificado';
import SolicitudesTextDefault from "./SolicitudesTextDefault/SolicitudesTextDefault";
import SolicitudesDefaultLeyend from "./SolicitudesDefaultLeyend/SolicitudesDefaultLeyend";
import SolicitudesCards from "./SolicitudesCards/SolicitudesCards";
import {ISolicitud} from "../../../core/entidades/ISolicitud";
import Util from "../../../core/utils/Util";
const SearchIcon = () => <Icon iconName="Search" />;
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
export interface ISolicitudesProps {
	
}
export interface ISolicitudesState{
		itemsRequestCards:Array<ISolicitud>;
}
export default class Solicitudes extends React.Component<ISolicitudesProps,ISolicitudesState> {
	constructor(props) {
		super(props);
		this.state = {
			itemsRequestCards: [],
		};
	}
	public componentDidMount() {
		const nuevaInstanciaObjeto = new Util();
		let itemsRequestCards = nuevaInstanciaObjeto.GetSolicitud();
		this.setState({
			itemsRequestCards,
		});
	}

  public render(): React.ReactElement<ISolicitudesProps> {

    const backgroundForm:string = require("../../../img/svg/backgroundForm.svg");
    return (
      <div className={styles.solicitudes} style={{ backgroundImage: `url(${backgroundForm})` }}>
		<CancelarSolicitud />
          <CargarCertificado />
        <div className={styles.solicitudes_container}>
		    <SolicitudesTextDefault/>
          <div className={styles.solicitudes_cards}>
					{(this.state.itemsRequestCards.length==0)?
					<SolicitudesDefaultLeyend/>:
					<SolicitudesCards itemsRequestCards={this.state.itemsRequestCards}/>
					}					
				</div>
        </div>
      </div >
    );
  }
}
