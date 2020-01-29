import {sp} from "@pnp/sp";
import { Moment } from "moment";
import  * as moment from "moment";
import { Item, IDatasource} from "./../../core";
import { Observable } from '../utils';
import * as Actions from '../Actions/Actions';

export default class SharepointDatasource implements IDatasource
{
  public getAlItems():Promise<Item[]>{
    return sp.web.lists.getByTitle('Prueba').items
                           .select('Id','Title','Created')
                           .top(10)
                           .get().then((items:any[])=>{
                              let listItems:Array<Item> = new Array<Item>();
                              try{
                                for(let i=0;i< items.length;i++){                                                                                                  
                                  listItems.push(new Item(items[i]));
                                }  
                                return(listItems);                                                              
                              }
                              catch(e){
                                Observable.Instance().Invoke(Actions.InvokeShowError(e));
                                return(null);                                   
                              }    
                           })
                           .catch(error => {
                            Observable.Instance().Invoke(Actions.InvokeShowError(error.data.responseBody["odata.error"]["message"].value));
                            return null;
                          });
  }
}