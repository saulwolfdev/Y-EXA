import * as React from 'react';
import { Component,Fragment } from 'react';
import styles from "./FormularioExcepcion.module.scss";
export interface FormularioExcepcionProps {
	
}
 
export interface FormularioExcepcionState {
	
}
 
class FormularioExcepcion extends React.Component<FormularioExcepcionProps, FormularioExcepcionState> {
	constructor(props: FormularioExcepcionProps) {
		super(props);
		this.state = {};
	}
	public render() { 
		return (
		<Fragment>
				<h1>Formulario Excepcion</h1>
		</Fragment>);
	}
}
 
export default FormularioExcepcion;