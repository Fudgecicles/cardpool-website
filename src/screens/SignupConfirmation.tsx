import React from "react";
import styled from "styled-components";

const CenteredDiv = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function SignupConfirmation() {
  return (
    <CenteredDiv>
      <h1>Thanks for signing up!</h1>
      <h2>We'll contact you as soon as we launch our beta.</h2>
    </CenteredDiv>
  );
}

export default SignupConfirmation;
