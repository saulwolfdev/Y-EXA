import * as React from 'react';
import { Component,Fragment } from 'react';
import {ISolicitud} from "../../../../core/entidades/ISolicitud";
import {IPaso} from "../../../../core/entidades/IPaso";
import {IEstado} from "../../../../core/entidades/IEstado";
import { Icon } from 'office-ui-fabric-react/lib/Icon';
import { PrimaryButton } from 'office-ui-fabric-react';
// Iconos
const SearchIcon = () => <Icon iconName="Search" />;
import styles from "../Solicitudes.module.scss";
import Stepper from "../Stepper/Stepper";
import CancelarSolicitud from '../CancelarSolicitud/CancelarSolicitud';
import CargarCertificado from '../CargarCertificado/CargarCertificado';
import ShowPanel from '../../../home/components/ShowPanel/ShowPanel';
export interface ItemCardProps {
	item:ISolicitud;
	itemsSteps:Array<IPaso>;
}
 
export interface ItemCardState {
	
}
 
class ItemCard extends React.Component<ItemCardProps, ItemCardState> {
	constructor(props: ItemCardProps) {
		super(props);
		this.state = {};
	}

	private getEstadoActual = (): IEstado => {
		// const estados = [...this.props.item.estadosFlujo];
		// let ultimoEstado = estados.pop();
		// while(ultimoEstado.estado === ' ') {
		// 	ultimoEstado = estados.pop();
		// }
		// return ultimoEstado;
		
		return this.props.item.estadosFlujo
			.filter(estado => estado.estado !== ' ').pop();
	}

	private shouldLoadCertificate = (): boolean => {
		const ultimoEstado = this.props.item.estadosFlujo[this.props.item.estadosFlujo.length - 1];
		return this.getEstadoActual().id === ultimoEstado.id && ultimoEstado.estado === 'Aprobado';
	}

