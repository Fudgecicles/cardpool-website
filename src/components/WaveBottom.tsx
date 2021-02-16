import styled from "styled-components";
import Colors from "../config/Colors";
import wave from "../assets/wave.png";

const WaveBottom = styled.div`
  width: 100%;
  height: 150px;
  background-image: url(${wave});
  background-repeat: repeat-x;
  background-size: contain;
  background-color: ${Colors.sand};
`;

export default WaveBottom;
