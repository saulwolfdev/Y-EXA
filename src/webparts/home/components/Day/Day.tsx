import * as React from 'react';
import { Fragment } from "react";
import { IDay } from "../../../../core/entidades/IDay";
import { Checkbox, Dropdown, IDropdownOption } from "office-ui-fabric-react";
import ShowPanel from "../ShowPanel/ShowPanel";
import styles from "./Day.module.scss";

export interface IDayProps {
	itemDay: IDay;
}

export interface IDayState {
	isCheckboxSelected: boolean;
}

class Day extends React.Component<IDayProps, IDayState> {
	constructor(props: IDayProps) {
		super(props);
		this.state = {
			isCheckboxSelected: false
		};
		this.handleCheckBoxChange = this.handleCheckBoxChange.bind(this);
	}

	public handleCheckBoxChange(ev: React.FormEvent<HTMLElement>, checked: boolean): void {
		this.setState({
			isCheckboxSelected: checked
		});
	}

	public render() {
		const hours: IDropdownOption[] = [
			{ key: "00:00", text: "00:00" },
			{ key: "00:30", text: "00:30" },
			{ key: "01:00", text: "01:00" },
			{ key: "01:30", text: "01:30" },
			{ key: "02:00", text: "02:00" },
			{ key: "02:30", text: "02:30" },
			{ key: "03:00", text: "03:00" },
			{ key: "03:30", text: "03:30" },
			{ key: "04:00", text: "04:00" },
			{ key: "04:30", text: "04:30" },
			{ key: "05:00", text: "05:00" },
			{ key: "05:30", text: "05:30" },
			{ key: "06:00", text: "06:00" },
			{ key: "06:30", text: "06:30" },
			{ key: "07:00", text: "07:00" },
			{ key: "07:30", text: "07:30" },
			{ key: "08:00", text: "08:00" },
			{ key: "08:30", text: "08:30" },
			{ key: "09:00", text: "09:00" },
			{ key: "09:30", text: "09:30" },
			{ key: "10:00", text: "10:00" },
			{ key: "10:30", text: "10:30" },
			{ key: "11:00", text: "11:00" },
			{ key: "11:30", text: "11:30" },
			{ key: "12:00", text: "12:00" },
			{ key: "12:30", text: "12:30" },
			{ key: "13:00", text: "13:00" },
			{ key: "13:30", text: "13:30" },
			{ key: "14:00", text: "14:00" },
			{ key: "14:30", text: "14:30" },
			{ key: "15:00", text: "15:00" },
			{ key: "15:30", text: "15:30" },
			{ key: "16:00", text: "16:00" },
			{ key: "16:30", text: "16:30" },
			{ key: "17:00", text: "17:00" },
			{ key: "17:30", text: "17:30" },
			{ key: "18:00", text: "18:00" },
			{ key: "18:30", text: "18:30" },
			{ key: "19:00", text: "19:00" },
			{ key: "19:30", text: "19:30" },
			{ key: "20:00", text: "20:00" },
			{ key: "20:30", text: "20:30" },
			{ key: "21:00", text: "21:00" },
			{ key: "21:30", text: "21:30" },
			{ key: "22:00", text: "22:00" },
			{ key: "22:30", text: "22:30" },
			{ key: "23:00", text: "23:00" },
			{ key: "23:30", text: "23:30" }
		];
		const { day } = this.props.itemDay;
		return (
			<Fragment>
				<div className={styles.Checkbox}>
					<div className={styles.Checkbox_Inputs}>
						<div className={styles.Checkbox_Inputs_CheckBox_Container}>
							<div className={styles.Checkbox_Inputs_CheckBox_Container_CheckBox}>
								<Checkbox label={day}
									checked={this.state.isCheckboxSelected}
									onChange={this.handleCheckBoxChange}
								/>
							</div>
							<div className={styles.Checkbox_Inputs_CheckBox_Container_DropBox}>
								<ShowPanel show={this.state.isCheckboxSelected}>
									<div className={styles.Checkbox_Inputs_CheckBox_Container_DropBox_Drop}>
										<Dropdown placeholder="Hora inicio" options={hours} />
									</div>
									<div className={styles.Checkbox_Inputs_CheckBox_Container_DropBox_Drop}>
										<Dropdown placeholder="Hora fin" options={hours} />
									</div>
								</ShowPanel>
							</div>
						</div>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default Day; 