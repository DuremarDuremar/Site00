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
  background-color: azure;
`;
const Items = styled.div``;
const Item = styled.div``;
const ItemTitle = styled.div``;
const ItemBlock = styled.div`
  > p {
    max-width: 391px;
    font-family: Roboto;
    font-style: normal;
    font-size: 14px;
    line-height: 27px;
    letter-spacing: 0.03em;
    color: #8d96bd;
  }
`;

const Faq = () => {
  const [activ, setActiv] = useState(1);
  return (
    <Wrapper>
      <Content>
        <TitleText fontSizeh1="24px" lineHeighth1="30px">
          <h4>Customer help</h4>
          <h1>Frequently asked questions</h1>
        </TitleText>
        <Items>
          <Item>
            <ItemTitle>
              {up}
              <h5>Reque insolens in vel?</h5>
            </ItemTitle>
            <ItemBlock>
              <p>
                Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu
                usu vidit tractatos, vero tractatos ius an, in mel diceret
                persecuti.
              </p>
              <Button width="195px" background="#E8ECF4" color="#7382A3">
                <p>Go to documentation</p>
              </Button>
            </ItemBlock>
          </Item>
        </Items>
      </Content>
    </Wrapper>
  );
};

export default Faq;
