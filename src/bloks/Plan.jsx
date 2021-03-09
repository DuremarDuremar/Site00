import React from "react";
import styled from "styled-components";
import TitleText from "../components/TitleText";

const Wrapper = styled.div`
  max-width: 100%;
  background-color: #f5f8ff;
  height: 776px;
`;
const Content = styled.div`
  max-width: 100%;
  display: flex;
  padding: 0 10px;
`;

const Plan = () => {
  return (
    <Wrapper>
      <Content>
        <TitleText textAlignP="left" maxWidthP="413px" paddingToph1="27px">
          <h4>DESKTOP AND MOBILE APP</h4>
          <h1>Plan and manage</h1>
          <p>
            Brute laoreet efficiendi id his, ea illum nonumes luptatum pro. Usu
            atqui laudem an, insolens gubergren similique est cu. Et vel modus
            congue vituperata. Solum patrioque no sea. Mea ex malis mollis
            oporteat. Eum an expetenda consequat.
          </p>
        </TitleText>
      </Content>
    </Wrapper>
  );
};

export default Plan;
