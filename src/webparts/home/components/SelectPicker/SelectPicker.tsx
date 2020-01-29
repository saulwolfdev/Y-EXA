import * as React from 'react';
import { Dropdown, IDropdownOption } from 'office-ui-fabric-react/lib/Dropdown';
import { DatePicker, DayOfWeek, IDatePickerStrings, mergeStyleSets } from 'office-ui-fabric-react';
import styles from "./SelectPicker.module.scss";
const DayPickerStrings: IDatePickerStrings = {
	months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],

	shortMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],

	days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],

	shortDays: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],

	goToToday: 'Go to today',
	prevMonthAriaLabel: 'Go to previous month',
	nextMonthAriaLabel: 'Go to next month',
	prevYearAriaLabel: 'Go to previous year',
	nextYearAriaLabel: 'Go to next year',
	closeButtonAriaLabel: 'Close date picker'
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
							placeholder="Select a date..."
							ariaLabel="Select a date"
						/>
					</div>
					<div className={styles.Select_Container_End}>
						<DatePicker
							label="Final"
							isRequired={true}
							firstDayOfWeek={firstDayOfWeek}
							strings={DayPickerStrings}
							placeholder="Select a date..."
							ariaLabel="Select a date"
						/>
					</div>
					<div className={styles.Select_Container_Limit}>
						<DatePicker
							label="Limite"
							isRequired={true}
							firstDayOfWeek={firstDayOfWeek}
							strings={DayPickerStrings}
							placeholder="Select a date..."
							ariaLabel="Select a date"
						/>
					</div>
				</div>
			</div>
		);
	}

}