	public render() { 
		const {courses,place,userId,userName} = this.props.item;
		const estadoActual = this.getEstadoActual();
		return (<Fragment>
			<div className={styles.solicitudes_cards_col}>
              <div className={styles.solicitudes_cards_card}>
                <div className={styles.solicitudes_cards_card_row}>
                  <div className={styles.solicitudes_cards_card_row_colLeft}>
	<div className={styles.solicitudes_cards_card_nombreFormacion}>{courses}</div>
	<div className={styles.solicitudes_cards_card_proveedorFormacion}>{place}</div>
                    <div className={styles.solicitudes_cards_card_links}>
                      <div className={styles.solicitudes_cards_card_links_link}>Ver detalle de la solicitud</div>
				
					  
		  
					<ShowPanel show={ estadoActual.cancelable }>
						<div className={styles.solicitudes_cards_card_links_linkAlert}>
							<CancelarSolicitud/>
						</div>
					</ShowPanel>
                    </div>
                  </div>
                  <div className={styles.solicitudes_cards_card_row_colRight}>
                    <div className={styles.solicitudes_cards_card_usuario}>
	<div className={styles.solicitudes_cards_card_usuario_nombre}>{userName}</div>
	<div className={styles.solicitudes_cards_card_usuario_id}>{userId}</div>
					<ShowPanel show={ this.shouldLoadCertificate() }>
						<CargarCertificado/>
					</ShowPanel>
                    </div>
                  </div>
                </div>
                <div className={styles.solicitudes_cards_card_stepper}>
					<Stepper 
					step={this.props.item.estadosFlujo}
					itemsSteps={this.props.itemsSteps}
					 />
				</div>
              </div>
            </div>













			            {/* INICIO CARD 2 */}
            <div className={styles.solicitudes_cards_col}>
              <div className={styles.solicitudes_cards_card}>
                <div className={styles.solicitudes_cards_card_row}>
                  <div className={styles.solicitudes_cards_card_row_colLeft}>
                    <div className={styles.solicitudes_cards_card_nombreFormacion}>Community Manager & Publicidad</div>
                    <div className={styles.solicitudes_cards_card_proveedorFormacion}>Coderhouse</div>
                    <div className={styles.solicitudes_cards_card_links}>
                      <div className={styles.solicitudes_cards_card_links_link}>Ver detalle de la solicitud</div>
                    </div>
                  </div>
                  <div className={styles.solicitudes_cards_card_row_colRight}>
                    <div className={styles.solicitudes_cards_card_usuario}>
                      <div className={styles.solicitudes_cards_card_usuario_nombre}>Saúl Garay</div>
                      <div className={styles.solicitudes_cards_card_usuario_id}>SE21626</div>
                    </div>
                  </div>
                </div>
                <div className={styles.solicitudes_cards_card_stepper}>
                  <div className={styles.solicitudes_cards_card_stepper_step + ' ' + styles.iniciado}>
                    <div className={styles.marcador}>
                      <div className={styles.marcador_bullet}></div>
                      <div className={styles.marcador_raya}></div>
                    </div>
                    <div className={styles.etiqueta}>Solicitud</div>
                    <div className={styles.estado}>
                      <div className={styles.estado_fecha}>15/01/2010</div>
                      <div className={styles.estado_nombre}>Cargada</div>
                    </div>
                  </div>
                  <div className={styles.solicitudes_cards_card_stepper_step + ' ' + styles.aprobado}>
                    <div className={styles.marcador}>
                      <div className={styles.marcador_bullet}></div>
                      <div className={styles.marcador_raya}></div>
                    </div>
                    <div className={styles.etiqueta}>Jefe</div>
                    <div className={styles.estado}>
                      <div className={styles.estado_fecha}>21/01/2010</div>
                      <div className={styles.estado_nombre}>Aprobada</div>
                    </div>
                  </div>
                  <div className={styles.solicitudes_cards_card_stepper_step + ' ' + styles.aprobado}>
                    <div className={styles.marcador}>
                      <div className={styles.marcador_bullet}></div>
                      <div className={styles.marcador_raya}></div>
                    </div>
                    <div className={styles.etiqueta}>RRHH</div>
                    <div className={styles.estado}>
                      <div className={styles.estado_fecha}>28/01/2010</div>
                      <div className={styles.estado_nombre}>Aprobada</div>
                    </div>
                  </div>
                  <div className={styles.solicitudes_cards_card_stepper_step + ' ' + styles.rechazado}>
                    <div className={styles.marcador}>
                      <div className={styles.marcador_bullet}></div>
                      <div className={styles.marcador_raya}></div>
                    </div>
                    <div className={styles.etiqueta}>Formación</div>
                    <div className={styles.estado}>
                      <div className={styles.estado_fecha}>12/02/2010</div>
                      <div className={styles.estado_nombre}>Rechazada</div>
                      < div className={styles.estado_ver}>
                        <div className={styles.estado_ver_text}>
                          Ver motivo
                      </div>
                        <div className={styles.estado_ver_icon}>
                          <SearchIcon />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.solicitudes_cards_card_stepper_step + ' ' + styles.noIniciado}>
                    <div className={styles.marcador}>
                      <div className={styles.marcador_bullet}></div>
                      <div className={styles.marcador_raya}></div>
                    </div>
                    <div className={styles.etiqueta}>Sae</div>
                    <div className={styles.estado}>
                      <div className={styles.estado_fecha}></div>
                      <div className={styles.estado_nombre}></div>
                    </div>
                  </div>
                  <div className={styles.solicitudes_cards_card_stepper_step + ' ' + styles.noIniciado}>
                    <div className={styles.marcador}>
                      <div className={styles.marcador_bullet}></div>
                      <div className={styles.marcador_raya}></div>
                    </div>
                    <div className={styles.etiqueta}>Certificado</div>
                    <div className={styles.estado}>
                      <div className={styles.estado_fecha}></div>
                      <div className={styles.estado_nombre}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* FIN CARD 2 */}

