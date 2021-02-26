import React, { useState, useEffect, useRef } from "react";
import Sketch from "react-p5";
import p5Types from "p5"; //Import this for typechecking and intellisense
import Colors from "../config/Colors";

interface ComponentProps {
  //Your component props
  upright: boolean;
  foreground: string;
  foregroundPrev: string;
  background: string;
  drawFoamLine?: boolean;
}

const WaveBox: React.FC<ComponentProps> = (props: ComponentProps) => {
  const [windowWidth, setwindowWidth] = useState(window.innerWidth);
  const [resizeOccurred, setResizeOccurred] = useState(false);
  const ref = useRef<Element>();

  useEffect(() => {
    function handleResize() {
      setResizeOccurred(true);
    }

    window.addEventListener("resize", handleResize);
    window.addEventListener("fullscreenchange", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("fullscreenchange", handleResize);
    };
  }, []);

  const n = 10;

  //See annotations in JS for more information
  const setup = (p5: p5Types, canvasParentRef: Element) => {
    ref.current = canvasParentRef;
    p5.createCanvas(canvasParentRef.clientWidth, 100).parent(canvasParentRef);
  };

  const drawWave = (p5: p5Types, currentTime: number, heightOffset: number) => {
    let waveX = 0;
    let currentHeight =
      p5.height / 2 +
      p5.sin(currentTime * 0.001) * (p5.height / 4) +
      heightOffset;
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
    for (let i = 0; i <= n; i++) {
      p5.curveVertex(
        waveX,
        currentHeight +
          (p5.noise(waveX * 0.0075, currentTime * 0.001) - 0.5) * 50
      );
      waveX += p5.width / n;
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
    if (windowWidth !== window.innerWidth) {
      setwindowWidth(window.innerWidth);
      setResizeOccurred(true);
    }
    // resize canvas if resize occurred (I tried the built in windowResized and it was worse)
    if (resizeOccurred) {
      // I have no fucking idea where the 17 comes from,
      // but otherwise the canvas would extend off the screen and cause a horizontal scroll to appear
      p5.resizeCanvas(ref.current?.clientWidth ?? windowWidth, 100);
      setResizeOccurred(false);
    }
    //Draw the wave
    p5.background(p5.color(props.background));
    p5.noStroke();
    p5.noiseDetail(2, 0.2);

    p5.fill(p5.color(props.foregroundPrev));
    drawWave(p5, p5.millis() - 1000, 0);
    if (props.drawFoamLine) {
      p5.fill(p5.color(Colors.white));
      drawWave(p5, p5.millis(), 5 * (props.upright ? -1 : 1));
    }

    p5.fill(p5.color(props.foreground));
    drawWave(p5, p5.millis(), 0);
  };

  return <Sketch setup={setup} draw={draw} />;
};

export default WaveBox;
