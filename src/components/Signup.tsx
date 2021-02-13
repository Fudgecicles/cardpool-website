import React, { FunctionComponent } from "react";
import { StylesProvider } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import Colors from "../config/Colors";

const SignupWidth = styled.div`
  display: flex;
  align-items: flex-end;
  padding: 0 0 0 0;
  flex-direction: row;
`;

const StyledTextField = styled(TextField)`
  width: 400px;
  padding-right: 20px;
  margin: 0 0 0 0;
`;

const StyledButton = styled(Button)`
  background-color: #6772e5;
  &:hover {
    background-color: #5469d4;
  }
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  width: 150px;
`;

type SignupProps = {
  displayEmail?: boolean
}

const Signup : FunctionComponent<SignupProps> = (props) => {
  return (
    <SignupWidth>
      <StylesProvider injectFirst>
        {props.displayEmail && <StyledTextField
          margin="normal"
          label="Email"
          variant="standard"
          className="Email-Input"
        />}
        <StyledButton variant="contained">Sign up</StyledButton>
      </StylesProvider>
    </SignupWidth>
  );
}

export default Signup;
