import React, { useState, useEffect } from "react";
import Sketch from "react-p5";
import p5Types from "p5"; //Import this for typechecking and intellisense
import Colors from "../config/Colors";
import { spawn } from "child_process";

interface ComponentProps {
  //Your component props
  upright: boolean;
  waterColor: string;
  wetSandColor: string;
  sandColor: string;
}

const WaveBox: React.FC<ComponentProps> = (props: ComponentProps) => {
	const [windowWidth, setwindowWidth] = useState(window.outerWidth);
	const [resizeOccurred, setResizeOccurred] = useState(false);

	interface decayPoint {
		x:number;
		y:number;
		decayRate:number;
		diameter:number;
	}

	const n = 10;
	const pointMinRadius = 4;
	const pointMaxRadius = 20;
	const pointSpawnRateMin = 2;
	const pointSpawnRateMax = 4;
	const wetDecayAcceleration = 0.0001;
	var wetDecayRate:number[] = new Array(n);
	var sandData:number[] = new Array(n);
	var decayPoints:decayPoint[] = new Array(0);

	useEffect(() => {
	function handleResize() {
		setwindowWidth(window.outerWidth);
		setResizeOccurred(true);
	}

	window.addEventListener("resize", handleResize);
	window.addEventListener("fullscreenchange", handleResize);
	return () => {
		window.removeEventListener("resize", handleResize);
		window.removeEventListener("fullscreenchange", handleResize);
	};
	}, []);


  //See annotations in JS for more information
  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(windowWidth, 100).parent(canvasParentRef);
	for(let i = 0; i < n; i++){
		sandData[i] = props.upright ? p5.height : 0;
		wetDecayRate[i] = 0;
	}
  };

  const getWaveData = (p5: p5Types, currentTime: number):number[]  => {
	var wavePoints:number[] = new Array(n);
	let waveX = 0;
	let currentHeight =
	p5.height / 2 +
	p5.sin(currentTime * 0.001) * (p5.height / 4)
	for (let i = 0; i < n; i++) {
		wavePoints[i] = currentHeight + (p5.noise(waveX * 0.0075, currentTime * 0.001) - 0.5) * 50;
		waveX += p5.width / (n-1);
	}
	return wavePoints;
  }

  const drawWave = (p5: p5Types, wavePoints: number[]) => {
    let waveX = 0;
    p5.beginShape();
    if (props.upright) {
      p5.vertex(p5.width / 2, p5.height);
      p5.vertex(-10, p5.height);
      p5.vertex(-10, p5.height / 2);
    } else {
      p5.vertex(p5.width / 2, 0);
      p5.vertex(-10, 0);
      p5.vertex(-10, p5.height / 2);
    }
    for (let i = 0; i < n; i++) {
      p5.curveVertex(waveX, wavePoints[i]);
      waveX += p5.width / (n-1);
    }
    if (props.upright) {
      p5.vertex(p5.width + 10, p5.height / 2);
      p5.vertex(p5.width + 10, p5.height);
      p5.vertex(p5.width / 2, p5.height);
    } else {
      p5.vertex(p5.width + 10, p5.height / 2);
      p5.vertex(p5.width + 10, 0);
      p5.vertex(p5.width / 2, 0);
    }
    p5.endShape();
  };

  const draw = (p5: p5Types) => {
    // Not sure why but sometimes it doesn't update and this catches that
    if (windowWidth != window.outerWidth) {
      setwindowWidth(window.outerWidth);
      setResizeOccurred(true);
    }
    // resize canvas if resize occurred (I tried the built in windowResized and it was worse)
    if (resizeOccurred) {
      p5.resizeCanvas(windowWidth, 100);
      setResizeOccurred(false);
    }
    //Draw the wave
    p5.background(p5.color(props.sandColor));
    p5.noStroke();
    p5.noiseDetail(2, 0.2);

	let waveData = getWaveData(p5, p5.millis());

	//Update sand wetness
	for(let i = 0; i < waveData.length; i++){
		wetDecayRate[i] += wetDecayAcceleration * (props.upright ? 1.0 : -1.0 );
		sandData[i] += wetDecayRate[i] * p5.deltaTime;
		
		if( props.upright ? (sandData[i] > waveData[i]) : (sandData[i] < waveData[i]) ){
			sandData[i] = waveData[i];
			wetDecayRate[i] = 0;
		}
	}

	//Update wetness points decay
	for(let i = 0; i < decayPoints.length; i++){
		decayPoints[i].decayRate += wetDecayAcceleration * 0.5 * p5.deltaTime;
		decayPoints[i].diameter -= decayPoints[i].decayRate

		if(decayPoints[i].diameter<=0){
			decayPoints.splice(i,1);
			i--;
		}
	}

	//spawn wetness points
	let numToSpawn = p5.random(pointSpawnRateMin, pointSpawnRateMax);
	for(let j = 0; j < numToSpawn; j++){
		let spawnX = p5.random(0, p5.width);
		let WaveSpaceX = (spawnX / p5.width) * n;
		let indexA = p5.floor(WaveSpaceX);
		let indexB = p5.ceil(WaveSpaceX);
		let percentAB = (WaveSpaceX - indexA) / (indexB - indexA);
		let spawnY = p5.lerp(sandData[indexA], sandData[indexB], percentAB);
		let diameter = p5.random(pointMinRadius, pointMaxRadius);
		decayPoints.push({x:spawnX, y:(spawnY + diameter * (props.upright ? 2.0 : -2.0)), decayRate:0, diameter:diameter});
	}

	//draw wet sand
	p5.fill(p5.color(props.wetSandColor));

	//draw wet decay points
	for(let i = 0; i < decayPoints.length; i++){
		p5.circle(decayPoints[i].x, decayPoints[i].y,decayPoints[i].diameter);
	}

	//draw wet sand border
    drawWave(p5, sandData);

	//draw wave
    p5.fill(p5.color(props.waterColor));
    drawWave(p5, waveData);
  };

  return <Sketch setup={setup} draw={draw} />;
};

export default WaveBox;
