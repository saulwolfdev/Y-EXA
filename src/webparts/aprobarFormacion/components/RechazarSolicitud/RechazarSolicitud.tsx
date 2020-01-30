import * as React from 'react';
import { Component, Fragment } from 'react';
import { Panel } from 'office-ui-fabric-react/lib/Panel';
import styles from './RechazarSolicitud.module.scss';
import { TextField, DefaultButton, PrimaryButton } from 'office-ui-fabric-react';

export interface RechazarSolicitudProps {

}

export interface RechazarSolicitudState {
    isDialogVisible: boolean;
}

export default class RechazarSolicitud extends React.Component<RechazarSolicitudProps, RechazarSolicitudState> {

    constructor(props: RechazarSolicitudProps) {
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
                <PrimaryButton className={styles.RechazarSolicitud_ButtonRed} style={{ marginRight: 15 }} onClick={this._closeDialog}>Rechazar solicitud</PrimaryButton>
                <DefaultButton onClick={this._closeDialog} >Cancelar</DefaultButton>
            </Fragment>
        );
    }

    public render() {

        const { isDialogVisible } = this.state;

        return (
            <div className={styles.RechazarSolicitud} onClick={this._showDialog}>
                
                <PrimaryButton
                    text="Rechazar"
                    className={styles.RechazarSolicitud_ButtonRed}
                />

                <Panel
                    headerText="Motivo de rechazo"
                    isOpen={isDialogVisible}
                    onDismiss={this._closeDialog}
                    closeButtonAriaLabel="Cerrar"
                    onRenderFooterContent={this._onRenderFooterContent}
                    isFooterAtBottom={true}
                    className={styles.RechazarSolicitud_Panel}
                >
                    <Fragment>
                        <form className={styles.RechazarSolicitud_Panel_Form}>
                            <TextField
                                multiline rows={3}
                                label="Comentarios"
                                placeholder="Por favor detallá el motivo de rechazo para la solicitud de formación. Tu comentario podrá ser visto por el usuario."
                                required
                            />
                        </form>
                    </Fragment>
                </Panel>
            </div>
        );
    }
}