import React from "react";
import Button from "./Button";
import styled from "styled-components";

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 10px;
  min-height: ${(props) => !props.res600 && "270px"};

  div {
    max-width: 300px;
    h4 {
      color: #3d4f9f;
      font-weight: bold;
      font-size: 18px;
      line-height: 22px;
      text-align: center;
    }
    p {
      margin-top: 1vw;
      font-family: Roboto;
      font-weight: normal;
      font-size: 14px;
      line-height: 27px;
      letter-spacing: 0.03em;
      color: #8d96bd;
      text-align: center;
    }
  }
`;
const Form = styled.form`
  display: flex;
  height: 59px;
  margin-top: 5vw;
  display: ${(props) => (props.res600 ? "flex" : "block")};

  input {
    height: 59px;
    width: ${(props) => (props.res600 ? "279px" : "calc(170px + 20vw)")};
    outline: none;
    border: none;
    background-color: #efeff7;
    color: #7a85ad;
    font-weight: bold;
    font-size: 13px;
    line-height: 16px;
    display: flex;
    align-items: center;
    padding-left: 23px;
    border-radius: 5px;
    margin-right: 14px;
  }
  button {
    margin-top: ${(props) => !props.res600 && "12px"};
  }
`;

const SliderForm = ({ res600 }) => {
  return (
    <FormWrapper res600={res600}>
      <div>
        <h4>Sign up for newsletter</h4>
        <p>
          Cu qui soleat partiendo urbanitas. Eum aperiri indoctum eu, homero
          alterum.
        </p>
      </div>
      <Form res600={res600}>
        <input placeholder="Email address" />
        <Button
          height="59px"
          borderRadius="5px"
          background="#4D6CE1"
          color="#fff"
          border="1px solid #efeff7"
          width="184px"
        >
          <p>Save me</p>
        </Button>
      </Form>
    </FormWrapper>
  );
};

export default SliderForm;
