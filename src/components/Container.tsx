import styled from "styled-components";
import React from "react";

const FullContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PaddedContainer = styled.div`
  width: 100%;
  max-width: 1500px;
  display: flex;
`;

function Container({ children }: any) {
  return (
    <FullContainer>
      <PaddedContainer>{children}</PaddedContainer>
    </FullContainer>
  );
}

export default Container;
