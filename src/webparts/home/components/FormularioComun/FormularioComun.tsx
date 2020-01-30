import * as React from "react";
import { Fragment } from "react";
import styles from "./FormularioComun.module.scss";
import { TextField, Label, ChoiceGroup, IChoiceGroupOption, Dropdown, IDropdownOption, DropdownMenuItemType } from "office-ui-fabric-react";
import Days from "../Days/Days";
import { IInscripcion } from "../../../../core/entidades/IInscripcion";
import SelectPicker from "../SelectPicker/SelectPicker";
import BooleanChoiceGroup from '../../../../core/components/BooleanChoiceGroup/BooleanChoiceGroup';
import ShowPanel from "../ShowPanel/ShowPanel";

export interface FormularioComunProps {
	disabled?: boolean;
	inscripcion: IInscripcion;
	onFormChange?: (newValue: IInscripcion) => void;
}

export interface FormularioComunState {
	multiline: boolean;
}

export default class FormularioComun extends React.Component<FormularioComunProps, FormularioComunState> {
	constructor(props: FormularioComunProps) {
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
			{ key: 'pesos', text: 'Pesos' },
			{ key: 'dolares', text: 'Dólares' },
			{ key: 'euros', text: 'Euros' },
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
									label="Nombre de la formación"
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
									<div className={styles.Form_Titles_Cont_Line_Stepper_Title_Text}>Datos de la institución / proveedor</div>
								</div>
							</div>
							<div className={styles.Form_Titles_Inputs}>
								<TextField
									disabled={this.props.disabled}
									value={inscripcion.nombreLugar}
									onChange={this.handleTextFieldChange}
									label="Nombre de la institución / proveedor"
									name="nombreLugar"
									required
								/>
								<TextField
									label="Email / Sitio web "
									disabled={this.props.disabled}
									value={inscripcion.emailSitioWeb}
									onChange={this.handleTextFieldChange}
									name="emailSitioWeb"
									required
								/>
								<TextField
									label="Teléfono"
									disabled={this.props.disabled}
									value={inscripcion.numeroTelefono}
									onChange={this.handleTextFieldChange}
									name="numeroTelefono"
								/>
								<ShowPanel show={!inscripcion.isOnline}>
									<TextField
										label="Lugar de realización"
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
									<div className={styles.Form_Titles_Cont_Line_Stepper_Title_Text}>Cursada, duración y costo</div>
								</div>
							</div>
							<div className={styles.Form_Titles_Inputs}>
								<Label className={styles.Form_Titles_Inputs_Label} required={true}>Días y horarios de cursada</Label>
								<Days />
								<div className={styles.Form_Time}>
									<div className={styles.Form_Time_Duration}>
										<div className={styles.Form_Time_Duration_Lapse}>
											<TextField
												label="Duracion total"
												disabled={this.props.disabled}
												placeholder="Cantidad de horas"
												required />
										</div>
										<div className={styles.Form_Time_Duration_Coin}>
											<Dropdown
												label="Moneda"
												required={true}
												disabled={this.props.disabled}
												placeholder="Seleccioná una moneda..."
												options={coinOption} />
										</div>
										<div className={styles.Form_Time_Duration_Value}>
											<TextField
												label="Valor"
												disabled={this.props.disabled}
												placeholder="Precio sin descuentos"
												required />
										</div>
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