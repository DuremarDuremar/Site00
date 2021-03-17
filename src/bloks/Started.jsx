import React from "react";
import styled from "styled-components";
import TitleText from "../components/TitleText";
import Button from "../components/Button";
import FonImage from "../img/clouds2.png";

const Wrapper = styled.div`
  min-width: 100%;
  min-height: 447px;
  background: linear-gradient(229.32deg, #6888ff 12.77%, #5e80ff 73.11%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Content = styled.div`
  width: ${(props) => (props.res450 ? "96vw" : "88vw")};
  min-height: 319px;
  padding: 19px 20px 35px;
  background-image: url(${FonImage});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
const Buttons = styled.div`
  padding-top: 15px;
  display: flex;
  flex-direction: ${(props) => (props.res450 ? "row" : "column")};
  justify-content: center;
  button {
    :last-child {
      margin-top: ${(props) => !props.res450 && "10px"};
    }
  }
`;
const Started = ({ res450 }) => {
  return (
    <Wrapper>
      <Content res450={res450} id="6">
        <TitleText
          colorh4="#fff"
          colorh1="#fff"
          colorP="#fff"
          maxWidthP="52.7vw"
          fontSizeh1="calc(35px + 1vw)"
          lineHeighth1="60px"
          fontWeighth1="300"
        >
          <h4>PLAN YOUR LIFE</h4>
          <h1>
            Get <b>started</b> now
          </h1>
          <p>
            Brute laoreet efficiendi id his, ea illum nonumes luptatum pro. Usu
            atqui laudem an, insolens gubergren similique est cu. Et vel modus
            congue vituperata.
          </p>
        </TitleText>
        <Buttons res450={res450}>
          <Button background="#FFF" color="#565F82" width="130px">
            <p>View pricing</p>
          </Button>
          <Button
            color="#C7D3FF"
            border="1px solid #A0B4FF"
            background="#6888FF"
            width="155px"
          >
            <p>Read documentation</p>
          </Button>
        </Buttons>
      </Content>
    </Wrapper>
  );
};

export default Started;
