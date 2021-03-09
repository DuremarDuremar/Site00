import React from "react";
import styled from "styled-components";
import FonImage from "../img/hero.png";
import TitleText from "../components/TitleText";

const Wrapper = styled.div`
  max-width: 100%;
  height: 570px;
  /* margin: 0px auto; */
  transition: all ease-out 0.35s;
  background-image: url(${FonImage});
  background-repeat: no-repeat;
  background-size: cover;
`;
const Content = styled.div`
  max-width: 603px;
  margin: 0px auto;
  padding: 92px 10px 0;
`;

const Hero = () => {
  return (
    <Wrapper>
      <Content>
        <TitleText>
          <h4>PLAN YOUR LIFE</h4>
          <h1>Increase your productivity</h1>
          <p>
            Brute laoreet efficiendi id his, ea illum nonumes luptatum pro. Usu
            atqui laudem an, insolens gubergren similique est cu. Et vel modus
            congue vituperata.
          </p>
        </TitleText>
      </Content>
    </Wrapper>
  );
};

export default Hero;
