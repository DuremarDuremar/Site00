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
  /* background-color: pink; */
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
  min-height: 175.37px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    padding: 35px 10px;
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

  const ImagesFase = () => {
    const arr = [
      "assets/shop.jpg",
      "assets/kam.jpg",
      "assets/nic.jpg",
      "assets/sartr.jpg",
      "assets/haid.jpeg",
      "assets/gig.jpg",
    ];
    const res = arr.filter((item, index) => {
      return index + 1 === page;
    });
    return res[0];
  };

  const itemText = () => {
    switch (page) {
      case 1:
        return (
          <p>
            Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu usu
            vidit tractatos, vero tractatos ius an, in mel diceret persecuti.
          </p>
        );
      case 2:
        return (
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consequuntur nesciunt repudiandae neque libero rem assumenda
            officiis quam alias quisquam incidunt?
          </p>
        );
      case 3:
        return (
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit
            beatae ad saepe excepturi vero cum, culpa eos, porro odio facilis,
            architecto maiores ut. Sed reprehenderit blanditiis doloremque
            repellat, autem sunt ut! Nemo, facere libero.
          </p>
        );
      case 4:
        return (
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat,
            reiciendis!
          </p>
        );
      case 5:
        return (
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum
            deleniti a soluta perferendis, expedita aut corporis sed ut, labore
            explicabo veniam quos at dolorum amet tempora sapiente sint cum quas
            animi voluptas enim quasi! Tenetur exercitationem possimus eum nam
            quam.
          </p>
        );
      case 6:
        return (
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit eum
            dignissimos voluptatibus! Ad repellat totam nihil consectetur ut
            blanditiis quibusdam praesentium quae.
          </p>
        );
      default:
        <p></p>;
    }
  };

  return (
    <Wrapper>
      <Content>
        <TitleText
          maxWidthP="323px"
          textAlignh1="left"
          textAlignP="left"
          textAlignh4="left"
          paddingTopP="14px"
          paddingToph1="31px"
          fontSizeP="12px"
          lineHeightP="23px"
          colorP="#A4ABC8"
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
            {itemText()}
            <QuotersImg pic={ImagesFase()} />
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
