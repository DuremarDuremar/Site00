import React from "react";
import styled from "styled-components";
import Blog0101 from "../img/blog1.jpg";
import Blog0102 from "../img/blog2.jpg";
import Blog0103 from "../img/blog3.jpg";
import TitleText from "../components/TitleText";
import Button from "../components/Button";

const lupa = (
  <svg
    width="19"
    height="18"
    viewBox="0 0 19 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.1138 7.01428C13.1138 10.29 10.4548 12.9475 7.17224 12.9475C3.8897 12.9475 1.23071 10.29 1.23071 7.01428C1.23071 3.73858 3.8897 1.08105 7.17224 1.08105C10.4548 1.08105 13.1138 3.73858 13.1138 7.01428Z"
      stroke="#A7AAC6"
      strokeWidth="2"
    />
    <path
      d="M12.1304 11.9666L17.0886 16.9189"
      stroke="#A7AAC6"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Wrapper = styled.div`
  max-width: 100%;
  height: 865px;
  background: #f5f8ff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Arrow = styled.div`
  cursor: pointer;
  margin: ${(props) => (props.left ? "0 10px 0 5px" : "0 5px 0 10px")};
  svg path {
    transition: all ease-out 0.35s;
  }
  :hover svg path {
    stroke: #5e81fe;
  }
`;

const Content = styled.div`
  /* border: 1px solid black; */
  max-width: 1164px;
  padding: 0 10px;
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
`;

const SliderLeft = styled.div`
  flex: 1 1 50%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 12px;
  margin-left: 2.5vw;

  div {
    position: relative;
    background: linear-gradient(
      13.46deg,
      rgba(255, 199, 53, 0.44) 1.89%,
      rgba(255, 227, 154, 0.93) 1.9%,
      rgba(255, 159, 90, 0) 68.24%
    );
    :hover img {
      filter: opacity(100%);
    }
    :hover i {
      opacity: 1;
    }
    cursor: pointer;
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
      transition: all ease-out 0.95s;
      filter: opacity(30%);
      display: block;
      border-radius: 5px;
      width: 100%;
      height: 100%;
    }
  }
  /* border-right: 1px solid blue; */
`;

const Lupa = styled.i`
  transition: opacity ease-out 0.55s;
  position: absolute;
  opacity: 0;
  z-index: 1;
  top: ${(props) => (props.first ? "38%" : "28%")};
  transform: translateY(-50%);
  left: 50%;
  transform: translateX(-50%);
  background-color: #fff;
  padding: ${(props) => (props.first ? "24px" : "15px")};
  border-radius: 100%;
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
      <Arrow left>
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
      </Arrow>

      <Content>
        <TitleText fontSizeh1="24px" lineHeighth1="30px">
          <h4>OUR RESOURCES</h4>
          <h1>Start reading our blog</h1>
        </TitleText>
        <Slider>
          <SliderLeft>
            <div>
              <img src={Blog0101} alt="1" />
              <Lupa first>{lupa}</Lupa>
            </div>
            <div>
              <img src={Blog0102} alt="2" />
              <Lupa>{lupa}</Lupa>
            </div>
            <div>
              <img src={Blog0103} alt="3" />
              <Lupa>{lupa}</Lupa>
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
      <Arrow>
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
      </Arrow>
    </Wrapper>
  );
};

export default Blog;
