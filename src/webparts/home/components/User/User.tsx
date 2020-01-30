import * as React from 'react';
import { Component } from 'react';
import { Fragment } from 'react';
import { Panel } from 'office-ui-fabric-react/lib/Panel';
import { DefaultButton, PrimaryButton } from 'office-ui-fabric-react/lib/Button';
import { TextField } from 'office-ui-fabric-react';
import styles from "./User.module.scss";

export interface UserProps {
	onSave: (newUserName: string) => void;
}
 
export interface UserState {
	isDialogVisible: boolean;
	userValue: string;
}
 
class User extends React.Component<UserProps, UserState> {
	constructor(props: UserProps) {
		super(props);
		this.state = {
			isDialogVisible: false,
			userValue: ''
		};
		this._saveDialog = this._saveDialog.bind(this);
		this._handleFormSubmit = this._handleFormSubmit.bind(this);
	}
	
	private _showDialog = (): void => {
		this.setState({ isDialogVisible: true });
	}

	private _closeDialog = (): void => {
		this.setState({ isDialogVisible: false });
	}

	private _saveDialog(): void {
		this.props.onSave(this.state.userValue);
		this._closeDialog();
	}

	private _onRenderFooterContent = () => {
		return (
			<Fragment>
				<PrimaryButton style={{ marginRight: 15 }} onClick={this._saveDialog}>Aplicar cambio</PrimaryButton>
				<DefaultButton onClick={this._closeDialog} >Cancelar</DefaultButton>
			</Fragment>
		);
	}

	private _handleUserFieldChange = (ev: React.FormEvent<HTMLInputElement>, newValue?: string) => {
		this.setState({
			userValue: newValue || ''
		});
	}

	private _handleFormSubmit(ev: React.FormEvent<HTMLFormElement>) {
		ev.preventDefault();
		this._saveDialog();
	}

	public render() {
		const { isDialogVisible } = this.state; 
		return (
		<div onClick={this._showDialog}>
				<span className={styles.User}>Solicitar para otro usuario</span>
				<Panel
					headerText="Cambiar usuario"
					isOpen={isDialogVisible}
					onDismiss={this._closeDialog}
					closeButtonAriaLabel="Close"
					className={styles.User_Panel}
					onRenderFooterContent={this._onRenderFooterContent}
					isFooterAtBottom={true}
				>
					<Fragment>
						<form  className={styles.User_SelectUser} onSubmit={ this._handleFormSubmit }>
							<TextField label="Buscar usuario " required value={this.state.userValue} onChange={ this._handleUserFieldChange } />
						</form>
					</Fragment>
				</Panel>
		</div>
		);
	}
}
 
export default User;