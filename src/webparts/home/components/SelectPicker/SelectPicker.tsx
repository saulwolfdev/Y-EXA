import * as React from 'react';
import { DatePicker, DayOfWeek, IDatePickerStrings, mergeStyleSets } from 'office-ui-fabric-react';
import styles from "./SelectPicker.module.scss";
const DayPickerStrings: IDatePickerStrings = {
	months: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],

	shortMonths: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],

	days: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],

	shortDays: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],

	goToToday: 'Ir al día de hoy',
	prevMonthAriaLabel: 'Ir al mes anterior',
	nextMonthAriaLabel: 'Ir al mes siguiente',
	prevYearAriaLabel: 'Ir al año anterior',
	nextYearAriaLabel: 'Ir al año siguiente',
	closeButtonAriaLabel: 'Cerrar'
};

export interface ISelectPickerState {
	firstDayOfWeek?: DayOfWeek;
}

export default class SelectPicker extends React.Component<{}, ISelectPickerState> {
	public constructor(props: {}) {
		super(props);

		this.state = {
			firstDayOfWeek: DayOfWeek.Sunday
		};
	}

	public render() {
		const { firstDayOfWeek } = this.state;

		return (
			<div className={styles.Select}>
				<div className={styles.Select_Container}>
					<div className={styles.Select_Container_Start}>
						<DatePicker
							label="Inicio"
							isRequired={true}
							firstDayOfWeek={firstDayOfWeek}
							strings={DayPickerStrings}
							placeholder="Seleccioná una fecha..."
							ariaLabel="Seleccioná una fecha"
						/>
					</div>
					<div className={styles.Select_Container_End}>
						<DatePicker
							label="Finalización"
							isRequired={true}
							firstDayOfWeek={firstDayOfWeek}
							strings={DayPickerStrings}
							placeholder="Seleccioná una fecha..."
							ariaLabel="Seleccioná una fecha"
						/>
					</div>
					<div className={styles.Select_Container_Limit}>
						<DatePicker
							label="Límite de inscripción"
							isRequired={true}
							firstDayOfWeek={firstDayOfWeek}
							strings={DayPickerStrings}
							placeholder="Seleccioná una fecha..."
							ariaLabel="Seleccioná una fecha"
						/>
					</div>
				</div>
			</div>
		);
	}

}
