import { IEstado } from "./IEstado";

export interface ISolicitud{
	id: number;
	courses: string;
	place:string;
	dayLimit:number;
	userId:string;
	userName:string;
	estadosFlujo: Array<IEstado>;
}