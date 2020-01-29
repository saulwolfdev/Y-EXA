import {Action,ActionTypes} from './../../core';

export type Observer = (msg?: any) => void;

export class Observable {
  private static _instance:Observable=null;

  private subscriptor:Map<ActionTypes,Map<string,(v:Action) => void>>;
  private observers: { [type: string]: Observer[] };

  constructor()
  {
    this.subscriptor = new Map<ActionTypes,Map<string,(v:Action) => void>>();
    this.observers = {};
  }

  public static Instance():Observable {
    if(this._instance == null)
    {
       this._instance = new Observable();
    }

    return this._instance;
  }

  public IsDebug:boolean = true;

  public Subscribe(action:ActionTypes,key:string,func:(v:Action) => void)
  {
    if(this.IsDebug)
      console.log('Observable->Subscribe[',ActionTypes[action],'=>',key,']');

    if(!this.subscriptor.has(action))
    {
      this.subscriptor.set(action,new Map<string,(v:Action) => void>());
    }
    this.subscriptor.get(action).set(key,func);
  }

  public UnSubscribe(action:ActionTypes,key:string)
  {
    if(this.IsDebug)
      console.log('Observable->UnSubscribe[',ActionTypes[action],'=>',key,']');

    if(this.subscriptor.has(action) &&
      this.subscriptor.get(action).has(key)){
      this.subscriptor.get(action).delete(key);
    }
  }

  public Invoke(action:Action):Promise<void>
  {
    if(this.IsDebug)
      console.log('Observable->Invoke[',ActionTypes[action.type],'=>',action,']');

    return new Promise<void>(resolve => {
      if(this.subscriptor.has(action.type))
      {
        this.subscriptor.get(action.type).forEach((item) =>{
            item(action);
        });
      }
      resolve();
    });
  }

  public addObserver(type: string, observer: Observer): Observer {
    if (!(type in this.observers)) {
        this.observers[type] = [];
    }
    this.observers[type].push(observer);
    return observer;
  } // addObserver

  public removeObserver(type: string, observer: Observer): void {
    if (this.observers[type]) {
        for (let i = 0; i < this.observers[type].length; i++) {
            if (observer === this.observers[type][i]) {
                this.observers[type].splice(i, 1);
                return;
            }
        } // for i
    }
  } // removeObserver

  public removeObserversType(type: string): void {
    delete this.observers[type];
  } // removeObserversType

  public notifyObservers(type: string, msg?: any): void {
    if (type in this.observers) {
        for (let obs of this.observers[type]) {
            obs(msg);
        } // for obs
    }
  } // notifyObservers

}
