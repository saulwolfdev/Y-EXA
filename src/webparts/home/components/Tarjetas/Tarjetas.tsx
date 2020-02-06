import * as React from "react";
import styles from './Tarjetas.module.scss';
import { ItemsCards } from "../../../../core/entidades/ItemsCards";
import Tarjeta from "../Tarjeta/Tarjeta";
import User from "../User/User";
import { Fragment } from 'react';
import DefaultUserTitle from '../DefaultUserTitle/DefaultUserTitle';
import CustomUserTitle from '../CustomUserTitle/CustomUserTitle';

import gsap from 'gsap';
import { TweenMax, Expo, TimelineMax, TimelineLite, CSSPlugin } from "gsap/all";

export interface ITarjetaProps {
	itemsCards: ItemsCards[];
}

export interface ITarjetaState {
	userValue: string;
}

export default class Tarjetas extends React.Component<ITarjetaProps, ITarjetaState> {
	constructor(props: ITarjetaProps) {
		super(props);
		this.state = {
			userValue: ""
		};
		this._handleUserSave = this._handleUserSave.bind(this);
		this._handleButtonClick = this._handleButtonClick.bind(this);
		this.cardsRefs=[];
	}

	private cardsRefs:Array<any>;


	private _handleUserSave(userValue: string) {
		this.setState({ userValue });
	}
	private _handleButtonClick() {
		this.setState({
			userValue: ""
		});
	}
	 public componentDidMount(){
		let tl = gsap.timeline({ paused: false });
		   tl.to(this.cardsRefs,{duration:1,stagger: 0.1,utoAlpha: 1, y: -20 });
		   tl.play();
	}
	public render() {
		return (
			<div className={styles.Tarjetas}>

				<div className={styles.Tarjetas_Row}>

					<div className={styles.Tarjetas_Row_User}>
						{(this.state.userValue) ? <span className={styles.Tarjetas_Row_User_Return} onClick={this._handleButtonClick}>Volver a mi usuario</span> : <span className={styles.Tarjetas_Row_User_Id}>SE21299</span>}
						<User onSave={this._handleUserSave} />
					</div>

					{
						(!this.state.userValue) ? <DefaultUserTitle /> : <CustomUserTitle user={this.state.userValue} />
					}
					
	<div className={styles.Tarjetas_Row_Tarjeta}>
						<div className={styles.Tarjetas_Row_Tarjeta_Container}>
							<div className={styles.Tarjetas_Row_Tarjeta_Container_Row}>
								
								{this.props.itemsCards.map((item, index) =>
									<div 
									    key={item.id}
										 className={styles.Tarjetas_Row_Tarjeta_Container_Row_Box}
										 ref={div => this.cardsRefs[index] = div}
										 >
										<Tarjeta key={item.id} itemCard={item} />
									</div>
								)}
							</div>
						</div>
					</div>

				</div>
			</div>
		);
	}
}