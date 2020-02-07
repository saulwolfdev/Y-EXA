import * as React from 'react';
import { Component, Fragment } from 'react';
import gsap from 'gsap';
import { TweenMax, Expo, TimelineMax } from "gsap/all";

export interface AnimacionSinSolicitudesProps {
	
}
 
export interface AnimacionSinSolicitudesState {
	
}
 
class AnimacionSinSolicitudes extends React.Component<AnimacionSinSolicitudesProps, AnimacionSinSolicitudesState> {
	constructor(props: AnimacionSinSolicitudesProps) {
		super(props);
		this.state = {};
	}
	public componentDidMount() {
		let tl = gsap.timeline({ defaults: { duration: 1 } });
		tl.from("#LibroIzquierdoHechado", { x: 60, opacity: 0 }, "-=.5")
			.from("#LibroDerechoHechado", { x: 90, opacity: 0 }, "-=.5")
			.from("#LibroErectoDerecho", { backgroundPosition: '200px 0px', opacity: 0 })
			.from("#spiderWebLeft", { durarion:.1,backgroundPosition: '1px 0px', opacity: 0 })
			.from("#spiderWebRight", {durarion:.1, backgroundPosition: '1px 0px', opacity: 0 })
			.from("#LibroErectoIzquierdo", { backgroundPosition: '0px 200px', opacity: 0 });

		let lapiz = gsap.timeline({ paused: true});
		lapiz.to("#spider",{duration:3,rotation: -10,y:-60,transformOrigin: "center center", }, 0);
		lapiz.to("#spider",{duration:3.2,rotation: -30,y:-90,transformOrigin: "center center", }, 0);
		lapiz.to("#spider",{duration:3.3,rotation: -60,x:-20,transformOrigin: "center center", }, 0);
		lapiz.to("#spider",{duration:3.4,rotation: 80,x:30,transformOrigin: "center center", }, 0);
		lapiz.play();

	}
	public render() { 
		return (
		<Fragment>

<svg id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 448.9 231.2">
  <defs>
    <linearGradient id="Degradado_sin_nombre" data-name="Degradado sin nombre" x1="224.96" y1="126.13" x2="152.88" y2="84.52" gradientTransform="matrix(1, 0, 0, -1, 0, 234)" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#b4bbe1" stop-opacity="0.1"/>
      <stop offset="0.63" stop-color="#b4bbe1" stop-opacity="0.24"/>
      <stop offset="1" stop-color="#b4bbe1" stop-opacity="0.3"/>
    </linearGradient>
    <linearGradient id="Degradado_sin_nombre_2" data-name="Degradado sin nombre 2" x1="284.49" y1="110.73" x2="212.41" y2="69.12" 
	href="#Degradado_sin_nombre"/>
    <linearGradient id="Degradado_sin_nombre_4" data-name="Degradado sin nombre 4" x1="-0.01" y1="48.5" x2="146" y2="48.5" 
	href="#Degradado_sin_nombre"/>
    <linearGradient id="Degradado_sin_nombre_5" data-name="Degradado sin nombre 5" x1="311.58" y1="91.45" x2="448.08" y2="91.45" 
	href="#Degradado_sin_nombre"/>
    <linearGradient id="Degradado_sin_nombre_3" data-name="Degradado sin nombre 3" x1="139.6" y1="27" x2="208.13" y2="27" 
	href="#Degradado_sin_nombre"/>
  </defs>
  <g id="LibroErectoIzquierdo">
    <g>
      <g>
        <path d="M208.4,2,152.7,34l18.9,10.9,40-32.5V3.8a2.2,2.2,0,0,0-2.2-2.1A1.9,1.9,0,0,0,208.4,2Z" fill="#2875df"/>
        <polygon points="152.7 37 208.1 5.1 228 16.6 172.7 48.5 152.7 37" fill="#75bcfc"/>
        <g>
          <polygon points="146.6 138.6 171.6 153 231.2 118.7 206.4 104.2 146.6 138.6" fill="url(#Degradado_sin_nombre)"/>
          <path d="M229.6,13.2a2.3,2.3,0,0,0-2.5-.3l-55.5,32L152.7,34,208.4,2a1.9,1.9,0,0,1,1.8-.1h0L207.5.4a2.1,2.1,0,0,0-2.3-.1L146.6,34v98.4l22-12.6v25.3l59.9-34.5a3.5,3.5,0,0,0,1.8-3.1l1.8-92.9Z" fill="#4594f4"/>
          <path d="M230.2,14.7,171.6,48.4v98.5l59.9-34.5a3.9,3.9,0,0,0,1.9-3.2V16.5a2.2,2.2,0,0,0-2.2-2.1A1.9,1.9,0,0,0,230.2,14.7Z" fill="#205ce2"/>
        </g>
      </g>
      <polygon points="171.6 48.4 146.6 34 146.6 132.4 171.6 146.9 171.6 48.4" fill="#347ee8"/>
      <polygon points="168.2 53.8 148.9 42.6 148.9 50.2 168.2 61.3 168.2 53.8" fill="#fff"/>
      <polygon points="168.2 63.7 148.9 52.6 148.9 55.2 168.2 66.3 168.2 63.7" fill="#fff"/>
      <polygon points="168.2 68.5 148.9 57.4 148.9 60 168.2 71.1 168.2 68.5" fill="#fff"/>
    </g>
    <polygon points="168.2 134.1 148.9 123 148.9 125.5 168.2 136.7 168.2 134.1" fill="#fff"/>
  </g>
  <g id="LibroErectoDerecho">
    <polygon points="206.1 154 231.2 168.4 290.8 134.1 265.9 119.6 206.1 154" fill="url(#Degradado_sin_nombre_2)"/>
    <path d="M268,16.5,212.3,48.6l18.9,10.9L271.1,27V18.4a2.1,2.1,0,0,0-2.1-2.1Z" fill="#b4bbe1"/>
    <polygon points="212.3 51.6 267.6 19.7 287.6 31.2 232.2 63.1 212.3 51.6" fill="#dae3f2"/>
    <path d="M289.1,27.8a2.1,2.1,0,0,0-2.4-.3l-55.5,32L212.3,48.6,268,16.5a2.3,2.3,0,0,1,1.8-.1h0L267.1,15a2.4,2.4,0,0,0-2.3-.1L206.1,48.6V147l22-12.6v25.3L288,125.2a3.7,3.7,0,0,0,1.8-3.1l1.9-92.9Z" fill="#ced2ef"/>
    <polygon points="231.2 63 206.1 48.6 206.1 147 231.2 161.5 231.2 63" fill="#c5c8e8"/>
    <polygon points="227.8 68.3 208.5 57.2 208.5 64.8 227.8 75.9 227.8 68.3" fill="#fff"/>
    <polygon points="227.8 78.3 208.5 67.2 208.5 69.8 227.8 80.9 227.8 78.3" fill="#fff"/>
    <polygon points="227.8 83.1 208.5 72 208.5 74.6 227.8 85.7 227.8 83.1" fill="#fff"/>
    <polygon points="227.8 148.7 208.5 137.5 208.5 140.2 227.8 151.3 227.8 148.7" fill="#fff"/>
    <path d="M289.8,29.3,231.2,63v98.4L291.1,127a3.5,3.5,0,0,0,1.8-3.1V31.1a2.1,2.1,0,0,0-2.1-2.1A1.7,1.7,0,0,0,289.8,29.3Z" fill="#b4bbe1"/>
  </g>
  <g id="LibroIzquierdoHechado">
    <path d="M140.8,168a1.9,1.9,0,0,0-.7,1.1L82.8,134.4a3.2,3.2,0,0,0-3.3,0l-75,45.8L0,179v6H.1a3.3,3.3,0,0,0,1.4,2.4l61.4,37.4a2.9,2.9,0,0,0,3.3,0l78.3-47.7a3.4,3.4,0,0,0,1.4-2.1h.1v-6.5S141.6,167.5,140.8,168Z" fill="#8fc0c8"/>
    <g>
      <path d="M146,180.3a3.1,3.1,0,0,1-1.5,2.7L66.2,230.7a2.9,2.9,0,0,1-3.3,0l-13.1-8-4-2.4L5.9,195.9,4,194.7l-2.5-1.5A2.8,2.8,0,0,1,0,190.7a3,3,0,0,1,1.5-2.8l78-47.7a3.2,3.2,0,0,1,3.3,0l5.2,3.2,2,1.2,40.1,24.3,3.9,2.3,10.5,6.4A2.9,2.9,0,0,1,146,180.3Z" fill="url(#Degradado_sin_nombre_4)"/>
      <path d="M1.5,176.1l78-47.6a3.2,3.2,0,0,1,3.3,0l61.7,37.4a3.1,3.1,0,0,1,1,4.3,2.7,2.7,0,0,1-1,1.1L66.2,219a3.2,3.2,0,0,1-3.3,0L1.5,181.6a3.2,3.2,0,0,1-1-4.4A3.5,3.5,0,0,1,1.5,176.1Z" fill="#c2e9f3"/>
      <path d="M146,168.6v6.5h-.2a2.8,2.8,0,0,1-1.3,2L66.2,224.9a3.2,3.2,0,0,1-3.3,0l-13.1-8-4-2.5-44.3-27A2.9,2.9,0,0,1,.1,185H0v-6l4.5,1.2,75-45.8a3.2,3.2,0,0,1,3.3,0l42.4,25.7,3.9,2.3,11,6.7c.1-.5.3-1,.6-1.1S146,168.6,146,168.6Z" fill="#80b4ff"/>
      <path d="M146,168.6a3.3,3.3,0,0,1-1.5,2.7L66.2,219a2.9,2.9,0,0,1-3.3,0l-13.1-8-4-2.4L5.9,184.2,4,183l-2.5-1.5A2.8,2.8,0,0,1,0,179a3.1,3.1,0,0,1,1.5-2.9l78-47.6a3.2,3.2,0,0,1,3.3,0l5.2,3.2,2,1.2,40.1,24.3,3.9,2.3,10.5,6.4A2.9,2.9,0,0,1,146,168.6Z" fill="#4588ff"/>
      <polygon points="49.8 210.9 49.8 211 49.8 216.9 45.8 214.4 45.7 208.6 45.8 208.6 125.3 160.1 130.1 157.2 133.9 159.5 129.1 162.4 49.8 210.9" fill="#b4bbe1"/>
      <polygon points="83.4 142.4 70.8 150.1 96.2 165.5 108.9 157.8 83.4 142.4" fill="#fff"/>
    </g>
  </g>
  <g id="LibroDerechoHechado">
    <path d="M313.1,143.5l53.4,29-.6-20.6-46-16-6.9,4.2a2.1,2.1,0,0,0-.6,2.8A1.3,1.3,0,0,0,313.1,143.5Z" fill="#b4bbe1"/>
    <polygon points="368.9 171.1 315.8 142.2 315.2 120.5 368.3 149.3 368.9 171.1" fill="#dae3f2"/>
    <g>
      <path d="M312.6,152.2l56.2,30.5L448.1,134l-57.5-31.2a3.4,3.4,0,0,0-3.4.1l-74.7,45.9a2,2,0,0,0-.6,2.7Z" fill="url(#Degradado_sin_nombre_5)"/>
      <path d="M311.7,121a2.3,2.3,0,0,0,1,2.1L365.9,152l.6,20.6-53.4-29a2.1,2.1,0,0,1-1-1.4h0s.2,2,.2,2.8a2.2,2.2,0,0,0,1,2l56.2,30.6,79.3-48.8-21-11.4,20.4-12.5L390.8,73.7a3.4,3.4,0,0,0-3.5.1l-75.7,44.4S311.7,120,311.7,121Z" fill="#ced2ef"/>
      <polygon points="368.8 150.2 369.5 177.5 448.9 128.8 448.1 101.5 368.8 150.2" fill="#c5c8e8"/>
      <polygon points="374.7 150.3 375.3 171.3 381.4 167.6 380.8 146.6 374.7 150.3" fill="#fff"/>
      <polygon points="382.8 145.4 383.3 166.4 385.4 165.1 384.9 144.1 382.8 145.4" fill="#fff"/>
      <polygon points="386.6 143 387.3 164 389.4 162.7 388.8 141.7 386.6 143" fill="#fff"/>
      <polygon points="439.4 110.6 440 131.6 442.1 130.3 441.6 109.3 439.4 110.6" fill="#fff"/>
      <path d="M312.6,119.7l56.2,30.5,79.3-48.7L390.6,70.3a3.2,3.2,0,0,0-3.4.1l-74.7,45.9a2,2,0,0,0-.6,2.7Z" fill="#b4bbe1"/>
    </g>
  </g>
  <g id="spiderWebRight">
    <path d="M314.9,117.5c-17-28-26-83-26-83s25,50,50,68" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M358.9,90.5c-31-18-70-56-70-56s-2,77-9,132" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M288.9,34.5s-13,80-44,141" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M307.1,51.2a8.1,8.1,0,0,1-7.3,2.8s-.7,3.1-6.8,1.8c0,0,.3,2.1-4.9,1.4a2.4,2.4,0,0,1-3.4-.8" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M318.6,61.1s-4.4,6.6-11.5,4.5c0,0-3.1,4.9-10.6,3.4,0,0-3.3,4.5-8.9,1.5,0,0-2.1,4.1-6.4,1" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M332.1,72s-1.6,10.8-14.4,8.6c0,0-5,10.2-15.9,6.5,0,0-6.8,9.8-15.3,3,0,0-3.5,4.3-10-.2" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M350,84.9s-3.9,16-17.5,12.3A22.7,22.7,0,0,1,310.9,110s-10,9.2-26,4.3a15.7,15.7,0,0,1-15.3-.9" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M262,135.9s9,9.8,21,2.7c0,0,24,10.9,34-6.1" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M254.4,155s9.5,12.1,26.5,3.3c0,0,31,4.2,49-8.8" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M297.9,115.5s3,22.8,9.5,42.4" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
  <g id="lapiz">
    <g>
      <path d="M203.6,192.6l-59.1,34.1-4.9-2.8,59.1-34.1,9.2-2.5.2.2h0Z" fill="url(#Degradado_sin_nombre_3)"/>
      <path d="M198.8,184.2l8-1.9c.2-.1.3,0,.4.2s-.1.2-.1.3l-5.4,6Z" fill="#b4bbe1"/>
      <path d="M207.1,182.8l-2.2,2.3a2.5,2.5,0,0,0-.8-1.8l-.3-.3,3-.7a.2.2,0,0,1,.3.1C207.2,182.5,207.1,182.7,207.1,182.8Z" fill="#4588ff"/>
      <path d="M142.6,219.9a2.6,2.6,0,0,0,3.2,1.6h0l.3-.2a2.4,2.4,0,0,0,.6-.9,3.3,3.3,0,0,0-.1-2.4,3,3,0,0,0-2.6-1.7l-.6.2h-.2A2.6,2.6,0,0,0,142.6,219.9Z" fill="#3081e2"/>
    </g>
    <path d="M143.4,216.5l.7,1.3,2,3.5L201,189.2h0l.3-.2a2.2,2.2,0,0,0,.7-.9,3,3,0,0,0-.2-2.3,2.2,2.2,0,0,0-.5-.8h0a2.4,2.4,0,0,0-2-.9h-.8Z" fill="#4588ff"/>
    <path d="M143.4,216.5l.7,1.3,2-.5L201.3,185h0a2.5,2.5,0,0,0-2-.9l-.6.2h-.2Z" fill="#80b4ff"/>
  </g>
  <g id="spiderWebLeft">
    <path d="M78.9,136.5c32-25,71-95,71-95s-19,69-43,108" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M133.9,166.5c7.4-15.3,17-127,17-127s13,106,31,155" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M133.9,68.1s2.7,3.7,6.9,3c0,0,1.9,2.7,7,1.6,0,0,1.5,4.2,7.8.5" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M127.4,78.2s3,6.3,9.3,4.8a8.1,8.1,0,0,0,9.2,2.5s4.4,5,11.7.5" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M119,90.4s4.3,9.1,13.1,5.1c0,0,3.2,6.6,13,2.3,0,0,5.2,5.7,14.5.7" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M137.9,61.5s2.9,3.2,5.5,1.6c0,0,1,3,5.2,1.2a4.2,4.2,0,0,0,5.8.6" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M110.4,102.4s6.7,10,16.6,6a19.5,19.5,0,0,0,16.4,2.7s5.8,6.2,18.7,1.3" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M98.6,117s11,8.4,22.2,6c0,0,7.2,10.7,20.7,5.1,0,0,13.6,4.6,23.5,0" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M84.5,131.8s13,12.3,25.2,13c0,0,11,13.6,27.7,9.2a58.3,58.3,0,0,0,33.1,0" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M137.9,177.5s23.1,8,38.6,0" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M151.9,114.3s1,74.2-3,86.2" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M151.6,168.4s9.5,2.1,21.9-1.9" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M150.5,193.1s20.9,2.2,30.2-2.1" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
  <g id="spider">
    <path d="M269.1,190.7c-4,.4-4.3-6.6-2.4-9s5.6-1,7.1,1,0,3.8-.7,5.1-2.1,3-4,2.9Z" fill="#424242"/>
    <path d="M269.2,180.5c-.6-.1-.8-1.2-.7-1.7a1.2,1.2,0,0,1,.7-1,3.8,3.8,0,0,1,4.1.4c1,.9,1.6,2.5.2,3.4A3.3,3.3,0,0,1,269.2,180.5Z" fill="#424242"/>
    <path d="M270.5,177.9c-.5-1.7,2.4-2.2,3.1-.8S271.4,178.4,270.5,177.9Z" fill="#424242"/>
    <path d="M272.6,177a1.5,1.5,0,0,1-.2-2.1h.1c-.9-.7-2.8,3.1,0,2.2Z" fill="#424242"/>
    <path d="M272.2,176.7c1.1.2,1.5-.4,1.7-1.4s-.4,4.1-1.6,1.4Z" fill="#424242"/>
    <path d="M269.5,178.8a1.8,1.8,0,0,1-.4-1,8.8,8.8,0,0,1-.2-1.7,6.4,6.4,0,0,0-1-2.4l-1.3-1.5c-.3-.3-1.1-.8-1.1-1.3s-.2-1.2.3-.8,0,.6.2.9.9.7,1.2.9l1.1,1.3a4.5,4.5,0,0,1,1.5,2.1,2.2,2.2,0,0,1,0,.8c0,.2.1.2.1.4s0,.5,0,.8.4.6.2.9S269.8,178.6,269.5,178.8Z" fill="#424242"/>
    <path d="M268.4,181.2h-4.6a6.3,6.3,0,0,0-2.7.4,9.4,9.4,0,0,0-1,1l-1,1.5-.4.7-.9,1.4-1.5,1.3c-.3.2-.8.3-.9.6s.3.4.6.4a3.2,3.2,0,0,0,2.1-1.3l.8-1.3a12.7,12.7,0,0,1,1-1.2l1-1.4A2.8,2.8,0,0,1,262,182h1.5a4.3,4.3,0,0,1,1.6-.1,3.3,3.3,0,0,0,2.4,0c.4-.1,1.1.2,1.2-.2S268.7,181.3,268.4,181.2Z" fill="#424242"/>
    <path d="M269,178.7l-2-2.4-1.5-1.2c-.8-.5-1.7-.7-2.5-1.2l-2.2-1.2a1.1,1.1,0,0,0-.8-.3c-.3,0,0,.5.1.7a1.9,1.9,0,0,0,1.3.6,36.1,36.1,0,0,1,3.9,2.2c1,.6,1.3,1.4,2,2.3s.4,1.2,1.3,1.8,1.4.5,1.3-.6S269.3,178.5,269,178.7Z" fill="#424242"/>
    <path d="M268.3,179.7a5.8,5.8,0,0,1-1.9-.3l-2.1-.5-1.6-.2-1.2-.3a3.5,3.5,0,0,0-3.1,2,9.8,9.8,0,0,0-1.3,2.2,2.1,2.1,0,0,1-1,1.6l-1.3.7c-.3.1-1.1.3-.6.7a1.4,1.4,0,0,0,1.1,0c1.2-.2,1.7-1.5,2.3-2.4a8,8,0,0,1,.8-1.6l.9-1.1a2,2,0,0,1,1.1-.9l1.4-.2H263l3.1.4c.6.1.8.5,1.3.5s.6.7,1,.7,1.6-.5.9-1.2S268.5,179.9,268.3,179.7Z" fill="#424242"/>
    <path d="M273.9,180.2l.9-.6,1.2-1.4a4.3,4.3,0,0,1,2-1.5l1.9-.5c.5-.1,1.4-.1,1.7-.5s.8-.9.1-.8-.3.5-.6.6-1.2.1-1.5.2l-1.6.4a4,4,0,0,0-2.4,1c-.2.1-.3.4-.5.6l-.4.2c-.1.1-.2.5-.4.7s-.6.3-.6.7S273.8,179.8,273.9,180.2Z" fill="#424242"/>
    <path d="M273.5,182.7c.3.1.8.7,1.1.8l1.3.8,1.5.9a7,7,0,0,1,2,1.8,3.5,3.5,0,0,1,.3,1.4V191a4.8,4.8,0,0,0,0,1.7,10.5,10.5,0,0,0,.5,1.9c.1.3.5.6.5,1s-.5.2-.8,0-.9-1.5-1-2.3v-1.5c0-.5-.2-1-.2-1.5a9.6,9.6,0,0,1,0-1.7,2.5,2.5,0,0,0-.3-1.7c-.3-.4-.8-.5-1.3-.9s-.6-.7-1.2-.9a3,3,0,0,1-2.1-1.3c-.2-.3-1-.4-.8-.8s.2-.3.4-.3Z" fill="#424242"/>
    <path d="M274.1,180.2l3-.9,1.9-.2c1,0,1.9.4,2.8.4l2.5.2a1.1,1.1,0,0,1,.8.1c.2.2-.2.5-.5.6s-.9-.1-1.4-.2l-4.5-.3a6.6,6.6,0,0,0-2.8.9c-1,.3-1,.7-2.1.7s-1.5-.3-.8-1.1S274.1,179.9,274.1,180.2Z" fill="#424242"/>
    <path d="M274.2,181.5l1.8.8,2,.7,1.5.7,1.1.4a3.3,3.3,0,0,1,1.5,3.4,7,7,0,0,1-.1,2.5,2.3,2.3,0,0,0,0,2,4.7,4.7,0,0,0,.7,1.2c.2.3.8,1,.1,1s-.7-.4-1-.6-.5-2.2-.5-3.2a11,11,0,0,0,.2-1.8,7.8,7.8,0,0,1-.2-1.4,2.3,2.3,0,0,0-.4-1.4l-1-.9-1.1-.6-2.9-1.4c-.6-.2-.9,0-1.3-.2s-.9.2-1.2,0-1.1-1.3-.2-1.4S274,181.5,274.2,181.5Z" fill="#424242"/>
  </g>
</svg>

		</Fragment>
		);
	}
}
 
export default AnimacionSinSolicitudes;