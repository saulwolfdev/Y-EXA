import { Environment,EnvironmentType } from '@microsoft/sp-core-library';
import { IDatasource } from './IDatasource';
import { Item} from "./entidades";
import { Mock } from './mock';
import { SharepointDatasource  } from './sharepoint';

export default class Datasource implements IDatasource
{
  private source : IDatasource;

  constructor()
  {
      if(Environment.type == EnvironmentType.Local)
      {
        this.source = new Mock();
      }
      else
      {
          this.source = new SharepointDatasource();
      }
  }

  public static GetDatasource():IDatasource
  {
    return new Datasource();
  }

  public getAlItems():Promise<Item[]>{
    return this.source.getAlItems();
  }
  
}
