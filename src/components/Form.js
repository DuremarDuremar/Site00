import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "./Button";
import TitleText from "./TitleText";
import styled from "styled-components";

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 10px;
  min-height: ${(props) => !props.res600 && "270px"};
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
  input::-webkit-input-placeholder {
    color: #7a85ad;
  }
  button {
    margin-top: ${(props) => !props.res600 && "12px"};
  }
`;
const Alert = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  opacity: 0.95;
  overflow: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  z-index: 4;
  padding: 30px 0;
  background: #efeff7;

  span {
    font-family: Roboto;
    font-style: italic;
    font-weight: normal;
    font-size: 14px;
    line-height: 27px;
    letter-spacing: 0.03em;
    color: #8d96bd;
    text-align: center;
    padding: 0 10px;
    margin-bottom: 20px;

    b {
      font-style: italic;
      font-weight: bold;
      font-size: 17px;
      line-height: 30px;
      letter-spacing: 0.03em;
      color: #8d96bd;
    }
  }
`;

const Errors = styled.div`
  font-size: 14px;
  line-height: 27px;
  letter-spacing: 0.03em;
  color: #8d96bd;
  text-align: center;
  margin-top: 6px;
  i {
    color: red;
  }
`;
const SliderForm = ({ res600, sub, setSub }) => {
  const [form, setForm] = useState("");

  const { register, handleSubmit, errors } = useForm();

  const OnSubmit = (data) => {
    data.email !== "" && setSub(true);
    setForm(data.email);
    // console.log("data", data);
  };

  return (
    <FormWrapper res600={res600}>
      <TitleText maxWidthP="300px">
        <h4>Sign up for newsletter</h4>
        <p>
          Cu qui soleat partiendo urbanitas. Eum aperiri indoctum eu, homero
          alterum.
        </p>
      </TitleText>

      <Form res600={res600} onSubmit={handleSubmit(OnSubmit)}>
        <input
          name="email"
          type="email"
          placeholder="Email address"
          ref={register({ required: true, minLength: 10 })}
        />

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
      {sub && (
        <Alert>
          <span>
            Your Email <b>{form}</b> is subscribed to the mailing list
          </span>
          <Button
            onClick={() => {
              setSub(false);
              setForm("");
            }}
            width="70px"
            borderRadius="30px"
          >
            <p>OK</p>
          </Button>
        </Alert>
      )}
      {errors.email && (
        <Errors>
          <i className="fas fa-exclamation-circle"></i> please enter email
        </Errors>
      )}
    </FormWrapper>
  );
};

export default SliderForm;