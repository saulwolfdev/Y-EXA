import { Item } from "./entidades";

export interface IDatasource
{  
   getAlItems():Promise<Item[]>;
}
