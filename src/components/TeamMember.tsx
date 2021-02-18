import styled from "styled-components";
import { FunctionComponent } from "react";

const MemberImage = styled.img<ColorProp>`
  border-width: 10px;
  border-style: solid;
  border-color: ${(props) => props.backgroundColor};
  border-radius: 100%;
  margin-bottom: 25px;
  width: 300px;
`;

const MemberContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
`;

type ColorProp = {
  backgroundColor: string;
};

type TeamProps = {
  borderColor: string;
  name: string;
  body: React.ReactNode;
  image: string;
};

const TeamMember: FunctionComponent<TeamProps> = (props) => {
  return (
    <MemberContainer>
      <MemberImage backgroundColor={props.borderColor} src={props.image} />
      <h3>{props.name}</h3>
      {props.body}
    </MemberContainer>
  );
};

export default TeamMember;
