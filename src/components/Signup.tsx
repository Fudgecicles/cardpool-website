import React, { FunctionComponent, useState } from "react";
import { StylesProvider } from "@material-ui/core/styles";
import styled from "styled-components";
import Button from "./Button";
import useIsMobile from "../hooks/UseIsMobile";
import MailchimpSubscribe, { EmailFormFields } from "react-mailchimp-subscribe";
import Colors from "../config/Colors";

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

const SignupLayout = styled.div`
  display: flex;
  flex-direction: column;
`;

const ColoredText = styled.div<ColorProps>`
  color: ${(props) => props.color};
  font-size: 16px;
  padding-left: 10px;
  margin-top: 10px;
`;

type ColorProps = {
  color: string;
};

type SignupProps = {
  displayEmail?: boolean;
};

type LayoutProp = {
  mobile: boolean;
};

const Signup: FunctionComponent<SignupProps> = (props) => {
  const [email, setEmail] = useState("");

  const navigateToSignup = (subscribe: (data: EmailFormFields) => void) => {
    if (email.length === 0) return;
    const val: EmailFormFields = { EMAIL: email };
    subscribe(val);
  };

  const updateText = (text: string) => {
    setEmail(text);
  };

  const mobile = useIsMobile();
  return (
    <SignupWidth mobile={mobile}>
      <StylesProvider injectFirst>
        <MailchimpSubscribe
          url={process.env.REACT_APP_MAILCHIMP_URL as string}
          render={({ subscribe, status, message }) => {
            return (
              <>
                <SignupLayout>
                  <div>
                    <StyledTextField
                      onChange={(a) => updateText(a.target.value)}
                      mobile={mobile}
                      placeholder="Email"
                    />
                    <Button onClick={() => navigateToSignup(subscribe)}>
                      {props.children}
                    </Button>
                  </div>
                  {status === null && (
                    <ColoredText color={"black"}>
                      We'll let you know when we launch
                    </ColoredText>
                  )}
                  {status === "sending" && (
                    <ColoredText color={Colors.pool}>Sending...</ColoredText>
                  )}
                  {status === "error" && (
                    <ColoredText color={"red"}>Invalid Email</ColoredText>
                  )}
                  {status === "success" && (
                    <ColoredText color={Colors.card}>Signed Up!</ColoredText>
                  )}
                </SignupLayout>
              </>
            );
          }}
        />
      </StylesProvider>
    </SignupWidth>
  );
};

export default Signup;
