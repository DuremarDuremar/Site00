import React from "react";
import styled from "styled-components";
import TitleText from "../components/TitleText";
import Button from "../components/Button";

const Wrapper = styled.div`
  max-width: 100%;
  height: 865px;
  background: #f5f8ff;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Content = styled.div`
  border: 1px solid black;
  max-width: 1154px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Slider = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  svg {
    cursor: pointer;
    :first-child {
      margin-right: calc(7px + 5vw);
    }
    :last-child {
      margin-left: calc(7px + 5vw);
    }
  }
`;
const SliderItem = styled.div`
  background-color: #fff;
  max-width: 958px;
  height: 394px;
`;

const Illustrations = styled.div``;
const Buttons = styled.div``;
const Options = styled.div``;

const Blog = () => {
  return (
    <Wrapper>
      <Content>
        <TitleText fontSizeh1="24px" lineHeighth1="30px">
          <h4>OUR RESOURCES</h4>
          <h1>Start reading our blog</h1>
        </TitleText>
        <Slider>
          <svg
            width="27"
            height="19"
            viewBox="0 0 27 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M25 9.5L2 9.5M2 9.5L9.81132 17M2 9.5L9.81132 2"
              stroke="#A8B4E5"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <SliderItem>
            <Illustrations></Illustrations>
            <div>
              <TitleText
                fontWeighth1="400"
                paddingTopP="32px"
                fontSizeP="14px"
                lineHeightP="27px"
                maxWidthP="408px"
                textAlignP="left"
              >
                <h1>How to start planning</h1>
                <p>
                  Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam.
                  Eu usu vidit tractatos, vero tractatos ius an, in mel diceret
                  persecuti. Natum petentium principes mei ea. Tota everti
                  periculis vis ei, quas tibique pro at, eos ut decore ...
                </p>
              </TitleText>
              <Buttons>
                <Button></Button>
                <Button></Button>
              </Buttons>
            </div>
          </SliderItem>
          <svg
            width="27"
            height="19"
            viewBox="0 0 27 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 9.5H25M25 9.5L17.1887 2M25 9.5L17.1887 17"
              stroke="#A8B4E5"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Slider>
        <Options></Options>
      </Content>
    </Wrapper>
  );
};

export default Blog;
