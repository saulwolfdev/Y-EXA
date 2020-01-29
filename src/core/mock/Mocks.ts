import { Item } from "./../../core";
import { IDatasource } from './../IDatasource';

export default class Mock implements IDatasource
{
  public getAlItems():Promise<Item[]>{
    return  new Promise<Item[]>((resolve, reject) => { 
      let items:Array<Item> = new Array<Item>();
      for(let i=0;i<10;i++){
        items.push(new Item({Title:'Titulo' + i,Id:i,Created:Date.now}));
      }
      resolve(items);
    });
  }
}
