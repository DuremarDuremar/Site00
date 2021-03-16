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
  width: 887px;
  min-height: 95px;
`;

const NewsLetter = ({ sub, setSub }) => {
  return (
    <Wrapper>
      <Content>
        <SliderForm letter sub={sub} setSub={setSub}></SliderForm>
      </Content>
    </Wrapper>
  );
};

export default NewsLetter;
