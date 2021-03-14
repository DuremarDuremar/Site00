import React, { useState } from "react";
import styled from "styled-components";
import TitleText from "../components/TitleText";
import Circles from "../components/Circles";
import QuotersImg from "../components/QuotersImg";

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
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;

const Slider = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Items = styled.div`
  position: relative;
  width: 423px;
  height: 175.37px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    max-width: 283px;
    font-family: Roboto;
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.03em;
    color: #676f95;
  }
`;

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
          <Items>
            <p>
              Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu
              usu vidit tractatos, vero tractatos ius an, in mel diceret
              persecuti.
            </p>
            <QuotersImg pic={"assets/gig.jpg"} />
          </Items>
          <Circles
            page={page}
            setPage={setPage}
            number={6}
            Width="96px"
            MarginTop="calc(3.5vw + 16px)"
          />
        </Slider>
      </Content>
    </Wrapper>
  );
};

export default Quotes;
