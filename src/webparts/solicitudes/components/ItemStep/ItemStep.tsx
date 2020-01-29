import * as React from 'react';
import { Component,Fragment } from 'react';
import {ISolicitud} from "../../../../core/entidades/ISolicitud";
export interface ItemSepProps {
	itemStep:ISolicitud;
}
 
export interface ItemSepState {
	
}
 
class ItemSep extends React.Component<ItemSepProps, ItemSepState> {
	constructor(props: ItemSepProps) {
		super(props);
		this.state = {};
	}
	render() { 
		return (<Fragment>ITEMPSTEP</Fragment>);
	}
}
 
export default ItemSep;