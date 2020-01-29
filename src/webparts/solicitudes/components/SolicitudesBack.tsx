import * as React from 'react';
import styles from './Solicitudes.module.scss';
import { ISolicitudesProps } from './ISolicitudesProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { Icon } from 'office-ui-fabric-react/lib/Icon';
import { PrimaryButton } from 'office-ui-fabric-react';
import { Dropdown, IDropdownOption } from 'office-ui-fabric-react/lib/Dropdown';

// Iconos
const SearchIcon = () => <Icon iconName="Search" />;

// Select Ordenar por
const FormSelect_OrdenarPor: React.FunctionComponent = () => {
  const options: IDropdownOption[] = [
    { key: '1', text: 'Todas las solicitudes' },
    { key: '2', text: 'Solicitudes en curso' },
    { key: '3', text: 'Solicitudes aprobadas' },
    { key: '4', text: 'Solicitudes rechazadas' }
  ];
  return (
    <Dropdown
      placeholder=""
      label=""
      defaultSelectedKey="1"
      options={options}
    />
  );
};

export default class Solicitudes extends React.Component<ISolicitudesProps, {}> {
  public render(): React.ReactElement<ISolicitudesProps> {

    const backgroundForm:string = require("../../../img/svg/backgroundForm.svg");
    const ilustracionSinSolicitudes:string = require("../../../img/svg/ilustracionSinSolicitudes.svg");

    return (
      <div className={styles.solicitudes} style={{ backgroundImage: `url(${backgroundForm})` }}>
        <div className={styles.solicitudes_container}>
          <div className={styles.solicitudes_pageHeader}>
            <div className={styles.solicitudes_pageHeader_row}>
              <div className={styles.solicitudes_pageHeader_row_colLeft}>
                Consultá tus solicitudes actuales e históricas:
              </div>
              <div className={styles.solicitudes_pageHeader_row_colRight}>
                <div className={styles.solicitudes_pageHeader_visualizacion}>
                  <div className={styles.solicitudes_pageHeader_visualizacion_col}>
                    Visualizar
                  </div>
                  <div className={styles.solicitudes_pageHeader_visualizacion_col}>
                    <FormSelect_OrdenarPor />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.solicitudes_cards}>
			  
            {/* FIN CARD SIN SOLICITUDES */}

            {/* INICIO CARD 1 */}
            <div className={styles.solicitudes_cards_col}>
              <div className={styles.solicitudes_cards_card}>
                <div className={styles.solicitudes_cards_card_row}>
                  <div className={styles.solicitudes_cards_card_row_colLeft}>
                    <div className={styles.solicitudes_cards_card_nombreFormacion}>Master en Dirección de Marketing</div>
                    <div className={styles.solicitudes_cards_card_proveedorFormacion}>Universidad del Salvador</div>
                    <div className={styles.solicitudes_cards_card_links}>
                      <div className={styles.solicitudes_cards_card_links_link}>Ver detalle de la solicitud</div>
                      <div className={styles.solicitudes_cards_card_links_linkAlert}>Cancelar solicitud</div>
                    </div>
                  </div>
                  <div className={styles.solicitudes_cards_card_row_colRight}>
                    <div className={styles.solicitudes_cards_card_usuario}>
                      <div className={styles.solicitudes_cards_card_usuario_nombre}>Martín Horacio García Begher</div>
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
                  <div className={styles.solicitudes_cards_card_stepper_step + ' ' + styles.noIniciado}>
                    <div className={styles.marcador}>
                      <div className={styles.marcador_bullet}></div>
                      <div className={styles.marcador_raya}></div>
                    </div>
                    <div className={styles.etiqueta}>Formación</div>
                  </div>
                  <div className={styles.solicitudes_cards_card_stepper_step + ' ' + styles.noIniciado}>
                    <div className={styles.marcador}>
                      <div className={styles.marcador_bullet}></div>
                      <div className={styles.marcador_raya}></div>
                    </div>
                    <div className={styles.etiqueta}>Sae</div>
                  </div>
                  <div className={styles.solicitudes_cards_card_stepper_step + ' ' + styles.noIniciado}>
                    <div className={styles.marcador}>
                      <div className={styles.marcador_bullet}></div>
                      <div className={styles.marcador_raya}></div>
                    </div>
                    <div className={styles.etiqueta}>Certificado</div>
                  </div>
                </div>
              </div>
            </div>
            {/* FIN CARD 1 */}

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

          </div>
          {/* FIN CONTENEDOR DE TARJETAS */}

        </div>
      </div >
    );
  }
}