export abstract class EntidadBase
{
  constructor(item?:any)
  {
    if(item != null)
    {
      this.Id = item.Id;
      this.Titulo = item.Title;
      this.MapearItem(item);
    }
  }
  protected abstract MapearItem(item:any):void;

  public Id:number;
  public Titulo:string;
}
