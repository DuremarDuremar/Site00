import React from "react";
import styled from "styled-components";
import Blog0101 from "../img/blog1.jpg";
import Blog0102 from "../img/blog2.jpg";
import Blog0103 from "../img/blog3.jpg";
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
  margin-top: 84px;
  background-color: #fff;
  display: flex;
  max-width: 958px;
  min-height: 394px;
  align-items: center;

  /* svg {
    cursor: pointer;
    :first-child {
      margin-right: calc(7px + 5vw);
    }
    :last-child {
      margin-left: calc(7px + 5vw);
    }
  } */
`;

const SliderLeft = styled.div`
  flex: 1 1 50%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 12px;

  div {
    :first-child {
      width: 267px;
      height: 267px;
      grid-row: span 2 / auto;
    }
    :not(:first-child) {
      width: 127px;
      height: 126.58px;
    }
    img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
  border-right: 1px solid blue;
`;
const SliderRight = styled.div`
  flex: 1 1 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Buttons = styled.div`
  margin-top: 31px;

  button {
    :last-child {
      margin-left: 8px;
    }
  }
`;
const Options = styled.div`
  width: 48px;
  height: 8px;
  background-color: pink;
`;

const Blog = () => {
  return (
    <Wrapper>
      <Content>
        <TitleText fontSizeh1="24px" lineHeighth1="30px">
          <h4>OUR RESOURCES</h4>
          <h1>Start reading our blog</h1>
        </TitleText>
        <Slider>
          <SliderLeft>
            <div>
              <img src={Blog0101} alt="1" />
            </div>
            <div>
              <img src={Blog0102} alt="2" />
            </div>
            <div>
              <img src={Blog0103} alt="3" />
            </div>
          </SliderLeft>
          <SliderRight>
            <TitleText
              fontWeighth1="400"
              paddingToph1="0"
              paddingTopP="32px"
              fontSizeP="14px"
              lineHeightP="27px"
              maxWidthP="408px"
              textAlignh1="left"
              textAlignP="left"
              marginP="0"
            >
              <h1>How to start planning</h1>
              <p>
                Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu
                usu vidit tractatos, vero tractatos ius an, in mel diceret
                persecuti. Natum petentium principes mei ea. Tota everti
                periculis vis ei, quas tibique pro at, eos ut decore ...
              </p>
            </TitleText>
            <Buttons>
              <Button>
                <p>Read now</p>
              </Button>
              <Button width="211px" background="#fff" color="#A6B6DA">
                <p>Add to your bookmarks</p>
              </Button>
            </Buttons>
          </SliderRight>
        </Slider>
        <Options></Options>
      </Content>
    </Wrapper>
  );
};

export default Blog;

{
  /* <svg
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
          </svg> */
}

{
  /* <svg
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
          </svg> */
}
