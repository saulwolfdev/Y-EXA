import * as React from 'react';
import styles from './Recordatorio.module.scss';
import { escape } from '@microsoft/sp-lodash-subset';

// Recordatorio de plazo maximo
export const Recordatorio_PlazoMaximo: React.FunctionComponent = () => {

  const backgroundRecordatorio: string = require("../../../img/svg/backgroundRecordatorioF1.svg");
  const imgRecordatorio: string = require("../../../img/svg/lamparitaWhite.svg");

  return (
    <div className={styles.recordatorio + ' ' + styles.formaUno} style={{ backgroundImage: `url(${backgroundRecordatorio})` }}>

      <div className={styles.recordatorio_container}>

        <div className={styles.recordatorio_container_containerImg}>
          <img className={styles.recordatorio_container_containerImg_img} alt='' src={imgRecordatorio} />
        </div>

        <div className={styles.recordatorio_container_text}>
          Recordá que debés aprobar o rechazar las solicitudes en un plazo <strong>máximo de 5 días</strong> hábiles.
        </div>

      </div>

    </div>
  );
};

// Recordatorio de certificado pendiente
export const Recordatorio_CertificadoPendiente: React.FunctionComponent = () => {

  const backgroundRecordatorio: string = require("../../../img/svg/backgroundRecordatorioF2.svg");
  const imgRecordatorio: string = require("../../../img/svg/lamparitaWhite.svg");

  return (
    <div className={styles.recordatorio + ' ' + styles.formaDos} style={{ backgroundImage: `url(${backgroundRecordatorio})` }}>

      <div className={styles.recordatorio_container}>

        <div className={styles.recordatorio_container_containerImg}>
          <img className={styles.recordatorio_container_containerImg_img} alt='' src={imgRecordatorio} />
        </div>

        <div className={styles.recordatorio_container_text}>
          Recordá que no podés iniciar una solicitud <strong>teniendo pendiente</strong> la carga de un certificado.</div>
        </div>

    </div>
  );
};