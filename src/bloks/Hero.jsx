import React from "react";
import styled from "styled-components";
import FonImage from "../img/hero.png";
import TitleText from "../components/TitleText";

const Wrapper = styled.div`
  max-width: 100%;
  min-height: 570px;
  transition: all ease-out 0.35s;
  background-image: url(${FonImage});
  background-repeat: no-repeat;
  background-size: cover;
`;
const Content = styled.div`
  max-width: 603px;
  margin: 0px auto;
  padding: ${(props) => (props.logoImg ? "112px 10px 0" : "92px 10px 0")};
`;

const Play = styled.div`
  width: 52px;
  height: 52px;
  box-shadow: 0px 10px 50px rgba(201, 209, 231, 0.6);
  background-color: #fff;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px auto 0;
  cursor: pointer;
  transition: all ease-out 1.75s;
  :hover i {
    color: #fff;
  }
  :hover {
    background-color: #5e81fe;
  }
  i {
    transition: all ease-out 0.75s;
    padding-left: 5px;
    color: #697ca6;
  }
`;

const Hero = ({ logoImg }) => {
  return (
    <Wrapper>
      <Content logoImg={logoImg}>
        <TitleText
          shadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          fontWeighth1="300"
          fontSizeh1="calc(34px + 1vw)"
          lineHeighth1="calc(33px + 2vw)"
          paddingToph1="16px"
        >
          <h4>PLAN YOUR LIFE</h4>
          <h1>Increase your productivity</h1>
          <p>
            Brute laoreet efficiendi id his, ea illum nonumes luptatum pro. Usu
            atqui laudem an, insolens gubergren similique est cu. Et vel modus
            congue vituperata.
          </p>
        </TitleText>
        <Play>
          <i className="fas fa-play"></i>
        </Play>
      </Content>
    </Wrapper>
  );
};

export default Hero;
