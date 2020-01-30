import * as React from 'react';
import { Component, Fragment } from 'react';
import styles from "../FormularioComun/FormularioComun.module.scss";
import { TextField, Label, ChoiceGroup, IChoiceGroupOption, Dropdown, IDropdownOption, DropdownMenuItemType } from "office-ui-fabric-react";
import Days from "../Days/Days";
import { IInscripcion } from "../../../../core/entidades/IInscripcion";
import SelectPicker from "../SelectPicker/SelectPicker";
import BooleanChoiceGroup from '../../../../core/components/BooleanChoiceGroup/BooleanChoiceGroup';
import ShowPanel from "../ShowPanel/ShowPanel";

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
		const coinOption: IDropdownOption[] = [
			{ key: 'fruitsHeader', text: 'Fruits', itemType: DropdownMenuItemType.Header },
			{ key: 'apple', text: 'Apple' },
			{ key: 'banana', text: 'Banana' },
			{ key: 'orange', text: 'Orange', disabled: true },
			{ key: 'grape', text: 'Grape' },
			{ key: 'divider_1', text: '-', itemType: DropdownMenuItemType.Divider },
			{ key: 'vegetablesHeader', text: 'Vegetables', itemType: DropdownMenuItemType.Header },
			{ key: 'broccoli', text: 'Broccoli' },
			{ key: 'carrot', text: 'Carrot' },
			{ key: 'lettuce', text: 'Lettuce' }
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
								<TextField
									value={inscripcion.nombreFormacion}
									label="Nombre  de la formación"
									disabled={this.props.disabled}
									required
									onChange={this.handleTextFieldChange}
									name="nombreFormacion"
								/>
								<Label className={styles.Form_Titles_Inputs_Label} required={true}>Modalidad de cursada</Label>
								<BooleanChoiceGroup
									trueLabel="Online"
									falseLabel="Presencial"
									name="isOnline"
									value={inscripcion.isOnline}
									required={true}
									onChange={this.handleTextFieldChange}
									className={styles.Form_Titles_Inputs_Checkbox}
									disabled={this.props.disabled}
								/>
							</div>
							<div className={styles.Form_Titles_Cont_Line_Stepper}>
								<div className={styles.Form_Titles_Cont_Line_Stepper_Step}>
									<div className={styles.Form_Titles_Cont_Line_Stepper_Step_Box}>
										<div className={styles.Form_Titles_Cont_Line_Stepper_Step_Box_Text}>2</div>
									</div>
								</div>
								<div className={styles.Form_Titles_Cont_Line_Stepper_Title}>
									<div className={styles.Form_Titles_Cont_Line_Stepper_Title_Text}>Datos de la institución/Proveedor</div>
								</div>
							</div>
							<div className={styles.Form_Titles_Inputs}>
								<Label required={true}>Modalidad de cursada</Label>
								<TextField
									disabled={this.props.disabled}
									value={inscripcion.nombreLugar}
									onChange={this.handleTextFieldChange}
									label="Nombre  del lugar"
									name="nombreLugar"
									required
								/>
								<TextField
									label="Email/Sitio web "
									disabled={this.props.disabled}
									value={inscripcion.emailSitioWeb}
									onChange={this.handleTextFieldChange}
									name="emailSitioWeb"
									required
								/>
								<TextField
									disabled={this.props.disabled}
									value={inscripcion.numeroTelefono}
									onChange={this.handleTextFieldChange}
									name="numeroTelefono"
									label="Telefono "
								/>
								<ShowPanel show={!inscripcion.isOnline}>
									<TextField
										label="Lugar de realización "
										disabled={this.props.disabled}
										value={inscripcion.lugarRealizacion}
										onChange={this.handleTextFieldChange}
										name="lugarRealizacion"
										required
									/>
								</ShowPanel>
							</div>
							<div className={styles.Form_Titles_Cont_Line_Stepper}>
								<div className={styles.Form_Titles_Cont_Line_Stepper_Step}>
									<div className={styles.Form_Titles_Cont_Line_Stepper_Step_Box}>
										<div className={styles.Form_Titles_Cont_Line_Stepper_Step_Box_Text}>3</div>
									</div>
								</div>
								<div className={styles.Form_Titles_Cont_Line_Stepper_Title}>
									<div className={styles.Form_Titles_Cont_Line_Stepper_Title_Text}>Fechas</div>
								</div>
							</div>
							<div className={styles.Form_Titles_Inputs}>
								<SelectPicker />
							</div>
							<div className={styles.Form_Titles_Cont_Line_Stepper}>
								<div className={styles.Form_Titles_Cont_Line_Stepper_Step}>
									<div className={styles.Form_Titles_Cont_Line_Stepper_Step_Box}>
										<div className={styles.Form_Titles_Cont_Line_Stepper_Step_Box_Text}>4</div>
									</div>
								</div>
								<div className={styles.Form_Titles_Cont_Line_Stepper_Title}>
									<div className={styles.Form_Titles_Cont_Line_Stepper_Title_Text}>Fechas</div>
								</div>
							</div>
							<div className={styles.Form_Titles_Inputs}>
								<Days />
							</div>
							<div className={styles.Form_Time}>
								<div className={styles.Form_Time_Duration}>
									<div className={styles.Form_Time_Duration_Lapse}>
										<TextField
											label="Duracion total "
											disabled={this.props.disabled}
											required />
									</div>
									<div className={styles.Form_Time_Duration_Coin}>
										<Dropdown
											label="Moneda"
											required={true}
											disabled={this.props.disabled}
											placeholder="Inicio"
											options={coinOption} />
									</div>
									<div className={styles.Form_Time_Duration_Value}>
										<TextField label="Valor "
											disabled={this.props.disabled}
											required />
									</div>
								</div>
							</div>
							<div className={styles.Form_Titles_Cont_Line_Stepper}>
								<div className={styles.Form_Titles_Cont_Line_Stepper_Step}>
									<div className={styles.Form_Titles_Cont_Line_Stepper_Step_Box}>
										<div className={styles.Form_Titles_Cont_Line_Stepper_Step_Box_Text}>5</div>
									</div>
								</div>
								<div className={styles.Form_Titles_Cont_Line_Stepper_Title}>
									<div className={styles.Form_Titles_Cont_Line_Stepper_Title_Text}>Objetivo</div>
								</div>
							</div>
						</div>
					</div>
					<div className={styles.Form_Objetivo}>
						<div className={styles.Form_Objetivo_Container}>
							<div className={styles.Form_Objetivo_Container_Description}>
								<TextField
									multiline rows={3}
									label="Motivo por que solicitas la formación "
									disabled={this.props.disabled}
									onChange={this._onChange}
								/>
							</div>
						</div>
					</div>
				</form>
			</Fragment>);
	}

}