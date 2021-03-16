import React from "react";
import styled from "styled-components";
import SliderForm from "../components/Form";

const Wrapper = styled.div`
  background: #fcfdff;
  min-height: 332px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Content = styled.div`
  width: ${(props) =>
    props.res900
      ? "calc(600px + 21.8vw)"
      : props.res600
      ? "calc(200px + 52.8vw)"
      : "100%"};
  min-height: 95px;
  padding: 0 8px;
`;

const NewsLetter = ({ res900, res600, sub, setSub }) => {
  return (
    <Wrapper>
      <Content res900={res900}>
        <SliderForm
          letter
          sub={sub}
          setSub={setSub}
          res900={res900}
          res600={res600}
        ></SliderForm>
      </Content>
    </Wrapper>
  );
};

export default NewsLetter;
