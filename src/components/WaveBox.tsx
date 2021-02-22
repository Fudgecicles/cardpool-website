import React, { useState, useEffect } from "react";
import Sketch from "react-p5";
import p5Types from "p5"; //Import this for typechecking and intellisense
import { Color } from "react-bootstrap/esm/types";

interface ComponentProps {
	//Your component props
	foreground: string
	background: string
}

const WaveBox: React.FC<ComponentProps> = (props: ComponentProps) => {
	const [windowWidth, setwindowWidth] = useState(window.outerWidth);
	const [resizeOccurred, setResizeOccurred] = useState(false);

	useEffect(() => {
		function handleResize() {
			setwindowWidth(window.outerWidth)
			setResizeOccurred(true)
		}
	
		window.addEventListener("resize", handleResize);
		window.addEventListener("fullscreenchange", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
			window.removeEventListener('fullscreenchange', handleResize);}
	  }, []);
  
	const n = 10;
	const y = 50;

	//See annotations in JS for more information
	const setup = (p5: p5Types, canvasParentRef: Element) => {
		p5.createCanvas(windowWidth, 100).parent(canvasParentRef);
	};

	const draw = (p5: p5Types) => {
		// Not sure why but sometimes it doesn't update and this catches that
		if(windowWidth != window.outerWidth){
			setwindowWidth(window.outerWidth)
			setResizeOccurred(true)
		}
		// resize canvas if resize occurred (I tried the built in windowResized and it was worse)
		if(resizeOccurred){
			p5.resizeCanvas(windowWidth, 100);
			setResizeOccurred(false)
		}
		//Draw the wave
		let waveX = 0;
		let currentHeight = (p5.height / 2) + p5.sin(p5.millis() * 0.001) * (p5.height / 4);
		p5.background(p5.color(props.background));
		p5.fill(p5.color(props.foreground));
		p5.noStroke();
		p5.noiseDetail(2, 0.2);
		p5.beginShape();
		p5.vertex(p5.width/2,p5.height);
		p5.vertex(-10,p5.height);
		p5.vertex(-10,p5.height/2);
		for (let i = 0; i <= n; i++){
			p5.curveVertex(waveX, currentHeight + ((p5.noise(waveX * 0.0075, p5.millis() * 0.001) - 0.5) * 50));
			waveX += p5.width/n;
		}
		p5.vertex(p5.width+10,p5.height/2);
		p5.vertex(p5.width+10,p5.height);
		p5.vertex(p5.width/2,p5.height);
		p5.endShape();
	};

	return <Sketch setup={setup} draw={draw} />;
};

export default WaveBox;