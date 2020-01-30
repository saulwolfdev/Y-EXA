import * as React from 'react';
import { Fragment } from "react";
import { IDay } from "../../../../core/entidades/IDay";
import Day from '../Day/Day';
import Util from "../../../../core/utils/Util";

export interface IDayProps {
}

export interface IDayState {
	days: Array<IDay>;
}

class Days extends React.Component<IDayProps, IDayState> {
	constructor(props: IDayProps) {
		super(props);
		this.state = {
			days: []
		};
	}

	public componentDidMount() {
		const utilDaysInstanciaObjeto = new Util();
		this.setState({
			days: utilDaysInstanciaObjeto.GetDaysNames()
		});
	}

	public render() {
		return (
			<Fragment>
				{
					this.state.days.map(day => <Fragment key={day.id}><Day itemDay={day} /></Fragment>)
				}
			</Fragment>
		);
	}
}

export default Days; 