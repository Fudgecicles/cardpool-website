import React, { FunctionComponent, useState } from "react";
import { StylesProvider } from "@material-ui/core/styles";
import styled from "styled-components";
import Button from "./Button";
import useIsMobile from "../hooks/UseIsMobile";
import { useHistory } from "react-router-dom";

const SignupWidth = styled.div<LayoutProp>`
  display: flex;
  align-items: flex-end;
  padding: 0 0 0 0;
  flex-direction: ${(props) => (props.mobile ? "column" : "row")};
  justify-content: center;
  align-items: center;
`;

const StyledTextField = styled.input<LayoutProp>`
  border-radius: 10px;
  border-width: 0px;
  border-style: solid;
  font-size: 22px;
  padding: 10px 20px 10px 20px;
  width: 300px;
  margin-bottom: ${(props) => (props.mobile ? "15px" : "0")};
  margin-right: ${(props) => (props.mobile ? "0" : "15px")};
  outline: none;
`;

type SignupProps = {
  displayEmail?: boolean;
};

type LayoutProp = {
  mobile: boolean;
};

const Signup: FunctionComponent<SignupProps> = (props) => {
  const history = useHistory();
  const [email, setEmail] = useState("");

  const navigateToSignup = () => {
    if (email.length == 0) return;
    history.push("/signup");
  };

  const updateText = (text: string) => {
    setEmail(text);
  };

  const mobile = useIsMobile();
  return (
    <SignupWidth mobile={mobile}>
      <StylesProvider injectFirst>
        {props.displayEmail && (
          <StyledTextField
            onChange={(a) => updateText(a.target.value)}
            mobile={mobile}
            placeholder="Email"
          />
        )}
        <Button onClick={navigateToSignup}>{props.children}</Button>
      </StylesProvider>
    </SignupWidth>
  );
};

export default Signup;