            {/* INICIO CARD 3 */}
            <div className={styles.solicitudes_cards_col}>
              <div className={styles.solicitudes_cards_card}>
                <div className={styles.solicitudes_cards_card_row}>
                  <div className={styles.solicitudes_cards_card_row_colLeft}>
                    <div className={styles.solicitudes_cards_card_nombreFormacion}>Desarrollador Full Stack</div>
                    <div className={styles.solicitudes_cards_card_proveedorFormacion}>Coderhouse</div>
                    <div className={styles.solicitudes_cards_card_links}>
                      <div className={styles.solicitudes_cards_card_links_link}>Ver detalle de la solicitud</div>
                    </div>
                  </div>
                </div>
                <div className={styles.solicitudes_cards_card_stepper}>
                  <div className={styles.solicitudes_cards_card_stepper_step + ' ' + styles.iniciado}>
                    <div className={styles.marcador}>
                      <div className={styles.marcador_bullet}></div>
                      <div className={styles.marcador_raya}></div>
                    </div>
                    <div className={styles.etiqueta}>Solicitud</div>
                    <div className={styles.estado}>
                      <div className={styles.estado_fecha}>15/01/2010</div>
                      <div className={styles.estado_nombre}>Cargada</div>
                    </div>
                  </div>
                  <div className={styles.solicitudes_cards_card_stepper_step + ' ' + styles.aprobado}>
                    <div className={styles.marcador}>
                      <div className={styles.marcador_bullet}></div>
                      <div className={styles.marcador_raya}></div>
                    </div>
                    <div className={styles.etiqueta}>Jefe</div>
                    <div className={styles.estado}>
                      <div className={styles.estado_fecha}>21/01/2010</div>
                      <div className={styles.estado_nombre}>Aprobada</div>
                    </div>
                  </div>
                  <div className={styles.solicitudes_cards_card_stepper_step + ' ' + styles.aprobado}>
                    <div className={styles.marcador}>
                      <div className={styles.marcador_bullet}></div>
                      <div className={styles.marcador_raya}></div>
                    </div>
                    <div className={styles.etiqueta}>RRHH</div>
                    <div className={styles.estado}>
                      <div className={styles.estado_fecha}>28/01/2010</div>
                      <div className={styles.estado_nombre}>Aprobada</div>
                    </div>
                  </div>
                  <div className={styles.solicitudes_cards_card_stepper_step + ' ' + styles.aprobado}>
                    <div className={styles.marcador}>
                      <div className={styles.marcador_bullet}></div>
                      <div className={styles.marcador_raya}></div>
                    </div>
                    <div className={styles.etiqueta}>Formación</div>
                    <div className={styles.estado}>
                      <div className={styles.estado_fecha}>15/02/2010</div>
                      <div className={styles.estado_nombre}>Aprobada</div>
                    </div>
                  </div>
                  <div className={styles.solicitudes_cards_card_stepper_step + ' ' + styles.aprobado}>
                    <div className={styles.marcador}>
                      <div className={styles.marcador_bullet}></div>
                      <div className={styles.marcador_raya}></div>
                    </div>
                    <div className={styles.etiqueta}>Sae</div>
                    <div className={styles.estado}>
                      <div className={styles.estado_fecha}>22/02/2020</div>
                      <div className={styles.estado_nombre}>Aprobada</div>
                    </div>
                  </div>
                  <div className={styles.solicitudes_cards_card_stepper_step + ' ' + styles.aprobado}>
                    <div className={styles.marcador}>
                      <div className={styles.marcador_bullet}></div>
                      <div className={styles.marcador_raya}></div>
                    </div>
                    <div className={styles.etiqueta}>Certificado</div>
                    <div className={styles.estado}>
                      <div className={styles.estado_fecha}>15/12/2020</div>
                      <div className={styles.estado_nombre}>Presentado</div>
                      <div className={styles.estado_ver}>
                        <div className={styles.estado_ver_text}>
                          Ver archivo
                      </div>
                        <div className={styles.estado_ver_icon}>
                          <SearchIcon />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* FIN CARD 3 */}

            {/* INICIO CARD 4 */}
            <div className={styles.solicitudes_cards_col}>
              <div className={styles.solicitudes_cards_card}>
                <div className={styles.solicitudes_cards_card_row}>
                  <div className={styles.solicitudes_cards_card_row_colLeft}>
                    <div className={styles.solicitudes_cards_card_nombreFormacion}>Inglés año académico en USA</div>
                    <div className={styles.solicitudes_cards_card_proveedorFormacion}>CUI</div>
                    <div className={styles.solicitudes_cards_card_links}>
                      <div className={styles.solicitudes_cards_card_links_link}>Ver detalle de la solicitud</div>
                    </div>
                  </div>
                </div>
                <div className={styles.solicitudes_cards_card_stepper}>
                  <div className={styles.solicitudes_cards_card_stepper_step + ' ' + styles.iniciado}>
                    <div className={styles.marcador}>
                      <div className={styles.marcador_bullet}></div>
                      <div className={styles.marcador_raya}></div>
                    </div>
                    <div className={styles.etiqueta}>Solicitud</div>
                    <div className={styles.estado}>
                      <div className={styles.estado_fecha}>15/01/2010</div>
                      <div className={styles.estado_nombre}>Cargada</div>
                    </div>
                  </div>
                  <div className={styles.solicitudes_cards_card_stepper_step + ' ' + styles.rechazado}>
                    <div className={styles.marcador}>
                      <div className={styles.marcador_bullet}></div>
                      <div className={styles.marcador_raya}></div>
                    </div>
                    <div className={styles.etiqueta}>Cancelación de solicitud</div>
                    <div className={styles.estado}>
                      <div className={styles.estado_fecha}>21/01/2010</div>
                      <div className={styles.estado_nombre}>Presentada</div>
                      <div className={styles.estado_ver}>
                        <div className={styles.estado_ver_text}>
                          Ver motivo
                      </div>
                        <div className={styles.estado_ver_icon}>
                          <SearchIcon />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* FIN CARD 4 */}

            {/* INICIO CARD 5 */}
            <div className={styles.solicitudes_cards_col}>
              <div className={styles.solicitudes_cards_card}>
                <div className={styles.solicitudes_cards_card_row}>
                  <div className={styles.solicitudes_cards_card_row_colLeft}>
                    <div className={styles.solicitudes_cards_card_nombreFormacion}>Doctorado en el Área de Ciencias de la Computación</div>
                    <div className={styles.solicitudes_cards_card_proveedorFormacion}>Universidad de Buenos Aires</div>
                    <div className={styles.solicitudes_cards_card_links}>
                      <div className={styles.solicitudes_cards_card_links_link}>Ver detalle de la solicitud</div>
                    </div>
                  </div>
                  <div className={styles.solicitudes_cards_card_row_colRight}>
                    <div className={styles.solicitudes_cards_card_usuario}>
                      <div className={styles.solicitudes_cards_card_usuario_nombre}>Mariano Gabriel Ayub</div>
                      <div className={styles.solicitudes_cards_card_usuario_id}>SE16431</div>
                    </div>
                    <PrimaryButton
                      text="Cargar certificado de finalización"
                      className={styles.solicitudes_cards_card_button}
                    />
                  </div>
                </div>
                <div className={styles.solicitudes_cards_card_stepper}>
                  <div className={styles.solicitudes_cards_card_stepper_step + ' ' + styles.iniciado}>
                    <div className={styles.marcador}>
                      <div className={styles.marcador_bullet}></div>
                      <div className={styles.marcador_raya}></div>
                    </div>
                    <div className={styles.etiqueta}>Solicitud</div>
                    <div className={styles.estado}>
                      <div className={styles.estado_fecha}>15/01/2010</div>
                      <div className={styles.estado_nombre}>Cargada</div>
                    </div>
                  </div>
                  <div className={styles.solicitudes_cards_card_stepper_step + ' ' + styles.aprobado}>
                    <div className={styles.marcador}>
                      <div className={styles.marcador_bullet}></div>
                      <div className={styles.marcador_raya}></div>
                    </div>
                    <div className={styles.etiqueta}>Jefe</div>
                    <div className={styles.estado}>
                      <div className={styles.estado_fecha}>21/01/2010</div>
                      <div className={styles.estado_nombre}>Aprobada</div>
                    </div>
                  </div>
                  <div className={styles.solicitudes_cards_card_stepper_step + ' ' + styles.aprobado}>
                    <div className={styles.marcador}>
                      <div className={styles.marcador_bullet}></div>
                      <div className={styles.marcador_raya}></div>
                    </div>
                    <div className={styles.etiqueta}>RRHH</div>
                    <div className={styles.estado}>
                      <div className={styles.estado_fecha}>28/01/2010</div>
                      <div className={styles.estado_nombre}>Aprobada</div>
                    </div>
                  </div>
                  <div className={styles.solicitudes_cards_card_stepper_step + ' ' + styles.aprobado}>
                    <div className={styles.marcador}>
                      <div className={styles.marcador_bullet}></div>
                      <div className={styles.marcador_raya}></div>
                    </div>
                    <div className={styles.etiqueta}>Formación</div>
                    <div className={styles.estado}>
                      <div className={styles.estado_fecha}>12/02/2010</div>
                      <div className={styles.estado_nombre}>Aprobada</div>
                    </div>
                  </div>
                  <div className={styles.solicitudes_cards_card_stepper_step + ' ' + styles.aprobado}>
                    <div className={styles.marcador}>
                      <div className={styles.marcador_bullet}></div>
                      <div className={styles.marcador_raya}></div>
                    </div>
                    <div className={styles.etiqueta}>Sae</div>
                    <div className={styles.estado}>
                      <div className={styles.estado_fecha}>22/02/2020</div>
                      <div className={styles.estado_nombre}>Aprobada</div>
                    </div>
                  </div>
                  <div className={styles.solicitudes_cards_card_stepper_step + ' ' + styles.noIniciado}>
                    <div className={styles.marcador}>
                      <div className={styles.marcador_bullet}></div>
                      <div className={styles.marcador_raya}></div>
                    </div>
                    <div className={styles.etiqueta}>Certificado</div>
                    <div className={styles.estado}>
                      <div className={styles.estado_fecha}></div>
                      <div className={styles.estado_nombre}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* FIN CARD 5 */}	
		</Fragment>);
	}
}
 
export default ItemCard;