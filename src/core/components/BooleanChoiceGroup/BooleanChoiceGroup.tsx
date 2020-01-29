import * as React from "react";
import { Fragment } from "react";
import { ChoiceGroup, IChoiceGroupOption } from "office-ui-fabric-react";

interface IBooleanChoiceGroupProps {
	label?: string;
	trueLabel: string;
	falseLabel: string;
	name?: string;
	value?: boolean;
	required?: boolean;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>, newValue?: boolean) => void;
	className?: string;
	disabled?: boolean;
}

interface IBooleanChoiceGroupState {
	option: boolean;
}

export default class BooleanChoiceGroup extends React.Component<IBooleanChoiceGroupProps, IBooleanChoiceGroupState>{
	constructor(props: IBooleanChoiceGroupProps) {
		super(props);
		this.state = {
			option: props.value || false
		};
	}

	public static defaultProps = {
		value: false,
		disabled: false
	};

	private _handleBooleanChoiceChange = (e: React.ChangeEvent<HTMLInputElement>, selectedOption?: IChoiceGroupOption) => {
		const option = selectedOption.key === 'true';
		if(this.props.onChange)
			this.props.onChange(e, option);
		else
			this.setState({ option });
	}

	public componentWillReceiveProps(newProps: IBooleanChoiceGroupProps) {
		if(newProps.value !== this.props.value)
			this.setState({ option: newProps.value });
	}

	public render() {
		const booleanRadioOptions: IChoiceGroupOption[] = [
			{ key: 'true', text: this.props.trueLabel },
			{ key: 'false', text: this.props.falseLabel }
		];
		return <ChoiceGroup
			options={booleanRadioOptions}
			onChange={this._handleBooleanChoiceChange}
			required={this.props.required}
			selectedKey={this.state.option.toString()}
			name={this.props.name}
			className={this.props.className}
			disabled={this.props.disabled}
		/>;
	}
}