import * as React from 'react';
import { Component,Fragment } from 'react';
import styles from "../Aprobaciones.module.scss";
import { ICourses } from '../../../../core/entidades/ICourses';
import AprobacionHeader from '../AprobacionHeader/AprobacionHeader';
export interface AprobacionProps {
	itemCourse:ICourses;
	cardSelected:boolean;
}
 
export interface AprobacionState {
	
}
 
class Aprobacion extends React.Component<AprobacionProps, AprobacionState> {
	constructor(props: AprobacionProps) {
		super(props);
		this.state = {
			count:false
		};
	}
	private _getClass=():string=>{
			switch(this.props.itemCourse.dayLimit){
				case 1:
					return styles.warning;
				case 2:
				case 3:
					return styles.alert;
				default:
					return styles.ok;
			}
		
	}
	 public render() {
		const {courses,dayLimit,place,userId,userName,id}= this.props.itemCourse;
		
		// const colorSelect= (dayLimit===1)?styles.warning:(dayLimit>=2&&dayLimit<=3)?styles.alert:styles.ok;
	return (
		<Fragment>
			<div className={(this.props.cardSelected)?styles.aprobaciones_cards_col + ' ' + styles.tarjetas:styles.aprobaciones_cards_col}>
              <div className={styles.aprobaciones_cards_card + ' ' + this._getClass()}>
                <div className={styles.aprobaciones_cards_card_row}>
                  <div className={styles.aprobaciones_cards_card_row_colRight}>
                    <div className={styles.aprobaciones_cards_card_diasRestantes}>
                      <div className={styles.aprobaciones_cards_card_diasRestantes_calendar}>
                        {dayLimit}
                    </div>
                      <div className={styles.aprobaciones_cards_card_diasRestantes_texto}>
                        {(dayLimit==1)?"Dia restante":"Dias restantes"}
                    </div>
                    </div>
                  </div>
                  <div className={styles.aprobaciones_cards_card_row_colLeft}>
                    <div className={styles.aprobaciones_cards_card_nombreFormacion}>
                      <div className={styles.aprobaciones_cards_card_nombreFormacion_ellipsis}>
                       {courses}
                      </div>
                    </div>
	 <div className={styles.aprobaciones_cards_card_proveedorFormacion}>{place}</div>
                    <div className={styles.aprobaciones_cards_card_usuario}>
	 <div className={styles.aprobaciones_cards_card_usuario_nombre}>{userName}</div>
	 <div className={styles.aprobaciones_cards_card_usuario_id}>{userId}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
		</Fragment>
		);
	}
}
 
export default Aprobacion;