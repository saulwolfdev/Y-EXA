import * as React from "react";
import { Fragment } from 'react';
import { ItemsCards } from "../../../../core/entidades/ItemsCards";
import { Panel } from 'office-ui-fabric-react/lib/Panel';
import { DefaultButton, PrimaryButton } from 'office-ui-fabric-react/lib/Button';
import { useConstCallback } from '@uifabric/react-hooks';
import Card from "../Card/Card";
import uuid from 'react-uuid';
import styles from "./Tarjeta.module.scss";
import { OnChangeCallback } from "office-ui-fabric-react";
import { IInscripcion } from "../../../../core/entidades/IInscripcion";
export interface ITarjetaProps {
	itemCard: ItemsCards;
}

export interface ITarjetaState {
	isDialogVisible: boolean;
	inscripcion: IInscripcion;
}

export default class Tarjeta extends React.Component<ITarjetaProps, ITarjetaState> {
	constructor(props: ITarjetaProps) {
		super(props);
		this.state = {
			isDialogVisible: false,
			inscripcion: { isOnline: false }
		};
	}
	private _showDialog = (): void => {
		this.setState({ isDialogVisible: true });
	}

	private _closeDialog = (): void => {
		this.setState({ isDialogVisible: false });
	}

	private _onRenderFooterContent = () => {
		return (
			<Fragment>
				<PrimaryButton onClick={this.saveDialog}>Save</PrimaryButton>
				<DefaultButton style={{ marginLeft: 15 }} onClick={this._closeDialog}>Cancel</DefaultButton>
			</Fragment>
		);
	}
	
	private saveDialog = () => {
		// TODO: Integrar a SHAREPOINT
		console.log("GUARDANDO EN SHAREPOINT===>>>>>",this.state.inscripcion);
		this._closeDialog();
	}

	private handleFormChange=(inscripcion:IInscripcion)=>{
		this.setState({
			inscripcion
		});
	}
	
	public render() {
		const { isDialogVisible } = this.state;
		const { title, iconUrl, iconClickedUrl } = this.props.itemCard;

		return (
			<div onClick={this._showDialog} className={(this.state.isDialogVisible) ? styles.CardClicked : styles.Card} >
				<div className={styles.Card_Container}>
					
					<div className={styles.Card_Container_Icon}>
						<img className={styles.Card_Container_Icon_img} src={(this.state.isDialogVisible) ? iconClickedUrl : iconUrl} alt={title} />
					</div>

					<div className={styles.Card_Container_Title}>
						<div className={(this.state.isDialogVisible) ? styles.TitleClicked : styles.Card_Container_Title_Text} >{title}</div>
					</div>
					
				</div>
				<Panel
					headerText={title}
					isOpen={isDialogVisible}
					onDismiss={this._closeDialog}
					closeButtonAriaLabel="Close"
					className={styles.CardPanel}
					onRenderFooterContent={this._onRenderFooterContent}
					isFooterAtBottom={true}
				>
					<Card
						onFormChange={this.handleFormChange}
						inscripcion={this.state.inscripcion}
						item={this.props.itemCard}
					/>
				</Panel>
			</div>
		);
	}
}
