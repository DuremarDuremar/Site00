import React, { useState } from "react";
import styled from "styled-components";
import TitleText from "../components/TitleText";
import Circles from "../components/Circles";

const Wrapper = styled.div`
  background: linear-gradient(180deg, #eaf0ff 0%, #f6f9ff 100%);
  max-width: 100%;
  height: 479px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Content = styled.div`
  width: 887px;
  background-color: pink;
  display: flex;
`;

const Slider = styled.div``;

const Items = styled.div``;

const Quotes = () => {
  const [page, setPage] = useState(1);

  return (
    <Wrapper>
      <Content>
        <TitleText
          maxWidthP="340px"
          textAlignh1="left"
          textAlignP="left"
          textAlignh4="left"
          paddingTopP="14px"
          paddingToph1="31px"
        >
          <h4>TESTIMONIALS</h4>
          <h1>Customers's quotes</h1>
          <p>
            Brute laoreet efficiendi id his, ea illum nonumes luptatum pro. Usu
            atqui laudem an.
          </p>
        </TitleText>
        <Slider>
          <Items></Items>
          <Circles page={page} setPage={setPage} number={6} Width="96px" />
        </Slider>
      </Content>
    </Wrapper>
  );
};

export default Quotes;
