import * as React from 'react';
import { Component, Fragment } from 'react';
import styles from "../FormularioComun/FormularioComun.module.scss";
import { TextField, Dropdown, IDropdownOption } from "office-ui-fabric-react";
import { IInscripcion } from "../../../../core/entidades/IInscripcion";

export interface FormularioExcepcionProps {
	disabled?: boolean;
	inscripcion: IInscripcion;
	onFormChange?: (newValue: IInscripcion) => void;
}

export interface FormularioExcepcionState {
	multiline: boolean;
}

export default class FormularioExcepcion extends React.Component<FormularioExcepcionProps, FormularioExcepcionState> {

	constructor(props: FormularioExcepcionProps) {
		super(props);
		this.state = {
			multiline: false
		};
	}

	private _onChange = (ev: any, newText: string): void => {
		const newMultiline = newText.length > 50;
		if (newMultiline !== this.state.multiline) {
			this.setState({ multiline: newMultiline });
		}
	}

	public handleTextFieldChange = (e: React.ChangeEvent<HTMLInputElement>, textValue?: any) => {
		const newValue: IInscripcion = { ...this.props.inscripcion };
		newValue[e.target.name] = textValue;
		if (this.props.onFormChange) {
			this.props.onFormChange(newValue);
		}
	}

	public render() {

		const { inscripcion } = this.props;
		const languajeOption: IDropdownOption[] = [
			{ key: 'apple', text: 'Inglés' },
			{ key: 'banana', text: 'Portugués' },
			{ key: 'grape', text: 'Alemán' },
			{ key: 'grape', text: 'Francés' }
		];

		return (
			<Fragment>
				<form className={styles.Form}>
					<div className={styles.Form_Titles_Cont}>
						<div className={styles.Form_Titles_Cont_Line}>
							<div className={styles.Form_Titles_Cont_Line_Stepper}>
								<div className={styles.Form_Titles_Cont_Line_Stepper_Step}>
									<div className={styles.Form_Titles_Cont_Line_Stepper_Step_Box}>
										<div className={styles.Form_Titles_Cont_Line_Stepper_Step_Box_Text}>1</div>
									</div>
								</div>
								<div className={styles.Form_Titles_Cont_Line_Stepper_Title}>
									<div className={styles.Form_Titles_Cont_Line_Stepper_Title_Text}>Datos generales de la formación</div>
								</div>
							</div>
							<div className={styles.Form_Titles_Inputs}>
								<Dropdown
									label="Idioma a estudiar"
									required={true}
									disabled={this.props.disabled}
									placeholder="Seleccioná un idioma..."
									options={languajeOption}
								/>
							</div>
							<div className={styles.Form_Titles_Cont_Line_Stepper}>
								<div className={styles.Form_Titles_Cont_Line_Stepper_Step}>
									<div className={styles.Form_Titles_Cont_Line_Stepper_Step_Box}>
										<div className={styles.Form_Titles_Cont_Line_Stepper_Step_Box_Text}>2</div>
									</div>
								</div>
								<div className={styles.Form_Titles_Cont_Line_Stepper_Title}>
									<div className={styles.Form_Titles_Cont_Line_Stepper_Title_Text}>Objetivo</div>
								</div>
							</div>
							<div className={styles.Form_Titles_Inputs}>
								<div className={styles.Form_Objetivo}>
									<div className={styles.Form_Objetivo_Container}>
										<div className={styles.Form_Objetivo_Container_Description}>
											<TextField
												multiline rows={3}
												label="MOTIVO POR EL QUE SOLICITÁS LA FORMACIÓN"
												disabled={this.props.disabled}
												onChange={this._onChange}
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

				</form>
			</Fragment>);
	}

}