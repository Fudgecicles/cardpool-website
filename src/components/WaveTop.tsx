import wave from "../assets/waveTop.png";
import Colors from "../config/Colors";
import styled from "styled-components";

const WaveTop = styled.div`
  width: 100%;
  height: 100px;
  background-image: url(${wave});
  background-color: ${Colors.sand};
`;

export default WaveTop;
