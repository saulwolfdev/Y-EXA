import * as React from "react";
import { Fragment } from 'react';
import { ItemsCards } from "../../../../core/entidades/ItemsCards";
import FormularioComun from "../FormularioComun/FormularioComun";
import FormularioExcepcion from "../FormularioExcepcion/FormularioExcepcion";
import { TextField, Label, Checkbox } from "office-ui-fabric-react";
import { Panel } from 'office-ui-fabric-react/lib/Panel';
import uuid from 'react-uuid';
import { IInscripcion } from "../../../../core/entidades/IInscripcion";
// import styles from "./Tarjeta.module.scss";
export interface CardProps {
	item: ItemsCards;
	inscripcion:IInscripcion;
	onFormChange: (newValue: IInscripcion) => void;
}

export interface CardState {
	
}

class Card extends React.Component<CardProps, CardState> {
	constructor(props: CardProps) {
		super(props);
		this.state = {
		
		};
	}
	public render() {
		const { category } = this.props.item;
		let formulario = (category === "Idiomas") ? <FormularioExcepcion /> : 
		<FormularioComun 
		onFormChange={this.props.onFormChange}
		inscripcion={this.props.inscripcion}/>;
		return (
			<Fragment>
				{formulario}
			</Fragment>
		);
	}
}

export default Card;
