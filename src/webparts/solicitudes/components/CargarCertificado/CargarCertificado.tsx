import * as React from 'react';
import { Component, Fragment } from 'react';
import { Panel } from 'office-ui-fabric-react/lib/Panel';
import styles from './CargarCertificado.module.scss';
import { DefaultButton, PrimaryButton } from 'office-ui-fabric-react';

export interface CargarCertificadoProps {

}

export interface CargarCertificadoState {
    isDialogVisible: boolean;
}

export default class CargarCertificado extends React.Component<CargarCertificadoProps, CargarCertificadoState> {

    constructor(props: CargarCertificadoProps) {
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
				
                <PrimaryButton style={{ marginRight: 15 }} onClick={this._closeDialog}>Save</PrimaryButton>
                <DefaultButton onClick={this._closeDialog} >Cancel</DefaultButton>
            </Fragment>
        );
    }

    public render() {

        const { isDialogVisible } = this.state;

        return (

            <div className={styles.CargarCertificado} onClick={this._showDialog}>
                Cargar certificado de finalización
                <Panel
                    headerText="Cargar certificado de finalización"
                    isOpen={isDialogVisible}
                    onDismiss={this._closeDialog}
                    closeButtonAriaLabel="Cerrar"
                    onRenderFooterContent={this._onRenderFooterContent}
                    isFooterAtBottom={true}
                    className={styles.CargarCertificado_Panel}
                >
                    <Fragment>
                        <div className={styles.CargarCertificado_Panel_Body}>
                            panel
                        </div>
                    </Fragment>
                </Panel>
            </div>

        );
    }
}