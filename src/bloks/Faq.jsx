import React, { useState } from "react";
import styled from "styled-components";
import TitleText from "../components/TitleText";
import Button from "../components/Button";

const up = (
  <svg
    width="18"
    height="11"
    viewBox="0 0 18 11"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16 9L9 2L2 9"
      stroke="#495274"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const down = (
  <svg
    width="18"
    height="11"
    viewBox="0 0 18 11"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2 2L9 9L16 2"
      stroke="#8E96B7"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const itemContent = [
  {
    title: "Reque insolens in vel?",
    text:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, impedit?",
  },
  {
    title: "Vis rebum error graecis ea, id sit postea accusamus?",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic soluta quia, reprehenderit consectetur debitis architecto veritatis totam saepe, tenetur voluptatibus cumque labore nam corrupti ea officiis neque quaerat accusantium rem! Eius explicabo eos consectetur dolor iusto facere totam! Dolores, dolorem eligendi. Accusantium ratione similique dicta delectus.",
  },
  {
    title: "Lorem repudiandae ne nec?",
    text:
      "Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu usu vidit tractatos, vero tractatos ius an, in mel diceret persecuti.",
  },
  {
    title: "Ad dicit numquam vel. Et eos iudico feugait percipitur?",
    text:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, ad! Consequatur repellendus aut incidunt, explicabo laborum delectus, consequuntur doloremque quidem in omnis aspernatur numquam iusto qui culpa quod quam eveniet!",
  },
  {
    title: "Sea no dico percipitur. Fierent constituam definitiones id eum?",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, ducimus modi?",
  },
];

const Wrapper = styled.div`
  max-width: 100%;
  height: 964px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Content = styled.div`
  width: 743px;
`;
const Items = styled.div`
  margin-top: 68px;
`;
const Item = styled.div`
  cursor: pointer;
  border-bottom: 1px solid #d8e3fe;

  :not(:first-child) {
    margin-top: 30px;
  }
`;
const ItemTitle = styled.div`
  display: flex;
  h5 {
    color: ${(props) => (props.active ? "#495274" : "#8E96B7")};
    padding: 0 0 20px 23px;
    font-weight: bold;
    font-size: 15px;
    line-height: 19px;
    display: flex;
    align-items: center;
    letter-spacing: 0.03em;
  }
  svg {
    margin-top: 4px;
  }
`;
const ItemBlock = styled.div`
  display: ${(props) => (props.active ? "flex" : "none")};
  /* visibility: ${(props) => (props.active ? "visible" : "hidden")}; */
  justify-content: space-evenly;
  padding-bottom: 20px;
  > p {
    max-width: 391px;
    font-family: Roboto;
    font-style: normal;
    font-size: 14px;
    line-height: 27px;
    letter-spacing: 0.03em;
    color: #8d96bd;
  }
  button {
    align-self: center;
  }
`;

const Faq = () => {
  const [activ, setActiv] = useState(1);

  const stopPro = (e) => {
    e.stopPropagation();
  };

  const items = itemContent.map((item, index) => {
    return (
      <Item
        key={index + 1}
        onClick={() =>
          activ !== index + 1 ? setActiv(index + 1) : setActiv(0)
        }
      >
        <ItemTitle active={activ === index + 1 ? true : false}>
          {activ === index + 1 ? up : down}
          <h5>{item.title}</h5>
        </ItemTitle>
        <ItemBlock active={activ === index + 1 ? true : false}>
          <p>{item.text}</p>
          <Button
            width="195px"
            background="#E8ECF4"
            color="#7382A3"
            onClick={(e) => stopPro(e)}
          >
            <p>Go to documentation</p>
          </Button>
        </ItemBlock>
      </Item>
    );
  });

  return (
    <Wrapper>
      <Content>
        <TitleText fontSizeh1="24px" lineHeighth1="30px">
          <h4>Customer help</h4>
          <h1>Frequently asked questions</h1>
        </TitleText>
        <Items>{items}</Items>
      </Content>
    </Wrapper>
  );
};

export default Faq;
