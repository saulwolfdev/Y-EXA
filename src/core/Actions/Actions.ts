
export enum ActionTypes {
  INIT_APP, //Cuando la aplicacion ya se inicializo
  NO_ACCESS, //Cuando el usuario no esta en ninguno de los grupos de permisos
  SHOW_ERROR, //Para mostrar cualquier error
  SHOW_MESSAGE, //Para mostrar cualquier mensaje
  SHOW_SUCCESS, //Para mostrar una accion que salio bien
  INIT_LOAD, //Para mostrar una imagen de carga
  FINISH_LOAD //Para ocultar la imagen de carga
}

export type Action =
  | { type: ActionTypes.INIT_APP; payload:any}
  | { type: ActionTypes.NO_ACCESS; payload:any}
  | { type: ActionTypes.INIT_LOAD; payload:any}
  | { type: ActionTypes.FINISH_LOAD; payload:any }
  | { type: ActionTypes.SHOW_ERROR; payload:any}
  | { type: ActionTypes.SHOW_SUCCESS; payload:any}
  | { type: ActionTypes.SHOW_MESSAGE; payload:any};

export const InvokeInitApp = (): Action => ({
                                type: ActionTypes.INIT_APP,
                                payload:null
                            });
export const InvokeNoAccess = (): Action => ({
                              type: ActionTypes.NO_ACCESS,
                              payload:null
                          });
export const InvokeInitLoad = (): Action => ({
                              type: ActionTypes.INIT_LOAD,
                              payload:null
                            });
export const InvokeFinishLoad = (): Action => ({
                              type: ActionTypes.FINISH_LOAD,
                              payload:null
                            });
export const InvokeShowError = (error: any): Action => ({
                                type: ActionTypes.SHOW_ERROR,
                                payload:error
                            });                            
export const InvokeShowMessage = (message: string): Action => ({
                              type: ActionTypes.SHOW_MESSAGE,
                              payload:message
                            });
export const InvokeShowSuccess = (message: string): Action => ({
                              type: ActionTypes.SHOW_SUCCESS,
                              payload:message
                            });
