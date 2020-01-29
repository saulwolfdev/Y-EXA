import {EntidadBase} from './index';
import { Moment } from "moment";
import  * as moment from "moment";

export default class Fase extends EntidadBase
{
  constructor(item:any)
  {
    super(item);
  }

  protected MapearItem(item:any):void
  {
    this.FechaCreacion = moment(item.Created).toISOString();
  }
  
  public FechaCreacion:string;

}
