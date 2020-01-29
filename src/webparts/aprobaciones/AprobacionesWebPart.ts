import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'AprobacionesWebPartStrings';
import Aprobaciones from './components/Aprobaciones';
import { IAprobacionesProps } from './components/IAprobacionesProps';
import '../../core/css/fix.css';
export interface IAprobacionesWebPartProps {
  description: string;
}

export default class AprobacionesWebPart extends BaseClientSideWebPart<IAprobacionesWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IAprobacionesProps > = React.createElement(
      Aprobaciones,
      {
        description: this.properties.description
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
