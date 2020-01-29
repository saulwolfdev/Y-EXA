import * as React from 'react';
import { Component,Fragment } from 'react';
import styles from "../Solicitudes.module.scss";
import {ISolicitud} from "../../../../core/entidades/ISolicitud";
import ItemCard from "../ItemCard/ItemCard";
import Stepper from "../Stepper/Stepper";
export interface SolicitudesCardsProps {
	itemsRequestCards:Array<ISolicitud>;
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
				{this.props.itemsRequestCards.map(item =><ItemCard item={item} />)}
		</Fragment>);
	}
}
 
export default SolicitudesCards;