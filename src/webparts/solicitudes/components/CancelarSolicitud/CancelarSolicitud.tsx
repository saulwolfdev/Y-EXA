import * as React from 'react';
import { Component, Fragment } from 'react';
import { Panel } from 'office-ui-fabric-react/lib/Panel';
import styles from './CancelarSolicitud.module.scss';
import { TextField, DefaultButton, PrimaryButton } from 'office-ui-fabric-react';

export interface CancelarSolicitudProps {

}

export interface CancelarSolicitudState {
    isDialogVisible: boolean;
}

export default class CancelarSolicitud extends React.Component<CancelarSolicitudProps, CancelarSolicitudState> {

    constructor(props: CancelarSolicitudProps) {
        super(props);
        this.state = {
            isDialogVisible: false,
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
                <PrimaryButton style={{ marginRight: 15 }} onClick={this._closeDialog}>Enviar</PrimaryButton>
                <DefaultButton onClick={this._closeDialog} >Cancelar</DefaultButton>
            </Fragment>
        );
    }

    public render() {

        const { isDialogVisible } = this.state;

        return (
            <div className={styles.CancelarSolicitud} onClick={this._showDialog}>
                
                Cancelar solicitud

                <Panel
                    headerText="Motivo de cancelación"
                    isOpen={isDialogVisible}
                    onDismiss={this._closeDialog}
                    closeButtonAriaLabel="Cerrar"
                    onRenderFooterContent={this._onRenderFooterContent}
                    isFooterAtBottom={true}
                    className={styles.CancelarSolicitud_Panel}
                >
                    <Fragment>
                        <form className={styles.CancelarSolicitud_Panel_Form}>
                            <TextField
                                multiline rows={3}
                                label="Comentarios"
                                placeholder="Por favor detallá el motivo de cancelación para tu solicitud."
                                required
                            />
                        </form>
                    </Fragment>
                </Panel>
            </div>
        );
    }
}