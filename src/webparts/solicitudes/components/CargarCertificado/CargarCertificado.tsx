import * as React from 'react';
import { Component, Fragment } from 'react';
import styles from './CargarCertificado.module.scss';
import { Panel, DefaultButton, PrimaryButton, DetailsList, DetailsListLayoutMode, Selection, SelectionMode, IColumn, mergeStyleSets, CommandBar, ICommandBarItemProps, Label } from 'office-ui-fabric-react';

const classNames = mergeStyleSets({
    fileIconHeaderIcon: {
        padding: 0,
        fontSize: '16px'
    },
    fileIconCell: {
        textAlign: 'center',
        selectors: {
            '&:before': {
                content: '.',
                display: 'inline-block',
                verticalAlign: 'middle',
                height: '100%',
                width: '0px',
                visibility: 'hidden'
            }
        }
    },
    fileIconImg: {
        verticalAlign: 'middle',
        maxHeight: '16px',
        maxWidth: '16px'
    }
});

export interface CargarCertificadoProps {

}

export interface CargarCertificadoState {
    isDialogVisible: boolean;
    columns: IColumn[];
    items: IDocument[];
}

export interface IDocument {
    key: string;
    name: string;
    iconName: string;
    fileType: string;
    dateModified: string;
}

export default class CargarCertificado extends React.Component<CargarCertificadoProps, CargarCertificadoState> {

    constructor(props: CargarCertificadoProps) {
        super(props);
        this._allItems = _generateDocuments();

        const columns: IColumn[] = [
            {
                key: 'column1',
                name: 'File Type',
                className: classNames.fileIconCell,
                iconClassName: classNames.fileIconHeaderIcon,
                ariaLabel: 'Column operations for File type, Press to sort on File type',
                iconName: 'Page',
                isIconOnly: true,
                fieldName: 'name',
                minWidth: 16,
                maxWidth: 16,
                isSorted: false,
                onRender: (item: IDocument) => {
                    return <img src={item.iconName} className={classNames.fileIconImg} alt={item.fileType + ' file icon'} />;
                }
            },
            {
                key: 'column2',
                name: 'Nombre',
                fieldName: 'name',
                minWidth: 210,
                maxWidth: 350,
                isRowHeader: true,
                isResizable: true,
                isSorted: false,
                data: 'string',
                isPadded: true
            },
            {
                key: 'column3',
                name: 'Fecha de carga',
                minWidth: 70,
                maxWidth: 90,
                isResizable: true,
                data: 'number',
                isSorted: false,
                onRender: (item: IDocument) => {
                    return <span>{item.dateModified}</span>;
                },
                isPadded: true
            }
        ];
        this.state = {
            isDialogVisible: false,
            items: this._allItems,
            columns: columns
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
                <PrimaryButton style={{ marginRight: 15 }} onClick={this._closeDialog}>Enviar certificado</PrimaryButton>
                <DefaultButton onClick={this._closeDialog} >Cancelar</DefaultButton>
            </Fragment>
        );
    }

    private _selection: Selection;
    private _allItems: IDocument[];

    public render() {

        const { isDialogVisible } = this.state;
        const { columns, items } = this.state;

        const _items: ICommandBarItemProps[] = [
            {
                key: 'agregar',
                text: 'Agregar',
                iconProps: { iconName: 'Add' }
            },
            {
                key: 'eliminar',
                text: 'Eliminar',
                disabled: true,
                iconProps: { iconName: 'Cancel' }
            }
        ];

        return (

            <div className={styles.CargarCertificado} onClick={this._showDialog}>

                <PrimaryButton className={styles.CargarCertificado_Button}>
                    Cargar certificado de finalización
                </PrimaryButton>

                <Panel
                    headerText="Certificado de finalización"
                    isOpen={isDialogVisible}
                    onDismiss={this._closeDialog}
                    closeButtonAriaLabel="Cerrar"
                    onRenderFooterContent={this._onRenderFooterContent}
                    isFooterAtBottom={true}
                    className={styles.CargarCertificado_Panel}
                >
                    <Fragment>
                        <form className={styles.CargarCertificado_Panel_Form}>

                            <Label required={true}>Cargar certificado de finalización</Label>

                            <CommandBar
                                items={_items}
                                className={styles.CargarCertificado_CommanBar}
                            />

                            <DetailsList
                                items={items}
                                columns={columns}
                                selectionMode={SelectionMode.multiple}
                                getKey={this._getKey}
                                setKey="multiple"
                                layoutMode={DetailsListLayoutMode.justified}
                                isHeaderVisible={true}
                                selection={this._selection}
                                selectionPreservedOnEmptyClick={true}
                                enterModalSelectionOnTouch={true}
                                ariaLabelForSelectionColumn="Toggle selection"
                                ariaLabelForSelectAllCheckbox="Toggle selection for all items"
                                checkButtonAriaLabel="Row checkbox"
                            />
                        </form>
                    </Fragment>
                </Panel>
            </div>

        );
    }

    private _getKey(item: any, index?: number): string {
        return item.key;
    }

}

function _generateDocuments() {
    const items: IDocument[] = [];
    items.push(
        {
            key: "1",
            name: "Archivo del certificado",
            iconName: "https://static2.sharepointonline.com/files/fabric/assets/brand-icons/document/svg/odt_16x1.svg",
            fileType: "pdf",
            dateModified: "04/11/1972"
        }
    );
    return items;
}