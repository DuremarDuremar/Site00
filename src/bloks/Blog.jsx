import React, { useState } from "react";
import styled from "styled-components";
import logo from "../img/logo.jpg";
import Blog0101 from "../img/blog1.jpg";
import Blog0102 from "../img/blog2.jpg";
import Blog0103 from "../img/blog3.jpg";
import Blog0104 from "../img/blog4.jpg";
import Blog0105 from "../img/blog5.jpg";
import TitleText from "../components/TitleText";
import Button from "../components/Button";
import SliderForm from "../components/Form";

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
  min-height: ${(props) => (props.page !== 3 ? "404px" : "200px")};
  flex-direction: ${(props) =>
    props.res900 && props.page !== 3 ? "row" : "column"};
  align-items: ${(props) => (props.page !== 3 ? "center" : "flex-end")};
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
      pointer-events: none;
  `}

    img {
      filter: ${(props) => (props.res600 ? "opacity(30%)" : "opacity(100%)")};
      transition: all ease-out 0.95s;
      display: block;
      border-radius: 5px;
      width: 100%;
      height: 100%;
    }
  }
  /* border-right: 1px solid blue; */
`;

const SliderLeft2 = styled.div`
  flex: 1 1 50%;
  position: relative;
  margin-top: ${(props) => (props.res900 ? "0" : "3vw")};

  div {
    ${(props) =>
      props.res600 &&
      `
      cursor:pointer;
      :first-child {
      width: 412px;
      height: 412px;
    }
    :last-child {
      width: 167px;
      height: 167px;
      position: absolute;
      
      right: 0.1vw;
    }    
  `}
    :last-child {
      bottom: ${(props) =>
        props.first === "true" && props.res600 ? "0" : "60%"};
      right: ${(props) =>
        props.first === "true" && props.res600 ? "0.1vw" : "60%"};
    }
    ${(props) =>
      !props.res600 &&
      `
      pointer-events: none;
      width: 74vw;
      height: 74vw;
      :last-child{
        margin-top: 3vw;
      }
    
      
  `}

    img {
      display: block;
      border-radius: 5px;
      width: 100%;
      height: 100%;
    }
  }
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
`;
const ItemCircles = styled.div`
  width: 8px;
  height: 8px;
  background-color: ${(props) => (props.activ ? "#5e81fe" : "#d1d6e3")};
  border-radius: 100%;
  cursor: pointer;
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
  background: linear-gradient(
    13.46deg,
    rgba(255, 199, 53, 0.44) 1.89%,
    rgba(255, 227, 154, 0.93) 1.9%,
    rgba(255, 159, 90, 0) 100%
  );
  z-index: 3;
  cursor: pointer;
`;
const ModalImages = styled.div`
  position: absolute;
  z-index: 4;
  display: flex;
  align-items: center;

  img {
    border: 9px solid rgba(255, 199, 53, 0.44);

    border-radius: 40%;
    display: block;
    width: calc(30vw + 200px);
    height: calc(30vw + 200px);
  }

  i {
    cursor: pointer;
    color: rgba(255, 199, 53, 0.44);
    :hover {
      color: rgba(255, 199, 153, 0.44);
    }
  }
`;

const Blog = ({ res900, res600 }) => {
  const [modal, setModal] = useState(false);
  const [animals, setAnimals] = useState(null);
  const [animals2, setAnimals2] = useState([Blog0104, Blog0105]);
  const [page, setPage] = useState(1);

  const sliderLeft = (
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
  );

  const sliderRight = (
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
          Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu usu
          vidit tractatos, vero tractatos ius an, in mel diceret persecuti.
          Natum petentium principes mei ea. Tota everti periculis vis ei, quas
          tibique pro at, eos ut decore ...
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
  );

  const sliderLeft2 = (
    <SliderLeft2
      res900={res900}
      res600={res600}
      first={animals2[0] === Blog0104 ? "true" : "false"}
    >
      <div onClick={() => setAnimals2([...animals2].reverse())}>
        <img src={animals2[0]} alt="4" />
      </div>
      <div onClick={() => setAnimals2([...animals2].reverse())}>
        <img src={animals2[1]} alt="5" />
      </div>
    </SliderLeft2>
  );

  const circles = () => {
    const arrow = [1, 2, 3].map((item, index) => {
      return page === index + 1 ? (
        <ItemCircles
          key={index}
          activ
          onClick={() => setPage(index + 1)}
        ></ItemCircles>
      ) : (
        <ItemCircles
          key={index}
          onClick={() => setPage(index + 1)}
        ></ItemCircles>
      );
    });
    return <Circles>{arrow}</Circles>;
  };

  const arrow = (n) => {
    if (n === left) {
      return (
        <Arrow left onClick={() => sliderPage("past")}>
          {left}
        </Arrow>
      );
    } else {
      return <Arrow onClick={() => sliderPage("next")}>{right}</Arrow>;
    }
  };

  // слайдер страниц
  const sliderPage = (n) => {
    if (n === "next") {
      page < 3 ? setPage(page + 1) : setPage(1);
    } else {
      page > 1 ? setPage(page - 1) : setPage(3);
    }
  };

  // слайдер картинок
  const slider = (n) => {
    const links = [Blog0101, Blog0102, Blog0103];
    const array = links.sort().filter((item) => {
      return n === "next" ? item > animals : item < animals;
    });
    if (n === "next") {
      array.length > 0 ? setAnimals(array[0]) : setAnimals(links[0]);
    } else {
      array.length > 0
        ? setAnimals(array[array.length - 1])
        : setAnimals(links[links.length - 1]);
    }
  };

  return (
    <Wrapper>
      {res600 && !modal && arrow(left)}

      <Content res900={res900}>
        <TitleText fontSizeh1="24px" lineHeighth1="30px">
          <h4>OUR RESOURCES</h4>
          <h1>Start reading our blog</h1>
        </TitleText>
        {!res600 && (
          <Arrows600>
            {arrow(left)}
            <img src={logo} alt="logo" />
            {arrow(right)}
          </Arrows600>
        )}
        <Slider res900={res900} page={page}>
          {page === 1 && (
            <>
              {sliderLeft}
              {sliderRight}
            </>
          )}
          {page === 2 && (
            <>
              {sliderRight}
              {sliderLeft2}
            </>
          )}
          {page === 3 && <SliderForm res600={res600} />}
        </Slider>
        {circles()}
      </Content>
      {res600 && !modal && arrow(right)}
      {modal && (
        <>
          <Modal onClick={() => setModal(false)}></Modal>
          <ModalImages>
            <i
              className="fas fa-caret-left fa-6x"
              onClick={() => slider("past")}
            ></i>
            <img src={animals} alt="#" />
            <i
              className="fas fa-caret-right fa-6x"
              onClick={() => slider("next")}
            ></i>
          </ModalImages>
        </>
      )}
    </Wrapper>
  );
};

export default Blog;
