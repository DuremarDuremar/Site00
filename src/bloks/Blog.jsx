import React, { useState } from "react";
import styled from "styled-components";
import logo from "../img/logo.jpg";
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

const left = (
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
);

const right = (
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
);

const Wrapper = styled.div`
  max-width: 100%;
  min-height: 865px;
  background: #f5f8ff;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
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
  padding: ${(props) => (props.res900 ? "0 10px" : "60px 10px 0")};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Slider = styled.div`
  padding: 10px 0;
  margin-top: calc(20px + 5vw);
  background-color: #fff;
  display: flex;
  max-width: 958px;
  min-height: 404px;
  align-items: center;
  flex-direction: ${(props) => (props.res900 ? "row" : "column")};
`;

const SliderLeft = styled.div`
  flex: 1 1 50%;
  display: grid;
  grid-template-columns: ${(props) =>
    props.res600 ? "repeat(2, 1fr)" : "repeat(1, 1fr)"};
  grid-gap: 12px;
  margin-left: ${(props) => (props.res900 ? "2.5vw" : "0")};

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

    ${(props) =>
      props.res900 &&
      `
      :first-child {
      width: 267px;
      height: 267px;
      grid-row: span 2 / auto;
    }
    :not(:first-child) {
      width: 127px;
      height: 126.58px;
    }
  `}

    ${(props) =>
      !props.res900 &&
      props.res600 &&
      `
      width: 190px;
      height: 190px;
      :last-child {
      width: 388px;
      height: 240px;
      grid-column: span 2 / auto;
    }
  `}
${(props) =>
      !props.res600 &&
      `
      width: calc(160px + 25vw);
      height: calc(160px + 25vw);
    
  `}

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
  top: ${(props) => (props.first && props.res900 ? "38%" : "28%")};
  top: ${(props) =>
    props.last && !props.res900 && props.res600 ? "33%" : "30%"};
  top: ${(props) => !props.res600 && "40%"};
  transform: translateY(-50%);
  left: 50%;
  transform: translateX(-50%);
  background-color: #fff;
  padding: ${(props) => (props.first && props.res900 ? "24px" : "15px")};
  padding: ${(props) =>
    props.last && !props.res900 && props.res600 ? "24px" : "15px"};
  border-radius: 100%;
`;

const SliderRight = styled.div`
  flex: 1 1 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 8px;
`;

const Buttons = styled.div`
  margin-top: 31px;

  ${(props) =>
    !props.res600 &&
    `
      display:flex;
      flex-direction: column;
      align-items: center;
  `}
  button {
    :last-child {
      margin: ${(props) => (props.res600 ? "0 0 0 8px" : "8px 0 0 0")};
    }
  }
`;
const Circles = styled.div`
  width: 48px;
  height: 8px;
  display: flex;
  justify-content: space-between;
  margin-top: 8.5vw;
  div {
    width: 8px;
    height: 8px;
    background-color: #d1d6e3;
    border-radius: 100%;
  }
`;

const Arrows600 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
  width: 200px;
  img {
    display: block;
    max-width: 50px;
    height: 45px;
    border: 4px solid #332e2ee9;
    border-radius: 15px;
  }
`;
const Modal = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: grey;
  opacity: 0.8;
  z-index: 3;
`;
const ModalImages = styled.div`
  position: absolute;
  opacity: 1;
  z-index: 4;
`;

const Blog = ({ res900, res600 }) => {
  const [modal, setModal] = useState(false);
  const [animals, setAnimals] = useState(null);

  return (
    <Wrapper>
      {res600 && <Arrow left>{left}</Arrow>}

      <Content res900={res900}>
        <TitleText fontSizeh1="24px" lineHeighth1="30px">
          <h4>OUR RESOURCES</h4>
          <h1>Start reading our blog</h1>
        </TitleText>
        {!res600 && (
          <Arrows600>
            <Arrow left>{left}</Arrow> <img src={logo} alt="logo" />{" "}
            <Arrow>{right}</Arrow>
          </Arrows600>
        )}
        <Slider res900={res900}>
          <SliderLeft res900={res900} res600={res600}>
            <div
              onClick={() => {
                setModal(true);
                setAnimals(Blog0101);
              }}
            >
              <img src={Blog0101} alt="1" />
              <Lupa first res900={res900} res600={res600}>
                {lupa}
              </Lupa>
            </div>
            <div
              onClick={() => {
                setModal(true);
                setAnimals(Blog0102);
              }}
            >
              <img src={Blog0102} alt="2" />
              <Lupa res900={res900} res600={res600}>
                {lupa}
              </Lupa>
            </div>
            <div
              onClick={() => {
                setModal(true);
                setAnimals(Blog0103);
              }}
            >
              <img src={Blog0103} alt="3" />
              <Lupa last res900={res900} res600={res600}>
                {lupa}
              </Lupa>
            </div>
          </SliderLeft>
          <SliderRight>
            <TitleText
              fontWeighth1="400"
              paddingToph1={res900 ? "0" : "20px"}
              paddingTopP="2.4vw"
              fontSizeP="14px"
              lineHeightP="27px"
              maxWidthP="408px"
              textAlignh1={res900 ? "left" : "center"}
              textAlignP="left"
              marginP="0"
              fontSizeh1="calc(23px + 1vw)"
            >
              <h1>How to start planning</h1>
              <p>
                Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu
                usu vidit tractatos, vero tractatos ius an, in mel diceret
                persecuti. Natum petentium principes mei ea. Tota everti
                periculis vis ei, quas tibique pro at, eos ut decore ...
              </p>
            </TitleText>
            <Buttons res600={res600}>
              <Button>
                <p>Read now</p>
              </Button>
              <Button width="211px" background="#fff" color="#A6B6DA">
                <p>Add to your bookmarks</p>
              </Button>
            </Buttons>
          </SliderRight>
        </Slider>
        <Circles>
          <div></div>
          <div></div>
          <div></div>
        </Circles>
      </Content>
      {res600 && <Arrow>{right}</Arrow>}
      {modal && (
        <>
          <Modal onClick={() => setModal(false)}></Modal>
          <ModalImages>
            <img src={animals} alt="#" />
          </ModalImages>
        </>
      )}
    </Wrapper>
  );
};

export default Blog;
