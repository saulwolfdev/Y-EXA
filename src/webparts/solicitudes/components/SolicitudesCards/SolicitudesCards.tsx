import * as React from 'react';
import { Component,Fragment } from 'react';
import styles from "../Solicitudes.module.scss";
import {ISolicitud} from "../../../../core/entidades/ISolicitud";
import {IPaso} from "../../../../core/entidades/IPaso";
import ItemCard from "../ItemCard/ItemCard";
import Stepper from "../Stepper/Stepper";
export interface SolicitudesCardsProps {
	itemsRequestCards:Array<ISolicitud>;
	itemsSteps:Array<IPaso>;
}
 
export interface SolicitudesCardsState {
	
}
 
class SolicitudesCards extends React.Component<SolicitudesCardsProps, SolicitudesCardsState> {
	constructor(props: SolicitudesCardsProps) {
		super(props);
		this.state = {};
	}
	public render() { 
		return (
		<Fragment>
				{this.props.itemsRequestCards.map(item =><ItemCard key={item.id} item={item} itemsSteps={this.props.itemsSteps} />)}
		</Fragment>);
	}
}
 
export default SolicitudesCards;