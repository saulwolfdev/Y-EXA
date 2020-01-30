import { ItemsCards } from "../../core/entidades/ItemsCards";
import {ICourses} from "../../core/entidades/ICourses";
import { IDay } from "../../core/entidades/IDay";
import uuid from 'react-uuid';
import { IInscripcion } from "../entidades/IInscripcion";
import { ISolicitud } from "../entidades/ISolicitud";
import Day from "../../webparts/home/components/Day/Day";
import { IEstado } from "../entidades/IEstado";
import { IPaso } from "../entidades/IPaso";
export default class Util {
	constructor() {
		this.tecnica = require("../../../src/img/svg/tecnica.svg");
		this.idiomas = require("../../../src/img/svg/idiomas.svg");
		this.superior = require("../../../src/img/svg/superior.svg");
		this.postgrado = require("../../../src/img/svg/postgrado.svg");
		this.tecnicaClick = require("../../../src/img/svg/tecnicaClick.svg");
		this.idiomasClick = require("../../../src/img/svg/idiomasClick.svg");
		this.superiorClick = require("../../../src/img/svg/superiorClick.svg");
		this.postgradoClick = require("../../../src/img/svg/postgradoClick.svg");
	}
	public idiomas: string;
	public tecnica: string;
	public superior: string;
	public postgrado: string;
	public idiomasClick: string;
	public tecnicaClick: string;
	public superiorClick: string;
	public postgradoClick: string;
	public GetItemsCards(): ItemsCards[] {
		return [
		{ id: uuid(), category: "Tecnica", title: "Curso técnico", iconUrl: this.tecnica, iconClickedUrl: this.tecnicaClick },
		{ id: uuid(), category: "Idiomas", title: "Formación de idiomas", iconUrl: this.idiomas, iconClickedUrl: this.idiomasClick },
		{ id: uuid(), category: "Superior", title: "Formación de nivel superior", iconUrl: this.superior, iconClickedUrl: this.superiorClick },
		{ id: uuid(), category: "Postgrado", title: "Formación nivel postgrado", iconUrl: this.postgrado, iconClickedUrl: this.postgradoClick }
		];
	}
	public GetDaysNames(): IDay[] {
		return [
			{ id: uuid(), day: 'Lunes' },
			{ id: uuid(), day: 'Martes' },
			{ id: uuid(), day: 'Miércoles' },
			{ id: uuid(), day: 'Jueves' },
			{ id: uuid(), day: 'Viernes' },
			{ id: uuid(), day: 'Sábado' },
			{ id: uuid(), day: 'Domingo' }
		];
	}

		public GetNamesCourses(): ICourses[] {
		return [
			{ id: uuid(), courses: 'Desarrolador Full-stack',place:"Coderhouse", dayLimit: 1, userId: "SE21626", userName: "Saul Alejos Garay" },
			{ id: uuid(), courses: 'Desarrolador Back-end',place:"Codigo Dojo", dayLimit: 2, userId: "SE34324", userName: "Mariano Gabiel Ayub" },
			{ id: uuid(), courses: 'Desarrolador Front-end',place:"Educacion IT", dayLimit: 4, userId: "SE75655", userName: "Saul alejos garay" },
			{ id: uuid(), courses: 'Analista Funcional',place:"Digital House", dayLimit: 6, userId: "SE66543", userName: "Martín Horacio García Begher" },
			{ id: uuid(), courses: 'QA Tester', dayLimit: 1,place:"Acamica", userId: "SE67463", userName: "Nicolas Biglino" },
			{ id: uuid(), courses: 'Arquitecto de software',place:"UTN", dayLimit: 8, userId: "SE87676", userName: "Pablo Fernandez Hinojosa" }
		];
	}
	public GetInscripcion(): IInscripcion {
		return {
			nombreFormacion: "Desarrollador Full-stack",
			nombreLugar: "Acamica",
			emailSitioWeb: "coderhouse@rrhh.com",
			lugarRealizacion: "av.corrientes 22312",
			numeroTelefono: "4777-0043",
			isOnline: true
		};
	}
	

	public GetSolicitud(): ISolicitud[] {
		return this.GetNamesCourses().map((itemCourses)=>({
			...itemCourses, estadosFlujo:[
					{id:uuid(),titulo:"SOLICITUD",estado:"Cargado",fechaAprobacion:new Date(),cancelable:false},
					{id:uuid(),titulo:"JEFE",estado:"Aprobado",fechaAprobacion:new Date(),cancelable:true },
					{id:uuid(),titulo:"RRHH", estado:"Aprobado",fechaAprobacion:new Date(),cancelable:true },
					{id:uuid(),titulo:"FORMACION", estado:"Espera",fechaAprobacion:new Date(),cancelable:true },
					{id:uuid(),titulo:"SAE",estado:" ",fechaAprobacion:new Date(),cancelable:false },
					{id:uuid(),titulo:"CERTIFICADO", estado:" ",fechaAprobacion:new Date(),cancelable:false }
			]
		}));
	}
		public GetSteps(): IPaso[] {
		return [
			{id:uuid(),color:"#107c10",titulo:"Aprobado"},
			{id:uuid(),color:"#e81123",titulo:"Rechazado"},
			{id:uuid(),color:"#e81123",titulo:"Cancelado"},
			{id:uuid(),color:"#106ebe",titulo:"Cargado"},
			{id:uuid(),color:"#d0d0d0",titulo:"Espera"},
			{id:uuid(),color:"#ffffff",titulo:" "}
			];
	}

}